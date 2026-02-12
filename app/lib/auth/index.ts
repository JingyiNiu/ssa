/**
 * 认证管理模块
 * 处理 token 存储、验证、过期检查等
 * 注意：现在只使用 Cookie 存储，不再使用 localStorage
 */

import { loginUser, getCurrentUser } from '../api';
import type { User, LoginParams } from '../api/services/users';
import { useAuthStore } from '@/app/store/authStore';
import { getTokenFromCookie } from '../cookies';

// 重新导出简单的 ProtectedRoute
export { ProtectedRoute } from './ProtectedRoute.simple';

/**
 * 获取 authStore 实例（用于非 React 组件）
 */
function getAuthStore() {
  return useAuthStore.getState();
}

/**
 * 解码 JWT Token 获取 payload
 */
function decodeJWT(token: string): any {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return null;
    
    const payload = parts[1];
    const decoded = atob(payload.replace(/-/g, '+').replace(/_/g, '/'));
    return JSON.parse(decoded);
  } catch (error) {
    console.error('Failed to decode JWT:', error);
    return null;
  }
}

/**
 * 从 token 中提取过期时间
 */
function getTokenExpiry(token: string): number | null {
  const decoded = decodeJWT(token);
  if (decoded && decoded.exp) {
    // exp 是 Unix 时间戳（秒），转换为毫秒
    return decoded.exp * 1000;
  }
  return null;
}

/**
 * 检查 token 是否过期
 */
export function isTokenExpired(token?: string): boolean {
  const authToken = token || getToken();
  if (!authToken) return true;
  
  const expiry = getTokenExpiry(authToken);
  if (!expiry) return false; // 无法解析时间，假设未过期
  
  // 提前 5 分钟判定为过期，避免请求时才发现
  const bufferTime = 5 * 60 * 1000; // 5 分钟
  return Date.now() > (expiry - bufferTime);
}

/**
 * 保存认证信息
 * 注意：现在只保存到 Cookie（通过 Zustand store）
 */
export function saveAuth(token: string, user: User): void {
  // 更新 Zustand store（会自动保存到 cookie）
  getAuthStore().setAuth(token, user);
  console.log('✅ Auth saved (cookie only)');
}

/**
 * 获取 token
 * 注意：现在从 Cookie 读取
 */
export function getToken(): string | null {
  // 优先从 store 获取（客户端已经 hydrated）
  const store = getAuthStore();
  if (store.isHydrated && store.token) {
    return store.token;
  }
  
  // 客户端：从 cookie 读取
  if (typeof window !== 'undefined') {
    return getTokenFromCookie();
  }
  
  return null;
}

/**
 * 获取用户信息
 * 注意：现在从 Zustand store 读取
 */
export function getUser(): User | null {
  return getAuthStore().user;
}

/**
 * 清除认证信息（登出）
 * 注意：现在只清除 Cookie
 */
export function clearAuth(): void {
  // 清除 Zustand store（会自动删除 cookie）
  getAuthStore().clearAuth();
  console.log('✅ Auth cleared (cookie only)');
}

/**
 * 检查是否已登录（且 token 未过期）
 */
export function isAuthenticated(): boolean {
  // 优先从 store 读取
  const storeState = getAuthStore();
  if (storeState.isAuthenticated && storeState.token) {
    // 双重检查 token 是否真的有效
    if (!isTokenExpired(storeState.token)) {
      return true;
    } else {
      // Token 已过期，清除认证信息
      clearAuth();
      return false;
    }
  }
  
  // 向后兼容：检查 localStorage
  const token = getToken();
  if (!token) return false;
  return !isTokenExpired(token);
}

/**
 * 登录并保存用户信息
 */
export async function login(params: LoginParams): Promise<{ token: string; user: User }> {
  // 1. 登录获取 token
  const { token } = await loginUser(params);
  
  // 2. 使用 token 获取用户详细信息（包括 price_level）
  const user = await getCurrentUser(token);
  
  // 3. 保存认证信息
  saveAuth(token, user);
  
  return { token, user };
}

/**
 * 验证并刷新用户信息
 * 用于页面刷新时验证 token 是否还有效
 */
export async function validateAndRefreshUser(): Promise<User | null> {
  const token = getToken();
  
  if (!token) {
    return null;
  }
  
  // 检查 token 是否过期
  if (isTokenExpired(token)) {
    clearAuth();
    return null;
  }
  
  try {
    // 验证 token 并获取最新用户信息
    const user = await getCurrentUser(token);
    
    // 更新 Zustand store
    getAuthStore().updateUser(user);
    
    return user;
  } catch (error) {
    // Token 无效或过期，清除认证信息
    clearAuth();
    return null;
  }
}

/**
 * 强制登出（清除信息并跳转登录页）
 */
export function logout(redirectToLogin: boolean = true): void {
  clearAuth();
  
  if (redirectToLogin && typeof window !== 'undefined') {
    // 保存当前页面，登录后可以返回
    const currentPath = window.location.pathname;
    if (currentPath !== '/login') {
      sessionStorage.setItem('redirectAfterLogin', currentPath);
    }
    
    window.location.href = '/login';
  }
}

/**
 * 获取 token 剩余有效时间（毫秒）
 */
export function getTokenRemainingTime(): number {
  const token = getToken();
  if (!token) return 0;
  
  const expiry = getTokenExpiry(token);
  if (!expiry) return Infinity;
  
  return Math.max(0, expiry - Date.now());
}

/**
 * 检查 token 是否即将过期（小于 10 分钟）
 */
export function isTokenExpiringSoon(): boolean {
  const remaining = getTokenRemainingTime();
  return remaining > 0 && remaining < 10 * 60 * 1000; // 10 分钟
}

/**
 * 导出 authStore hook，方便 React 组件使用
 */
export { useAuthStore } from '@/app/store/authStore';
