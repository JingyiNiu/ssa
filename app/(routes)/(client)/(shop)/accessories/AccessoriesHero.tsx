"use client";

import { Box } from "@mui/material";
import React from "react";

export const AccessoriesHero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        height: 300,
      }}
      data-testid="hero-section"
    >
      {/* Slides Container */}
      <Box
        sx={{
          display: "flex",
          height: "100%",
          backgroundImage: "url(/images/pics/wheels7.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        data-testid="hero-slides-container"
      ></Box>
    </Box>
  );
};
