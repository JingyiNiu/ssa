"use client";

import React from "react";
import { Box, Avatar, Typography, Button } from "@mui/material";
import { useAuthStore } from "@/app/store/authStore";
import { useRouter } from "next/navigation";

const UserInfo = () => {
  const { user, clearAuth } = useAuthStore();
  const router = useRouter();
  console.log(user);

  // 获取显示名称
  const displayName = user?.name || user?.username || "Guest";

  // 获取头像URL（如果有）
  const avatarUrl = user?.avatar_urls?.["96"] || user?.avatar_urls?.["48"];

  return (
    <Box
      sx={{
        p: 3,
        borderBottom: "1px solid #e0e0e0",
        display: "flex",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Avatar
        src={avatarUrl}
        sx={{
          width: 60,
          height: 60,
          bgcolor: "#d0d0d0",
        }}
      >
        {!avatarUrl && (
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
              fill="#999"
            />
          </svg>
        )}
      </Avatar>
      <Box sx={{ flex: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: 600, color: "#333" }}>
          {displayName}
        </Typography>
        <Typography variant="body2" sx={{ color: "#666" }}>
          {user?.email}
        </Typography>
      </Box>
    </Box>
  );
};

export default UserInfo;
