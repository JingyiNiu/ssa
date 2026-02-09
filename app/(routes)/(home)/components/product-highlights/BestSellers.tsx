"use client";

import { Box, Typography, IconButton, Card, CardContent } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Product } from "../../../../components/layout/product-list/product";
import { BestSellerCard } from "./BestSellerCard";
import { useState, useEffect } from "react";

interface BestSellersProps {
  products: Product[];
}

export const BestSellers = ({ products }: BestSellersProps) => {
  // 直接使用传入的产品（已在父组件筛选和排序）

  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  
  // 响应式每页显示数量：移动端3个，桌面6个
  // 初始值设为 6，避免 hydration 不匹配
  const [itemsPerPage, setItemsPerPage] = useState(6);
  
  useEffect(() => {
    // 设置初始的每页显示数量
    const updateItemsPerPage = () => {
      const newItemsPerPage = window.innerWidth < 600 ? 3 : 6;
      setItemsPerPage(newItemsPerPage);
    };
    
    updateItemsPerPage();
    
    const handleResize = () => {
      updateItemsPerPage();
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
            <ChevronLeftIcon fontSize="small" sx={{ color: "primary.main" }} />
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
            <ChevronRightIcon fontSize="small" sx={{ color: "primary.main" }} />
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
              bgcolor: currentPage === index ? "primary.main" : "grey.300",
              cursor: "pointer",
              transition: "all 0.3s",
              "&:hover": {
                bgcolor: currentPage === index ? "primary.main" : "grey.400",
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
};
