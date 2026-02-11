"use client";

import { Box } from "@mui/material";
import { ProductCard } from "@/app/components/layout/product-list/ProductCard";
import { WCProduct } from "@/app/components/layout/product-list/wc-product";
import { PublicProduct } from "@/app/components/layout/product-list/public-product";

interface ProductGridProps {
  products: (WCProduct | PublicProduct)[];
}

export const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        },
        gap: 2,
        mb: 4,
      }}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Box>
  );
};
