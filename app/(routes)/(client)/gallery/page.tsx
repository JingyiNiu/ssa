"use client";

import { Box } from "@mui/material";
import React, { useState } from "react";
import { GalleryHero } from "./GalleryHero";
import { GalleryFilter } from "./GalleryFilter";
import { allProducts } from "@/app/components/layout/product-list/product";
import { GalleryList } from "./GalleryList";
import FindADealer from "@/app/components/layout/find-a-dealer/FindADealer";

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // 根据选择的类别筛选产品
  const filteredProducts =
    selectedCategory === "all"
      ? allProducts
      : allProducts.filter(
          (product) =>
            product.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <Box data-testid="gallery-page">
      <GalleryHero />
      <Box className="container mx-auto" sx={{ py: 4 }}>
        <Box
          sx={{
            display: "flex",
            gap: 4,
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          {/* 左侧过滤器 */}
          <Box sx={{ flexShrink: 0 }}>
            <GalleryFilter onFilterChange={setSelectedCategory} />
          </Box>

          {/* 右侧图片网格 */}
          <GalleryList images={filteredProducts} />
        </Box>
      </Box>
      <FindADealer />
    </Box>
  );
};

export default GalleryPage;
