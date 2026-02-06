"use client";

import { Box, Typography, IconButton, Card, CardContent } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { DealOfTheDay } from "./DealOfTheDay";
import { Product } from "../../../../components/layout/product-list/product";
import { BestSellerCard } from "./BestSellerCard";
import { useState, useEffect } from "react";

export const BestSellers = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Product 1",
      price: 26.0,
      image: "/images/pics/product-1.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      price: 20.0,
      image: "/images/pics/product-1.jpg",
    },
    {
      id: 3,
      name: "Product 3",
      price: 30.0,
      image: "/images/pics/product-1.jpg",
    },
    {
      id: 4,
      name: "Product 4",
      price: 15.0,
      image: "/images/pics/product-1.jpg",
    },
    {
      id: 5,
      name: "Product 5",
      price: 25.0,
      image: "/images/pics/product-1.jpg",
    },
    {
      id: 6,
      name: "Product 6",
      price: 35.0,
      image: "/images/pics/product-1.jpg",
    },    {
      id: 7,
      name: "Product 7",
      price: 15.0,
      image: "/images/pics/product-1.jpg",
    },
    {
      id: 8,
      name: "Product 8",
      price: 25.0,
      image: "/images/pics/product-1.jpg",
    },
    {
      id: 9,
      name: "Product 9",
      price: 35.0,
      image: "/images/pics/product-1.jpg",
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  
  // 响应式每页显示数量：移动端3个，桌面6个
  const getItemsPerPage = () => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 600 ? 3 : 6; // xs: 3, sm+: 6
    }
    return 6;
  };

  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());
  
  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(getItemsPerPage());
      setCurrentPage(0); // 重置到第一页
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePrevious = () => {
    setDirection("left");
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setDirection("right");
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const handlePageClick = (index: number) => {
    setDirection(index > currentPage ? "right" : "left");
    setCurrentPage(index);
  };

  const displayedProducts = products.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <Box data-testid="best-sellers">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        {/* 标题 */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            fontSize: "1.25rem",
            color: "#333",
          }}
        >
          Best sellers
        </Typography>

        {/* 翻页按钮 */}
        <Box sx={{ display: "flex", gap: 0.5 }} data-testid="best-sellers-pagination">
          <IconButton
            size="small"
            onClick={handlePrevious}
            sx={{
              bgcolor: "white",
              border: "1px solid #e0e0e0",
              "&:hover": { bgcolor: "#f5f5f5" },
            }}
          >
            <ChevronLeftIcon fontSize="small" sx={{ color: "#e05440" }} />
          </IconButton>
          <IconButton
            size="small"
            onClick={handleNext}
            sx={{
              bgcolor: "white",
              border: "1px solid #e0e0e0",
              "&:hover": { bgcolor: "#f5f5f5" },
            }}
          >
            <ChevronRightIcon fontSize="small" sx={{ color: "#e05440" }} />
          </IconButton>
        </Box>
      </Box>

      {/* 商品列表 */}
      <Box sx={{ position: "relative", overflow: "hidden",minHeight: 370 }} data-testid="best-sellers-list">
        <Box
          key={currentPage}
          sx={{
            animation: `${direction === "right" ? "slideInRight" : "slideInLeft"} 0.5s ease-in-out`,
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
              gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
              gap: 2,
            }}
          >
            {displayedProducts.map((product) => (
              <BestSellerCard key={product.id} product={product} />
            ))}
          </Box>
        </Box>
      </Box>

      {/* 页面指示器 */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 1,
          mt: 3,
        }}
        data-testid="best-sellers-pagination-indicators"
      >
        {Array.from({ length: totalPages }).map((_, index) => (
          <Box
            key={index}
            onClick={() => handlePageClick(index)}
            sx={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              bgcolor: currentPage === index ? "#e05440" : "grey.300",
              cursor: "pointer",
              transition: "all 0.3s",
              "&:hover": {
                bgcolor: currentPage === index ? "#c54030" : "grey.400",
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
};
