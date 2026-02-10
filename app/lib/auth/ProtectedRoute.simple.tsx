/**
 * 简单的受保护路由组件
 * 不依赖 AuthProvider，直接使用 auth 函数
 */

'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { isAuthenticated } from './index';

interface ProtectedRouteProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export function ProtectedRoute({ children, fallback }: ProtectedRouteProps) {
  const [isChecking, setIsChecking] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // 检查认证状态
    const checkAuth = () => {
      const authenticated = isAuthenticated();
      setIsAuth(authenticated);
      setIsChecking(false);

      if (!authenticated) {
        // 保存当前路径，登录后返回
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('redirectAfterLogin', window.location.pathname);
        }
        router.push('/login');
      }
    };

    checkAuth();
  }, [router]);

  if (isChecking) {
    return fallback || <div>Loading...</div>;
  }

  if (!isAuth) {
    return null;
  }

  return <>{children}</>;
}
