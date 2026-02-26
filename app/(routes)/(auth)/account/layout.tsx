"use client";

import { ProtectedRoute } from "@/app/lib/auth";
import { Box } from "@mui/material";
import UserInfo from "./UserInfo";
import AccountNav from "./AccountNav";
import AccountBreadcrumb from "./AccountBreadcrumb";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute
      fallback={<Box sx={{ textAlign: "center", py: 4 }}>Loading...</Box>}
    >
      <Box className="container mx-auto" data-testid="account-layout">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            minHeight: "70vh",
          }}
          data-testid="account-layout-content"
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
            data-testid="account-nav-wrapper"
          >
            <UserInfo />
            <AccountNav />
          </Box>
          <Box
            sx={{
              flex: 1,
              bgcolor: "grey.50",
              borderRadius: 1,
              p: 4,
            }}
            data-testid="account-content-wrapper"
          >
            <AccountBreadcrumb />
            {children}
          </Box>
        </Box>
      </Box>
    </ProtectedRoute>
  );
}
