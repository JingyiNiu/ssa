import { SlideOverlay } from "@/app/components/ui/SlideOverlay";
import { Box } from "@mui/material";
import React from "react";

export const HeroSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        height: { xs: 500, md: 500 },
      }}
      data-testid="hero-section"
    >
      {/* Slides Container */}
      <Box
        sx={{
          display: "flex",
          height: "100%",
          backgroundImage: "url(/images/pics/hero-slide.png)",
          backgroundSize: "contain",
          backgroundPosition: "left",
          backgroundRepeat: "no-repeat",
        }}
        data-testid="hero-slides-container"
      >
        <SlideOverlay />
      </Box>
    </Box>
  );
};
