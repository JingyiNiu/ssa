import { Box, Typography } from "@mui/material";
import { Product } from "./product";
import { PopularProductCard } from "./PopularProductCard";

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
        <Typography
          variant="h4"
          sx={{
            mb: 4,
            fontWeight: 600,
            color: "#333",
          }}
        >
          Popular Categories
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
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
