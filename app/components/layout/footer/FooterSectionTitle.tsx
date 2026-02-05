"use client";

import { Box, Typography } from "@mui/material";
import React from "react";

interface FooterSectionTitleProps {
  title: string;
}

export const FooterSectionTitle = ({ title }: FooterSectionTitleProps) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          fontSize: "1.125rem",
          mb: 2,
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          width: 50,
          height: 3,
          bgcolor: "primary.main",
        }}
      />
    </Box>
  );
};
