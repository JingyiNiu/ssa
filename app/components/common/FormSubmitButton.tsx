"use client";

import { Button } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";

interface FormSubmitButtonProps {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
  size?: "small" | "medium" | "large";
  variant?: "contained" | "outlined" | "text";
}

export function FormSubmitButton({
  children,
  sx,
  size = "medium",
  variant = "contained",
}: FormSubmitButtonProps) {
  return (
    <Button
      type="submit"
      variant={variant}
      size={size}
      sx={{
        alignSelf: "flex-start",
        boxShadow: "none",
        fontSize: "0.875rem",
        ...sx,
      }}
    >
      {children}
    </Button>
  );
}
