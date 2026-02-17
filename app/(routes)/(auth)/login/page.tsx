"use client";

import { Box } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/navigation";
import LoginForm from "./LoginForm";
import { login } from "@/app/lib/auth";
import { handleAPIError } from "@/app/lib/api";
import { LoadingOverlay } from "@/app/components/layout/placeholder/Loading";

const LoginPage = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // 使用 login 函数，自动处理：
      // 1. 调用 loginUser 获取 token
      // 2. 调用 getCurrentUser 获取用户信息（含 price_level）
      // 3. 保存 token 和用户信息到 localStorage
      const { token, user } = await login({ username, password });

      console.log("Login successful!", { user, token });

      // 跳转到之前的页面或首页
      const redirectPath = sessionStorage.getItem("redirectAfterLogin") || "/";
      sessionStorage.removeItem("redirectAfterLogin");
      router.push(redirectPath);
    } catch (err) {
      setError(handleAPIError(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
      }}
      data-testid="login-page"
    >
      <LoadingOverlay open={loading} />
      <LoginForm
        handleSubmit={handleSubmit}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
        loading={loading}
        error={error}
      />
    </Box>
  );
};

export default LoginPage;
