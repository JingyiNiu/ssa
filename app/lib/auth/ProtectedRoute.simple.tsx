/**
 * 简单的受保护路由组件
 * 使用 authStore 进行状态管理
 */

'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/app/store/authStore';

interface ProtectedRouteProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export function ProtectedRoute({ children, fallback }: ProtectedRouteProps) {
  const [isChecking, setIsChecking] = useState(true);
  const router = useRouter();
  const isAuth = useAuthStore((state) => state.isAuthenticated);

  useEffect(() => {
    // authStore 会自动初始化，稍作延迟等待 rehydrate 完成
    const timer = setTimeout(() => {
      setIsChecking(false);
      
      if (!isAuth) {
        // 保存当前路径，登录后返回
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('redirectAfterLogin', window.location.pathname);
        }
        router.push('/login');
      }
    }, 100); // 100ms 延迟等待 store rehydrate

    return () => clearTimeout(timer);
  }, [router, isAuth]);

  if (isChecking) {
    return fallback || <div>Loading...</div>;
  }

  if (!isAuth) {
    return null;
  }

  return <>{children}</>;
}
