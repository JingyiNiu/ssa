import { Box } from "@mui/material";
import React from "react";
import { ImageCard } from "./ImageCard";
import { WCProduct } from "@/app/components/layout/product-list/wc-product";
import { PublicProduct } from "@/app/components/layout/product-list/public-product";

export const GalleryList = ({ images }: { images: (WCProduct | PublicProduct)[] }) => {
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
