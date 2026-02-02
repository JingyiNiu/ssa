"use client";

import {
  Box,
  Typography,
  Button,
  IconButton,
  Card,
  CardContent,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React, { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export const ProductHighlightsSection = () => {
  return (
    <Box sx={{ mb: 10 }} data-testid="product-highlights-section">
      <Box className="container mx-auto">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "300px 1fr" },
            gap: 4,
          }}
        >
          <DealOfTheDay />
          <BestSellers />
        </Box>
      </Box>
    </Box>
  );
};

const DealOfTheDay = () => {
  const deals: Product[] = [
    {
      id: 1,
      name: "Macheta Motor",
      price: 45.0,
      image: "/images/pics/image-placeholder.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : deals.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < deals.length - 1 ? prev + 1 : 0));
  };

  const currentDeal = deals[currentIndex];

  return (
    <Box
      sx={{
        border: "2px solid",
        borderColor: "secondary.accent",
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
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src =
              "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2UwZTBlMCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZTwvdGV4dD48L3N2Zz4=";
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

      <Button
        variant="contained"
        endIcon={<ArrowForwardIcon />}
        fullWidth
        sx={{
          bgcolor: "#e05440",
          color: "white",
          py: 1.2,
          fontWeight: 600,
          fontSize: "0.875rem",
          textTransform: "none",
          "&:hover": {
            bgcolor: "#c73f2d",
          },
        }}
      >
        Add To Cart
      </Button>
    </Box>
  );
};

const BestSellers = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Motorcycle Helmets",
      price: 26.0,
      image: "/images/pics/image-placeholder.png",
    },
    {
      id: 2,
      name: "AZA 506 Wheel",
      price: 20.0,
      image: "/images/pics/image-placeholder.png",
    },
    {
      id: 3,
      name: "Brake Caliper",
      price: 30.0,
      image: "/images/pics/image-placeholder.png",
    },
    {
      id: 4,
      name: "Delinte Tires",
      price: 15.0,
      image: "/images/pics/image-placeholder.png",
    },
    {
      id: 5,
      name: "Engine Oil",
      price: 25.0,
      image: "/images/pics/image-placeholder.png",
    },
    {
      id: 6,
      name: "Car Tyre",
      price: 35.0,
      image: "/images/pics/image-placeholder.png",
    },
  ];

  return (
    <Box data-testid="best-sellers">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            fontSize: "1.25rem",
            color: "#333",
          }}
        >
          Best sellers
        </Typography>
        <Box sx={{ display: "flex", gap: 0.5 }}>
          <IconButton
            size="small"
            sx={{
              bgcolor: "white",
              border: "1px solid #e0e0e0",
              "&:hover": { bgcolor: "#f5f5f5" },
            }}
          >
            <ChevronLeftIcon fontSize="small" sx={{ color: "#e05440" }} />
          </IconButton>
          <IconButton
            size="small"
            sx={{
              bgcolor: "white",
              border: "1px solid #e0e0e0",
              "&:hover": { bgcolor: "#f5f5f5" },
            }}
          >
            <ChevronRightIcon fontSize="small" sx={{ color: "#e05440" }} />
          </IconButton>
        </Box>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 2,
        }}
      >
        {products.map((product) => (
          <BestSellerCard key={product.id} product={product} />
        ))}
      </Box>
    </Box>
  );
};

interface BestSellerCardProps {
  product: Product;
}

const BestSellerCard = ({ product }: BestSellerCardProps) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 2,
        p: 2,
        cursor: "pointer",
        borderRadius: 0,
        bgcolor: "secondary.light",
        boxShadow: "none",
        transition: "all 0.3s ease",
        "&:hover": {
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          borderColor: "#d0d0d0",
        },
      }}
      data-testid="best-seller-card"
    >
      <Box
        sx={{
          width: 80,
          height: 80,
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "white",
        }}
      >
        <Box
          component="img"
          src={product.image}
          alt={product.name}
          sx={{
            maxWidth: "90%",
            maxHeight: "90%",
            objectFit: "contain",
          }}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src =
              "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjZTBlMGUwIi8+PC9zdmc+";
          }}
        />
      </Box>

      <CardContent sx={{ p: 0, flex: 1, "&:last-child": { pb: 0 } }}>
        <Typography
          variant="body2"
          sx={{
            fontWeight: 500,
            color: "#333",
            mb: 0.5,
            fontSize: "0.875rem",
          }}
        >
          {product.name}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontWeight: 600,
            color: "#e05440",
            fontSize: "0.875rem",
          }}
        >
          ${product.price.toFixed(2)}
        </Typography>
      </CardContent>
    </Card>
  );
};
