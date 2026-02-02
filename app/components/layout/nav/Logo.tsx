"use client";

import { Box } from "@mui/material";
import { useRouter } from "next/navigation";

export const Logo = () => {
  const router = useRouter();

  return (
    <Box
      component="img"
      src="/images/logo/logo3.png"
      alt="logo"
      width={150}
      onClick={() => router.push("/")}
      sx={{ cursor: "pointer" }}
      data-testid="logo"
    />
  );
};
