"use client";

import { ProtectedRoute } from "@/app/lib/auth";
import { Box } from "@mui/material";
import UserInfo from "./UserInfo";
import SidebarTabs from "./SidebarTabs";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
            <SidebarTabs />
          </Box>
          <Box
            sx={{
              flex: 1,
              bgcolor: "white",
              border: "1px solid #e0e0e0",
              borderRadius: 1,
              p: 4,
            }}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </ProtectedRoute>
  );
}
