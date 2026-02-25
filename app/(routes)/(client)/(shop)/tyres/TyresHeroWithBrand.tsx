"use client";

import { Box, Typography, Paper } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { brandItems } from "../brands/brand";

export const TyresHeroWithBrand = () => {
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
      router.replace(`/tyres?${params.toString()}`);
    }
  }, [searchParams, router]);

  const handleBrandClick = (brandValue: string) => {
    setSelectedBrand(brandValue);

    // 构建新的 URL 参数
    const params = new URLSearchParams(searchParams.toString());
    params.set("brand", brandValue);

    // 推送到 URL
    router.push(`/tyres?${params.toString()}`);
  };

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        height: 300,
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
          backgroundImage: "url(/images/pics/tyres.png)",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          zIndex: 0,
        }}
        data-testid="hero-slides-container"
      />
    </Box>
  );
};
