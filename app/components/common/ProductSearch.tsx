"use client";

import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import FilterSelect from "@/app/(routes)/(home)/components/search-section/FilterSelect";
import { searchConfig } from "@/app/(routes)/(home)/components/search-section/search";
import SearchIcon from "@mui/icons-material/Search";

type ProductType = "wheel" | "tyre" | "brand" | "accessories";

interface ProductSearchProps {
  type: ProductType;
}

const searchTexts: Record<
  ProductType,
  {
    searchTitle: string;
    searchDescription: string;
    searchPlaceholder: string;
    filterTitle?: string;
    filterDescription?: string;
  }
> = {
  wheel: {
    searchTitle: "Filter wheels by size/range",
    searchDescription: "Try 18x8, 18x8.5, 18x8 5/114.3, '18x9 6/139.7 Assault'",
    searchPlaceholder: "Filter wheels by size/range...",
    filterTitle: "Filter wheels by specifications",
    filterDescription: "Narrow down your search using technical specs",
  },
  tyre: {
    searchTitle: "Filter tyres by size",
    searchDescription: "Search how you know it - try 2254018, 22540, or just 225",
    searchPlaceholder: "Filter tyres by size...",
    filterTitle: "Filter tyres by specifications",
    filterDescription: "Narrow down your search using technical specs",
  },
  brand: {
    searchTitle: "Filter brands by name",
    searchDescription:
      "Search how you know it - try Michelin, Bridgestone, or just Goodyear",
    searchPlaceholder: "Filter brands by name...",
    filterTitle: "Filter products by category",
    filterDescription: "Narrow down your search using category",
  },
  accessories: {
    searchTitle: "Filter accessories",
    searchDescription: "Search how you know it - try panel, seat cover, etc.",
    searchPlaceholder: "Filter accessories...",
  },
};

export const ProductSearch = ({ type }: ProductSearchProps) => {
  const [searchText, setSearchText] = useState("");
  
  // 获取对应的配置
  const config = searchConfig[type];
  const texts = searchTexts[type];

  // 初始化筛选器状态
  const getInitialFilters = () => {
    if (!config?.fields) return {};
    return config.fields.reduce(
      (acc, field) => {
        acc[field.key] = "";
        return acc;
      },
      {} as Record<string, string>
    );
  };

  const [filters, setFilters] = useState(getInitialFilters());

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleSearch = () => {
    setSearchText("");
    setFilters(getInitialFilters());
  };

  // 是否显示筛选器（accessories 没有筛选器）
  const showFilters = config?.fields && config.fields.length > 0;

  return (
    <Box data-testid="product-search" sx={{ mb: 8 }}>
      <Box className="container mx-auto" data-testid="product-search-container">
        <Box
          sx={{
            bgcolor: "secondary.dark",
            borderRadius: 2,
            p: 4,
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          {/* 搜索文本框 */}
          <Box sx={{ mb: showFilters ? 4 : 3 }}>
            <Typography
              variant="h6"
              sx={{ mb: 1, fontWeight: 600, color: "#fff" }}
            >
              {texts.searchTitle}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                mb: 2,
                fontWeight: 400,
                color: "grey.300",
                fontSize: "0.8rem",
              }}
            >
              {texts.searchDescription}
            </Typography>
            <Box sx={{ mb: 3 }}>
              <TextField
                fullWidth
                placeholder={texts.searchPlaceholder}
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "grey.50",
                    px: 1,
                  },
                }}
              />
            </Box>
          </Box>

          {/* 筛选器 - 只在有配置时显示 */}
          {showFilters && (
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h6"
                sx={{ mb: 1, fontWeight: 600, color: "#fff" }}
              >
                {texts.filterTitle}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  mb: 2,
                  fontWeight: 400,
                  color: "grey.300",
                  fontSize: "0.8rem",
                }}
              >
                {texts.filterDescription}
              </Typography>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: config.gridColumns,
                  gap: 2,
                  mb: 3,
                  bgcolor: "grey.50",
                  px: 2,
                  py: 1,
                  borderRadius: 1,
                  border: "1px solid #e0e0e0",
                }}
              >
                {config.fields.map((field) => (
                  <FilterSelect
                    key={field.key}
                    label={field.label}
                    value={filters[field.key]}
                    onChange={(value) => handleFilterChange(field.key, value)}
                    options={field.options}
                  />
                ))}
              </Box>
            </Box>
          )}

          {/* 按钮 */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={handleSearch}
              sx={{
                width: {
                  xs: "100%",
                  md: "auto",
                },
                minWidth: 200,
              }}
            >
              <SearchIcon />
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
