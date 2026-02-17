import { create } from "zustand";
import type { User } from "@/app/lib/api/services/users";
import { setTokenCookie, removeTokenCookie, getTokenFromCookie } from "@/app/lib/cookies";
import { getCurrentUser } from "@/app/lib/api";

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
  initialize: () => Promise<void>;
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

  // === 初始化（从 cookie 读取 token，有 token 时拉取用户信息） ===
  initialize: async () => {
    console.log('🔄 authStore.initialize() - reading from cookie');

    const token = getTokenFromCookie();

    if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        const isExpired = payload.exp && payload.exp * 1000 < Date.now();

        if (isExpired) {
          console.log('❌ Token expired, clearing auth');
          get().clearAuth();
        } else {
          set({ token, isAuthenticated: true, user: null });
          try {
            const user = await getCurrentUser(token);
            set({ user });
          } catch (err) {
            console.error('❌ Failed to fetch user on init:', err);
            get().clearAuth();
          }
        }
      } catch (error) {
        console.error('❌ Failed to parse token:', error);
        get().clearAuth();
      }
    }

    set({ isHydrated: true });
  },
}));
