/**
 * API 认证辅助函数
 * 用于在不同环境（客户端/服务端）获取认证信息
 */

import { useAuthStore } from '@/app/store/authStore';

/**
 * 从 authStore 或 localStorage 获取当前用户的 token
 * 
 * 使用场景：
 * - 客户端组件：优先从 authStore 获取
 * - 服务端组件/API 路由：从 localStorage 获取（如果可用）
 * 
 * @returns token 字符串或 null
 */
export function getAuthToken(): string | null {
  // 检查是否在浏览器环境
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    // 方式 1: 从 authStore 获取 (优先)
    const store = useAuthStore.getState();
    if (store.token) {
      return store.token;
    }

    // 方式 2: 从 localStorage 获取 (fallback)
    const token = localStorage.getItem('authToken');
    return token;
  } catch (error) {
    console.error('Failed to get auth token:', error);
    return null;
  }
}

/**
 * 检查当前是否已登录
 * 
 * @returns 是否已登录
 */
export function isUserAuthenticated(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }

  try {
    const store = useAuthStore.getState();
    return store.isAuthenticated;
  } catch (error) {
    return false;
  }
}

/**
 * Hook: 在 React 组件中获取 token
 * 
 * 使用示例：
 * ```tsx
 * const token = useAuthToken();
 * const products = await getProductsAuto(token);
 * ```
 */
export function useAuthToken(): string | null {
  return useAuthStore((state) => state.token);
}
