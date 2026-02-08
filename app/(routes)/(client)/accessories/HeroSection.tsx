"use client";

import { SlideOverlay } from "@/app/components/ui/SlideOverlay";
import { Box, Tabs, Tab, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

type WheelTab = {
  value: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
};

export const HeroSection = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState("steel");

  // 从 URL 读取 type 参数
  useEffect(() => {
    const type = searchParams.get("type");
    if (type === "steel" || type === "alloy") {
      setActiveTab(type);
    }
  }, [searchParams]);

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setActiveTab(newValue);

    // 构建新的 URL 参数
    const params = new URLSearchParams(searchParams.toString());
    params.set("type", newValue);

    // 推送到 URL
    router.push(`/wheels?${params.toString()}`);
  };

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        height: 400,
      }}
      data-testid="hero-section"
    >
      {/* Slides Container */}
      <Box
        sx={{
          display: "flex",
          height: "100%",
          backgroundImage: "url(/images/pics/accessories.png)",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
        data-testid="hero-slides-container"
      ></Box>
    </Box>
  );
};
