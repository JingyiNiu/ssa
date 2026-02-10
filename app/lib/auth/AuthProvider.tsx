/**
 * 认证上下文 Provider
 * 提供全局的认证状态管理
 */

'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import type { User } from '../api/services/users';
import * as auth from './index';

interface AuthContextType {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  // 初始化：验证现有 token
  useEffect(() => {
    const initAuth = async () => {
      setIsLoading(true);
      
      const savedToken = auth.getToken();
      if (!savedToken) {
        setIsLoading(false);
        return;
      }
      
      // 验证 token 并刷新用户信息
      const userData = await auth.validateAndRefreshUser();
      
      if (userData) {
        setUser(userData);
        setToken(savedToken);
      } else {
        // Token 无效，清除状态
        setUser(null);
        setToken(null);
      }
      
      setIsLoading(false);
    };
    
    initAuth();
  }, []);

  // Token 过期监控
  useEffect(() => {
    if (!token) return;
    
    // 每分钟检查一次 token 是否过期
    const interval = setInterval(() => {
      if (auth.isTokenExpired(token)) {
        console.warn('Token expired, logging out...');
        handleLogout();
      } else if (auth.isTokenExpiringSoon()) {
        console.warn('Token expiring soon. Consider refreshing.');
        // 可以在这里触发 token 刷新（如果后端支持）
      }
    }, 60 * 1000); // 每分钟检查一次
    
    return () => clearInterval(interval);
  }, [token]);

  const handleLogin = async (username: string, password: string) => {
    const { token: newToken, user: newUser } = await auth.login({ 
      username, 
      password 
    });
    
    setToken(newToken);
    setUser(newUser);
    
    // 登录后跳转
    const redirectPath = sessionStorage.getItem('redirectAfterLogin') || '/';
    sessionStorage.removeItem('redirectAfterLogin');
    router.push(redirectPath);
  };

  const handleLogout = () => {
    auth.clearAuth();
    setToken(null);
    setUser(null);
    router.push('/login');
  };

  const handleRefreshUser = async () => {
    if (!token) return;
    
    try {
      const userData = await auth.validateAndRefreshUser();
      if (userData) {
        setUser(userData);
      } else {
        handleLogout();
      }
    } catch (error) {
      console.error('Failed to refresh user:', error);
      handleLogout();
    }
  };

  const value: AuthContextType = {
    user,
    token,
    isLoading,
    isAuthenticated: !!user && !!token && !auth.isTokenExpired(token),
    login: handleLogin,
    logout: handleLogout,
    refreshUser: handleRefreshUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

/**
 * 使用认证上下文的 Hook
 */
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
