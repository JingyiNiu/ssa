import { Box } from "@mui/material";
import { ReactNode } from "react";

type ClientLayoutProps = {
  children: ReactNode;
};

export default function ClientLayout({ children }: ClientLayoutProps) {
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
