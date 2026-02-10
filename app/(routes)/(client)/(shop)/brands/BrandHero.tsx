"use client";

import { Box, Typography, Paper } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { brandItems } from "./brand";

export const BrandHero = () => {
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
          backgroundImage: "url(/images/pics/banner.png)",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
        data-testid="hero-slides-container"
      ></Box>
    </Box>
  );
};
