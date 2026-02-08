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

  // Tab 配置数据
  const wheelTabs: WheelTab[] = [
    {
      value: "steel",
      label: "Steel Wheels",
      description: "Durable and affordable",
    },
    {
      value: "alloy",
      label: "Alloy Wheels",
      description: "Lightweight and stylish",
    },
  ];

  // 默认选中第一个 tab
  const [activeTab, setActiveTab] = useState(
    wheelTabs.length > 0 ? wheelTabs[0].value : "steel"
  );

  // 从 URL 读取 type 参数，或设置默认值
  useEffect(() => {
    const type = searchParams.get("type");
    if (type === "steel" || type === "alloy") {
      setActiveTab(type);
    } else if (wheelTabs.length > 0) {
      // 如果 URL 没有参数，设置第一个 tab 并更新 URL
      const firstTab = wheelTabs[0].value;
      setActiveTab(firstTab);

      const params = new URLSearchParams(searchParams.toString());
      params.set("type", firstTab);
      router.replace(`/wheels?${params.toString()}`);
    }
  }, [searchParams, router]);

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
        height: { xs: 500, md: 500 },
      }}
      data-testid="hero-section"
    >
      {/* Slides Container */}
      <Box
        sx={{
          display: "flex",
          height: "100%",
          backgroundImage: "url(/images/pics/wheels.png)",
          backgroundSize: "cover",
          backgroundPosition: "left",
          backgroundRepeat: "no-repeat",
        }}
        data-testid="hero-slides-container"
      >
        <Box
          sx={{ position: "relative", zIndex: 10 }}
          className="container mx-auto"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              right: { xs: 20, md: 40 },
              left: { xs: 20, md: "auto" },
              backgroundColor: "white",
              overflow: "hidden",
              width: { xs: "auto", md: "500px" },
            }}
          >
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              sx={{
                width: "100%",
                display: "flex",
                "& .MuiTabs-indicator": {
                  display: "none",
                },
                "& .MuiTabs-flexContainer": {
                  width: "100%",
                },
              }}
              data-testid="hero-tabs"
            >
              {wheelTabs.map((tab) => (
                <Tab
                  key={tab.value}
                  value={tab.value}
                  label={
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "start",
                        justifyContent: "start",
                        gap: 0.5,
                        py: 1,
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      {tab.icon && (
                        <Box sx={{ fontSize: "2rem" }}>{tab.icon}</Box>
                      )}
                      <Typography
                        sx={{
                          fontWeight: 600,
                          fontSize: "1.1rem",
                        }}
                      >
                        {tab.label}
                      </Typography>
                      {tab.description && (
                        <Typography
                          sx={{
                            fontSize: "0.75rem",
                            opacity: 0.8,
                          }}
                        >
                          {tab.description}
                        </Typography>
                      )}
                    </Box>
                  }
                  sx={{
                    py: 1,
                    px: 2,
                    flex: 1,
                    maxWidth: "none",
                    height: { xs: 150, sm: 120 },
                    minHeight: "auto",
                    textTransform: "none",
                    color: "text.secondary",
                    backgroundColor: "#fff",
                    transition: "all 0.3s ease",
                    "&.Mui-selected": {
                      color: "white",
                      backgroundColor: "primary.main",
                    },
                    "&.Mui-selected .MuiTypography-root": {
                      color: "white",
                    },
                  }}
                />
              ))}
            </Tabs>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
