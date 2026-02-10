import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { User } from "@/app/lib/api/services/users";

interface AuthStore {
  // 状态
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isHydrated: boolean; // 是否已从 localStorage 恢复完成

  // 方法
  setAuth: (token: string, user: User) => void;
  clearAuth: () => void;
  updateUser: (user: User) => void;
  initialize: () => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
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
        set({
          token,
          user,
          isAuthenticated: true,
        });
      },

      // === 清除认证信息（登出） ===
      clearAuth: () => {
        console.log('🚪 authStore.clearAuth() called');
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

      // === 初始化（检查 token 是否有效） ===
      initialize: () => {
        const { token, user } = get();
        console.log('🔄 authStore.initialize() called', {
          hasToken: !!token,
          hasUser: !!user,
          tokenPreview: token ? `${token.substring(0, 20)}...` : null,
        });
        
        if (token) {
          // 简单的 token 过期检查
          try {
            const payload = JSON.parse(atob(token.split('.')[1]));
            const isExpired = payload.exp && payload.exp * 1000 < Date.now();
            
            if (isExpired) {
              console.log('❌ Token expired, clearing auth');
              // Token 已过期，清除认证信息
              get().clearAuth();
            } else {
              console.log('✅ Token valid, setting isAuthenticated = true');
              // Token 有效，设置为已认证状态
              set({ isAuthenticated: true });
            }
          } catch (error) {
            // Token 解析失败，清除认证信息
            console.error('❌ Failed to parse token:', error);
            get().clearAuth();
          }
        } else {
          console.log('⚠️ No token found in store');
        }
        
        // 标记为已完成 hydration
        set({ isHydrated: true });
        console.log('✅ authStore hydration complete');
      },
    }),
    {
      name: "auth-storage", // localStorage key
      // 在恢复状态后自动初始化（验证 token）
      onRehydrateStorage: () => {
        console.log('💾 authStore rehydrating from localStorage...');
        return (state) => {
          if (state) {
            console.log('💾 authStore rehydrated, calling initialize()');
            state.initialize();
          } else {
            console.log('⚠️ authStore rehydration failed - no state');
          }
        };
      },
    }
  )
);
