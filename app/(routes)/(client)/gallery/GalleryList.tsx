import { Product } from "@/app/components/layout/product-list/product";
import { Box } from "@mui/material";
import React from "react";
import { ImageCard } from "./ImageCard";

export const GalleryList = ({ images }: { images: Product[] }) => {
  return (
    <Box sx={{ flexGrow: 1 }} data-testid="gallery-list">
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
        }}
      >
        {images.map((product) => (
          <Box sx={{ width: "100%" }} key={product.id}>
            <ImageCard product={product} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};
