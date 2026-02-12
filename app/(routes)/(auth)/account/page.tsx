"use client";

import { ProtectedRoute } from "@/app/lib/auth";
import { Box, Container } from "@mui/material";
import UserInfo from "./UserInfo";
import DashboardTabs from "./DashboardTabs";

const AccountPage = () => {
  return (
    <ProtectedRoute
      fallback={<Box sx={{ textAlign: "center", py: 4 }}>Loading...</Box>}
    >
      <Box className="container mx-auto" sx={{ py: 4 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            minHeight: "70vh",
          }}
        >
          {/* 左侧边栏 */}
          <Box
            sx={{
              width: { xs: "100%", md: 280 },
              flexShrink: 0,
              bgcolor: "white",
              border: "1px solid #e0e0e0",
              borderRadius: 1,
              overflow: "hidden",
              height: "fit-content",
            }}
          >
            <UserInfo />
            <DashboardTabs />
          </Box>

          {/* 右侧内容区域 */}
          <Box
            sx={{
              flex: 1,
              bgcolor: "white",
              border: "1px solid #e0e0e0",
              borderRadius: 1,
              p: 4,
            }}
          >
            {/* 右侧内容区域留空，后续根据选中的tab显示不同内容 */}
          </Box>
        </Box>
      </Box>
    </ProtectedRoute>
  );
};

export default AccountPage;
