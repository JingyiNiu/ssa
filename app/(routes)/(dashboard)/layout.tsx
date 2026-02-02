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
        py: 6,
      }}
      data-testid="client-layout"
    >
      <Box
        component="main"
        sx={{
          flex: 1,
          width: "100%",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
