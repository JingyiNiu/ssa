"use client";

import { Box, Typography, Card, IconButton } from "@mui/material";
import React, { useState } from "react";
import { Brand } from "./brand";
import { BrandCard } from "./BrandCard";
import SectionTitle from "@/app/components/ui/SectionTitle";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

export const ShopByBrandsSection = () => {
  const brands: Brand[] = [
    {
      id: 1,
      name: "Brand 1",
      logo: "/images/logo/logo2.png",
    },
    {
      id: 2,
      name: "Brand 2",
      logo: "/images/logo/logo3.png",
    },
    {
      id: 3,
      name: "Brand 3",
      logo: "/images/logo/logo2.png",
    },
    {
      id: 4,
      name: "Brand 4",
      logo: "/images/logo/logo3.png",
    },
    {
      id: 5,
      name: "Brand 5",
      logo: "/images/logo/logo2.png",
    },
    {
      id: 6,
      name: "Brand 6",
      logo: "/images/logo/logo3.png",
    },
    {
      id: 7,
      name: "Brand 7",
      logo: "/images/logo/logo2.png",
    },
    {
      id: 8,
      name: "Brand 8",
      logo: "/images/logo/logo3.png",
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  
  const getItemsPerPage = () => {
    if (typeof window !== "undefined") {
      // if (window.innerWidth < 600) return 1; 
      if (window.innerWidth < 900) return 2;
      return 4; // md+
    }
    return 4;
  };

  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());
  
  React.useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(getItemsPerPage());
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
              display: "flex",
              gap: { xs: 2, md: 3 },
              justifyContent: "center",
              alignItems: "stretch",
              "& > *": {
                flex: 1,
                minWidth: 0,
              },
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
