"use client";

import { Box } from "@mui/material";
import { ProductCard } from "./ProductCard";
import { useProducts } from "@/app/(routes)/(home)/components/ProductsProvider";

export const ProductList = () => {
  const { products } = useProducts();

  return (
    <Box
      className="container mx-auto"
      data-testid="product-list"
      sx={{ mb: 4 }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          },
          gap: 4,
        }}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Box>
    </Box>
  );
};
