import { Box, Typography } from "@mui/material";
import { Product } from "./product";
import { PopularProductCard } from "./PopularProductCard";
import SectionTitle from "@/app/components/ui/SectionTitle";

export const PopularCategories = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Macheta Motor",
      price: 45.0,
      image: "/images/pics/image-placeholder.png",
    },
    {
      id: 2,
      name: "Scientific Tango",
      price: 50.0,
      image: "/images/pics/image-placeholder.png",
    },
    {
      id: 3,
      name: "Delinte Tires",
      price: 50.0,
      originalPrice: 55.0,
      image: "/images/pics/image-placeholder.png",
    },
    {
      id: 4,
      name: "Stem Gatling",
      price: 60.0,
      image: "/images/pics/image-placeholder.png",
    },
  ];

  return (
    <Box sx={{ mb: 4 }} data-testid="popular-categories-section">
      <Box className="container mx-auto">
        <SectionTitle title="Popular Categories" />

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)",lg: "repeat(4, 1fr)" },
            gap: 2,
          }}
        >
          {products.map((product) => (
            <PopularProductCard key={product.id} product={product} />
          ))}
          {products.map((product) => (
            <PopularProductCard key={product.id} product={product} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
