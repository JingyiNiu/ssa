"use client";

import { Box, Typography, Link } from "@mui/material";
import NextLink from "next/link";
import type { SxProps, Theme } from "@mui/material";

interface LoginToAddToCartPromptProps {
  sx?: SxProps<Theme>;
}

/**
 * Shown when user is not logged in — prompts to log in before adding to cart.
 */
export function LoginToAddToCartPrompt({ sx }: LoginToAddToCartPromptProps) {
  return (
    <Box
      sx={{
        py: 1.5,
        px: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "grey.100",
        borderRadius: 1,
        textAlign: "center",
        gap: 1,
        ...sx,
      }}
    >
      <Link component={NextLink} href="/login" variant="body2">
        Log in
      </Link>
      <Typography variant="body2" color="text.secondary">
        to add to cart
      </Typography>
    </Box>
  );
}
