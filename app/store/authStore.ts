import { create } from "zustand";
import type { User } from "@/app/lib/api/services/users";
import { setTokenCookie, removeTokenCookie, getTokenFromCookie } from "@/app/lib/cookies";

interface AuthStore {
  // 状态
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isHydrated: boolean;

  // 方法
  setAuth: (token: string, user: User) => void;
  clearAuth: () => void;
  updateUser: (user: User) => void;
  initialize: () => void;
}

export const useAuthStore = create<AuthStore>()((set, get) => ({
  // === 初始状态 ===
  user: null,
  token: null,
  isAuthenticated: false,
  isHydrated: false,

  // === 设置认证信息（登录） ===
  setAuth: (token: string, user: User) => {
    console.log('✅ authStore.setAuth() called', {
      username: user.username,
      tokenPreview: `${token.substring(0, 20)}...`,
    });
    
    // 保存到 cookie（唯一数据源）
    setTokenCookie(token);
    
    set({
      token,
      user,
      isAuthenticated: true,
    });
  },

  // === 清除认证信息（登出） ===
  clearAuth: () => {
    console.log('🚪 authStore.clearAuth() called');
    
    // 删除 cookie
    removeTokenCookie();
    
    set({
      token: null,
      user: null,
      isAuthenticated: false,
    });
  },

  // === 更新用户信息 ===
  updateUser: (user: User) => {
    set({ user });
  },

  // === 初始化（从 cookie 读取 token） ===
  initialize: () => {
    console.log('🔄 authStore.initialize() - reading from cookie');
    
    // 🍪 从 cookie 读取 token（唯一数据源）
    const token = getTokenFromCookie();
    
    if (token) {
      // 简单的 token 过期检查
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        const isExpired = payload.exp && payload.exp * 1000 < Date.now();
        
        if (isExpired) {
          console.log('❌ Token expired, clearing auth');
          get().clearAuth();
        } else {
          console.log('✅ Token valid, restoring auth state');
          set({
            token,
            isAuthenticated: true,
            // user 需要额外获取，这里先设为 null
            user: null,
          });
        }
      } catch (error) {
        console.error('❌ Failed to parse token:', error);
        get().clearAuth();
      }
    }
    // 未登录时无 token 为正常情况，不打印日志

    // 标记为已完成 hydration
    set({ isHydrated: true });
  },
}));
