'use client';

import { Box } from "@mui/material";
import { ReactNode, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuthStore } from "@/app/lib/auth";

type ClientLayoutProps = {
  children: ReactNode;
};

export default function AuthLayout({ children }: ClientLayoutProps) {
  const router = useRouter();
  const pathname = usePathname();
  const isLoggedIn = useAuthStore((state) => state.isAuthenticated);

  useEffect(() => {
    const isLoginOrRegisterPage = pathname === '/login' || pathname === '/register';
    
    console.log('🔐 AuthLayout check:', {
      pathname,
      isLoginOrRegisterPage,
      isLoggedIn,
      willRedirect: isLoginOrRegisterPage && isLoggedIn
    });
    
    // 如果是登录/注册页面，且用户已登录，则重定向到首页（反向保护）
    if (isLoginOrRegisterPage && isLoggedIn) {
      const redirectPath = sessionStorage.getItem('redirectAfterLogin') || '/';
      sessionStorage.removeItem('redirectAfterLogin');
      console.log('➡️ AuthLayout redirecting to:', redirectPath);
      router.replace(redirectPath);
    }
  }, [router, pathname, isLoggedIn]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        py: { xs: 1, md: 10 },
      }}
      data-testid="auth-layout"
    >
      <Box
        component="main"
        sx={{
          flex: 1,
          width: "100%",
        }}
        data-testid="auth-layout-main"
      >
        {children}
      </Box>
    </Box>
  );
}
