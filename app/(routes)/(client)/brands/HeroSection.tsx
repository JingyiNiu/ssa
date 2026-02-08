"use client";

import { Box, Typography, Paper } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { brandItems } from "./brand";

export const HeroSection = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  // 默认选中第一个品牌
  const [selectedBrand, setSelectedBrand] = useState<string | null>(
    brandItems.length > 0 ? brandItems[0].value : null
  );

  // 从 URL 读取 brand 参数，或设置默认值
  useEffect(() => {
    const brand = searchParams.get("brand");
    if (brand) {
      setSelectedBrand(brand);
    } else if (brandItems.length > 0) {
      // 如果 URL 没有参数，设置第一个品牌并更新 URL
      const firstBrand = brandItems[0].value;
      setSelectedBrand(firstBrand);
      
      const params = new URLSearchParams(searchParams.toString());
      params.set("brand", firstBrand);
      router.replace(`/brands?${params.toString()}`);
    }
  }, [searchParams, router]);

  const handleBrandClick = (brandValue: string) => {
    setSelectedBrand(brandValue);

    // 构建新的 URL 参数
    const params = new URLSearchParams(searchParams.toString());
    params.set("brand", brandValue);

    // 推送到 URL
    router.push(`/brands?${params.toString()}`);
  };

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        height: { xs: 700, sm: 600 },
      }}
      data-testid="hero-section"
    >
      {/* Background Container */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "url(/images/pics/banner.png)",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          zIndex: 0,
        }}
        data-testid="hero-slides-container"
      />

      {/* Content Container */}
      <Box
        sx={{
          position: "relative",
          zIndex: 10,
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
        className="container mx-auto"
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: {"xs": "center", "md": "flex-end"},
            alignItems: "center",
            width: "100%",
          }}
        >
          {/* 品牌网格 */}
          <Box
            sx={{
              display: "grid",
              width: "fit-content",
              p: 1,
              gridTemplateColumns: {
                xs: "repeat(3, 1fr)",
                sm: "repeat(4, 1fr)",
              },
              backgroundColor: "grey.300",
              gap: 1,
            }}
          >
            {brandItems.map((brand) => (
              <Paper
                key={brand.value}
                onClick={() => handleBrandClick(brand.value)}
                elevation={selectedBrand === brand.value ? 8 : 2}
                sx={{
                  px: 1,
                  py: 4,
                  cursor: "pointer",
                  borderRadius: 0,
                  boxShadow: 0,
                  backgroundColor:
                    selectedBrand === brand.value ? "primary.main" : "white",
                  "&:hover": {
                    backgroundColor: "grey.400",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1,
                  }}
                >
                  {brand.logo && (
                    <Box
                      component="img"
                      src={brand.logo}
                      alt={brand.label}
                      sx={{
                        width: 40,
                        objectFit: "contain",
                        filter:
                          selectedBrand === brand.value ? "none" : "invert(1)",
                        opacity: selectedBrand === brand.value ? 1 : 0.5,
                        transition: "filter 0.3s ease",
                      }}
                    />
                  )}
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      fontSize: "0.875rem",
                      textAlign: "center",
                      color:
                        selectedBrand === brand.value
                          ? "white"
                          : "text.primary",
                    }}
                  >
                    {brand.label}
                  </Typography>
                  {brand.description && (
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "0.75rem",
                        textAlign: "center",
                        color:
                          selectedBrand === brand.value
                            ? "rgba(255,255,255,0.8)"
                            : "text.secondary",
                      }}
                    >
                      {brand.description}
                    </Typography>
                  )}
                </Box>
              </Paper>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
