"use client";

import { Box } from "@mui/material";
import React from "react";

type WheelTab = {
  value: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
};

export const TyresHero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        height: 400,
      }}
      data-testid="hero-section"
    >
      {/* Slides Container */}
      <Box
        sx={{
          display: "flex",
          height: "100%",
          backgroundImage: "url(/images/pics/tyres.png)",
          backgroundSize: "cover",
          backgroundPosition: "left",
          backgroundRepeat: "no-repeat",
        }}
        data-testid="hero-slides-container"
      ></Box>
    </Box>
  );
};
