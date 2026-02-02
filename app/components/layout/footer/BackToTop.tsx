"use client";

import { Box, IconButton, Fade } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import React, { useState, useEffect } from "react";

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Fade in={isVisible}>
      <Box
        sx={{
          position: "fixed",
          bottom: 30,
          right: 30,
          zIndex: 1000,
        }}
      >
        <IconButton
          onClick={scrollToTop}
          sx={{
            width: 48,
            height: 48,
            bgcolor: "transparent",
            border: "2px dashed",
            borderColor: "secondary.accent",
            borderRadius: 0,
            color: "secondary.accent",
            transition: "all 0.3s ease",
            "&:hover": {
              bgcolor: "secondary.accent",
              color: "white",
              borderStyle: "solid",
            },
          }}
        >
          <KeyboardArrowUpIcon sx={{ fontSize: 28 }} />
        </IconButton>
      </Box>
    </Fade>
  );
};
