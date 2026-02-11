"use client";

import { Box } from "@mui/material";
import { ProductCard } from "./ProductCard";
import { useState } from "react";
import { WCProduct } from "./wc-product";
import { PublicProduct } from "./public-product";

export const ProductList = ({ products }: { products: (WCProduct | PublicProduct)[] }) => {
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
            lg: "repeat(4, 1fr)",
          },
          gap: 2,
        }}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Box>
    </Box>
  );
};
