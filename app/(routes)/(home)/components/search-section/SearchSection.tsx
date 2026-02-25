"use client";

import { Box } from "@mui/material";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { SearchTabs, SearchTabType } from "./SearchTabs";
import { SearchFilter } from "./SearchFilter";
import { SearchButtons } from "./SearchButtons";

export const SearchSection = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<SearchTabType>("wheel");
  const searchFilterRef = useRef<{
    getFilters: () => any;
    resetFilters: () => void;
  }>(null);

  const handleTabChange = (tab: SearchTabType) => {
    setActiveTab(tab);
  };

  const handleSearch = () => {
    const result = searchFilterRef.current?.getFilters();
    if (!result) return;

    const { type, filters } = result;

    // 构建 URL 参数
    const params = new URLSearchParams();

    // 添加搜索类型
    params.append("type", type);

    // 添加过滤器参数
    Object.entries(filters).forEach(([key, value]) => {
      if (value && typeof value === "string" && value.trim() !== "") {
        params.append(key, value);
      }
    });

    // 构建完整 URL 并跳转
    const url = `/search?${params.toString()}`;

    console.log("Navigating to:", url);
    router.push(url);
  };

  const handleReset = () => {
    searchFilterRef.current?.resetFilters();
  };

  return (
    <Box data-testid="search-section" sx={{ mb: 4 }}>
      <Box
        className="container mx-auto"
        data-testid="search-section-container"
        sx={{
          position: "relative",
          p: 4,
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        {/* 搜索切换按钮 */}
        <SearchTabs activeTab={activeTab} onTabChange={handleTabChange} />

        {/* 占位间距 */}
        <Box sx={{ py: 2 }} data-testid="search-section-spacing" />

        {/* 搜索条件 */}
        <SearchFilter
          key={activeTab}
          ref={searchFilterRef}
          filterType={activeTab}
        />

        {/* 搜索按钮 */}
        <SearchButtons handleSearch={handleSearch} handleReset={handleReset} />
      </Box>
    </Box>
  );
};
