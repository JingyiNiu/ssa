"use client";

import { Box, Tooltip } from "@mui/material";
import { useRouter } from "next/navigation";

export const Logo = () => {
  const router = useRouter();

  return (
    <Box
      onClick={() => router.push("/")}
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 150,
        height: 60,
        cursor: "pointer",
        transition: "all 0.3s ease",
        "&:hover": {
          opacity: 1,
        },
        "&:hover::before": {
          content: '""',
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "100%",
          height: "100%",
          backgroundImage: "url(/images/logo/logo3.png)",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          transform: "translate(-50%, -50%)",
          animation: "ripple 1s ease-out",
          pointerEvents: "none",
        },
        "@keyframes ripple": {
          "0%": {
            transform: "translate(-50%, -50%) scale(1)",
            opacity: 0.4,
          },
          "100%": {
            transform: "translate(-50%, -50%) scale(1.5)",
            opacity: 0,
          },
        },
      }}
    >
      <Box
        component="img"
        src="/images/logo/logo3.png"
        alt="logo"
        sx={{
          maxWidth: "100%",
          maxHeight: "100%",
          objectFit: "contain",
          zIndex: 1,
          position: "relative",
        }}
        data-testid="logo"
      />
    </Box>
  );
};
