import { Box } from "@mui/material";
import React from "react";

const ProductHero = () => {
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
          backgroundImage: "url(/images/pics/tyres.png)",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
        data-testid="hero-slides-container"
      ></Box>
    </Box>
  );
};

export default ProductHero;
