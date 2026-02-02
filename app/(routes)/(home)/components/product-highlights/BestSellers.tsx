import { Box, Typography, IconButton, Card, CardContent } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { DealOfTheDay } from "./DealOfTheDay";
import { Product } from "../popular-categories/product";
import { BestSellerCard } from "./BestSellerCard";

export const BestSellers = () => {
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
