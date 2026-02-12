"use client";

import { useEffect } from "react";
import { useAuthStore } from "@/app/store/authStore";

/**
 * 客户端组件：在应用启动时初始化认证状态
 * 从 cookie 读取 token 并恢复到 store
 */
export function AuthInitializer() {
  const initialize = useAuthStore((state) => state.initialize);

  useEffect(() => {
    // 初始化认证状态（从 cookie 读取）
    initialize();
  }, [initialize]);

  return null; // 不渲染任何内容
}
