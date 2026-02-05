import { Box, Typography, Card } from "@mui/material";
import React from "react";
import { Brand } from "./brand";
import { BrandCard } from "./BrandCard";
import SectionTitle from "@/app/components/ui/SectionTitle";

export const ShopByBrandsSection = () => {
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
        <SectionTitle title="Shop by Brands" />

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            },
            gap: { xs: 2, md: 3 },
          }}
        >
          {brands.map((brand) => (
            <BrandCard key={brand.id} brand={brand} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
