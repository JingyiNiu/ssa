import { Box, Typography, Card } from "@mui/material";
import React from "react";
import { Brand } from "./brand";
import BrandCard from "./BrandCard";

export default function ShopByBrandsSection() {
  const brands: Brand[] = [
    {
      id: 1,
      name: "Company",
      logo: "/images/pics/image-placeholder.png",
    },
    {
      id: 2,
      name: "Carservice",
      logo: "/images/pics/image-placeholder.png",
    },
    {
      id: 3,
      name: "Autodrive",
      logo: "/images/pics/image-placeholder.png",
    },
    {
      id: 4,
      name: "Lemodi MT",
      logo: "/images/pics/image-placeholder.png",
    },
  ];

  return (
    <Box
      sx={{ mb: 4, py: 4, bgcolor: "secondary.light" }}
      data-testid="shop-by-brands-section"
    >
      <Box className="container mx-auto">
        <Typography
          variant="h4"
          sx={{
            mb: 4,
            fontWeight: 600,
            color: "#333",
            fontSize: "1.5rem",
          }}
        >
          Shop by Brands
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 3,
          }}
        >
          {brands.map((brand) => (
            <BrandCard key={brand.id} brand={brand} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
