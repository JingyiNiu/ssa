/**
 * API 拦截器
 * 自动处理 401/403 错误，清除过期 token 并跳转登录
 */

import { clearAuth } from '../auth';
import { APIError } from './errors';

/**
 * 处理 API 错误
 * 如果是认证错误，自动清除 token 并跳转登录
 */
export function handleAuthError(error: unknown): void {
  if (error instanceof APIError && error.isAuthError()) {
    console.warn('Authentication error detected, clearing auth and redirecting...');
    
    // 清除认证信息
    clearAuth();
    
    // 保存当前页面
    if (typeof window !== 'undefined') {
      const currentPath = window.location.pathname;
      if (currentPath !== '/login') {
        sessionStorage.setItem('redirectAfterLogin', currentPath);
      }
      
      // 跳转到登录页
      window.location.href = '/login';
    }
  }
}

/**
 * 包装 API 调用，自动处理认证错误
 */
export async function withAuthErrorHandling<T>(
  apiCall: () => Promise<T>
): Promise<T> {
  try {
    return await apiCall();
  } catch (error) {
    handleAuthError(error);
    throw error;
  }
}
