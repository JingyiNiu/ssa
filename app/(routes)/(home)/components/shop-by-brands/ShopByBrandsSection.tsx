"use client";

import { Box, IconButton } from "@mui/material";
import React, { useState } from "react";
import { Brand } from "./brand";
import { BrandCard } from "./BrandCard";
import SectionTitle from "@/app/components/ui/SectionTitle";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { brandItems } from "@/app/(routes)/(client)/(shop)/brands/brand";

export const ShopByBrandsSection = () => {
  const brands: Brand[] = brandItems.map((item, index) => ({
    id: index + 1,
    name: item.label,
    logo: item.logo ?? "",
  }));

  const [currentPage, setCurrentPage] = useState(0);

  // 初始值设为 4，避免 hydration 不匹配
  const [itemsPerPage, setItemsPerPage] = useState(4);

  React.useEffect(() => {
    // 设置初始的每页显示数量
    const updateItemsPerPage = () => {
      if (window.innerWidth < 900) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(4);
      }
    };

    updateItemsPerPage();

    const handleResize = () => {
      updateItemsPerPage();
      setCurrentPage(0); // 重置到第一页
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(brands.length / itemsPerPage);

  const handlePrevious = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const displayedBrands = brands.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <Box
      sx={{ mb: 4, py: 4, bgcolor: "secondary.light" }}
      data-testid="shop-by-brands-section"
    >
      <Box className="container mx-auto">
        <SectionTitle title="Shop by Brands" />

        <Box sx={{ position: "relative", px: { xs: 5, md: 0 } }}>
          {/* 左箭头按钮 */}
          <IconButton
            onClick={handlePrevious}
            sx={{
              position: "absolute",
              left: { xs: 0, md: -20 },
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2,
              bgcolor: "white",
              boxShadow: 2,
              "&:hover": {
                bgcolor: "primary.main",
                color: "white",
              },
            }}
          >
            <ChevronLeft />
          </IconButton>

          {/* 品牌网格 */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
              gap: { xs: 2, md: 3 },
            }}
          >
            {displayedBrands.map((brand) => (
              <BrandCard key={brand.id} brand={brand} />
            ))}
          </Box>

          {/* 右箭头按钮 */}
          <IconButton
            onClick={handleNext}
            sx={{
              position: "absolute",
              right: { xs: 0, md: -20 },
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2,
              bgcolor: "white",
              boxShadow: 2,
              "&:hover": {
                bgcolor: "primary.main",
                color: "white",
              },
            }}
          >
            <ChevronRight />
          </IconButton>
        </Box>

        {/* 页面指示器 */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 1,
            mt: 3,
          }}
        >
          {Array.from({ length: totalPages }).map((_, index) => (
            <Box
              key={index}
              onClick={() => setCurrentPage(index)}
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                bgcolor: currentPage === index ? "primary.main" : "grey.300",
                cursor: "pointer",
                transition: "all 0.3s",
                "&:hover": {
                  bgcolor: currentPage === index ? "primary.dark" : "grey.400",
                },
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
