"use client";

import { Box, Typography, Button, IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState } from "react";
import { allProducts, Product } from "../../../../components/layout/product-list/product";
import { ActionButton } from "@/app/components/ui/ActionButton";

export const DealOfTheDay = () => {
  const deals: Product[] = allProducts.slice(0, 3);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const handlePrev = () => {
    setDirection("left");
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : deals.length - 1));
  };

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prev) => (prev < deals.length - 1 ? prev + 1 : 0));
  };

  const currentDeal = deals[currentIndex];

  return (
    <Box
      sx={{
        border: "2px solid",
        borderColor: "primary.main",
        p: 3,
        bgcolor: "white",
      }}
      data-testid="deal-of-the-day"
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            fontSize: "1rem",
            color: "#333",
          }}
        >
          Deal of the day
        </Typography>
        <Box sx={{ display: "flex", gap: 0.5 }}>
          <IconButton
            size="small"
            onClick={handlePrev}
            sx={{
              bgcolor: "white",
              border: "1px solid #e0e0e0",
              "&:hover": { bgcolor: "#f5f5f5" },
            }}
          >
            <ChevronLeftIcon fontSize="small" />
          </IconButton>
          <IconButton
            size="small"
            onClick={handleNext}
            sx={{
              bgcolor: "white",
              border: "1px solid #e0e0e0",
              "&:hover": { bgcolor: "#f5f5f5" },
            }}
          >
            <ChevronRightIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>
      <Box sx={{ position: "relative", overflow: "hidden" }}>
        <Box
          key={currentIndex}
          sx={{
            animation: `${direction === "right" ? "slideInRight" : "slideInLeft"} 0.5s ease-out`,
            "@keyframes slideInRight": {
              "0%": {
                transform: "translateX(100%)",
                opacity: 0,
              },
              "100%": {
                transform: "translateX(0)",
                opacity: 1,
              },
            },
            "@keyframes slideInLeft": {
              "0%": {
                transform: "translateX(-100%)",
                opacity: 0,
              },
              "100%": {
                transform: "translateX(0)",
                opacity: 1,
              },
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 180,
              mb: 2,
              borderRadius: 1,
            }}
          >
            <Box
              component="img"
              src={currentDeal.image}
              alt={currentDeal.name}
              sx={{
                maxWidth: "80%",
                maxHeight: "80%",
                objectFit: "contain",
              }}
            />
          </Box>

          <Typography
            variant="body1"
            sx={{
              fontWeight: 500,
              textAlign: "center",
              mb: 1,
              color: "#333",
            }}
          >
            {currentDeal.name}
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              textAlign: "center",
              color: "#e05440",
              mb: 2,
            }}
          >
            ${currentDeal.price.toFixed(2)}
          </Typography>
        </Box>
      </Box>

      <ActionButton endIcon={<ArrowForwardIcon />} fullWidth>
        Add To Cart
      </ActionButton>
    </Box>
  );
};
