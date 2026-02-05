"use client";

import { Box, Typography, IconButton, useMediaQuery, useTheme } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Product } from "./product";
import { PopularProductCard } from "./PopularProductCard";
import SectionTitle from "@/app/components/ui/SectionTitle";
import { useState } from "react";

export const PopularCategories = () => {
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down("lg"));
  
  const products: Product[] = [
    {
      id: 1,
      name: "Product 1",
      price: 45.0,
      image: "/images/pics/product-1.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      price: 50.0,
      image: "/images/pics/product-2.jpg",
    },
    {
      id: 3,
      name: "Product 3",
      price: 50.0,
      originalPrice: 55.0,
      image: "/images/pics/product-3.jpg",
    },
    {
      id: 4,
      name: "Product 4",
      price: 60.0,
      image: "/images/pics/product-1.jpg",
    },
    {
      id: 5,
      name: "Product 5",
      price: 70.0,
      originalPrice: 75.0,
      image: "/images/pics/product-2.jpg",
    },
    {
      id: 6,
      name: "Product 6",
      price: 80.0,
      image: "/images/pics/product-3.jpg",
    },
    {
      id: 7,
      name: "Product 7",
      price: 90.0,
      image: "/images/pics/product-1.jpg",
    },
    {
      id: 8,
      name: "Product 8",
      price: 100.0,
      image: "/images/pics/product-2.jpg",
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  
  // 根据屏幕尺寸设置每页显示数量
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));
  const itemsPerPage = isSmDown && isMdDown ? 2 : 4; // sm: 2个，xs: 4个（单列2行）
  
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePrevious = () => {
    setDirection("left");
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setDirection("right");
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const displayedProducts = isMdDown
    ? products.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
    : products;

  return (
    <Box sx={{ mb: 4 }} data-testid="popular-categories-section">
      <Box className="container mx-auto">
        <SectionTitle title="Popular Categories" />

        <Box sx={{ position: "relative" }}>
          {/* 左箭头按钮 - 仅 md 以下显示 */}
          {isMdDown && (
            <IconButton
              onClick={handlePrevious}
              sx={{
                position: "absolute",
                left: -10,
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
          )}

          {/* 产品网格 */}
          {isMdDown ? (
            // md 以下：翻页模式
            <Box sx={{ position: "relative", overflow: "hidden" }}>
              <Box
                key={currentPage}
                sx={{
                  animation: `${direction === "right" ? "slideInRight" : "slideInLeft"} 0.5s ease-out`,
                  "@keyframes slideInRight": {
                    "0%": {
                      transform: "translateX(100%)",
                      opacity: 0,
                    },
                    "100%": {
                      transform: "translateX(0)",
                      opacity: 1,
                    },
                  },
                  "@keyframes slideInLeft": {
                    "0%": {
                      transform: "translateX(-100%)",
                      opacity: 0,
                    },
                    "100%": {
                      transform: "translateX(0)",
                      opacity: 1,
                    },
                  },
                }}
              >
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: {
                      xs: "1fr",
                      sm: "repeat(2, 1fr)",
                    },
                    gap: 2,
                  }}
                >
                  {displayedProducts.map((product) => (
                    <PopularProductCard key={product.id} product={product} />
                  ))}
                </Box>
              </Box>
            </Box>
          ) : (
            // md 及以上：显示全部
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
              {displayedProducts.map((product) => (
                <PopularProductCard key={product.id} product={product} />
              ))}
            </Box>
          )}

          {/* 右箭头按钮 - 仅 md 以下显示 */}
          {isMdDown && (
            <IconButton
              onClick={handleNext}
              sx={{
                position: "absolute",
                right: -10,
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
          )}
        </Box>

        {/* 页面指示器 - 仅 md 以下显示 */}
        {isMdDown && (
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
                onClick={() => {
                  setDirection(index > currentPage ? "right" : "left");
                  setCurrentPage(index);
                }}
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
        )}
      </Box>
    </Box>
  );
};
