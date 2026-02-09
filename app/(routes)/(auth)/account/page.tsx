"use client";

import { Placeholder } from "@/app/components/layout/placeholder/Placeholder";
import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const AccountPage = () => {
  const router = useRouter();

  useEffect(() => {
    // 检查登录状态（这里使用 localStorage 作为示例）
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    
    if (!isLoggedIn || isLoggedIn !== "true") {
      // 未登录，重定向到登录页
      router.push("/login");
    }
  }, [router]);

  return (
    <Box>
      <Placeholder title="Account" />
    </Box>
  );
};

export default AccountPage;
