"use client";

import { Box, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { searchConfig } from "@/app/(routes)/(home)/components/search-section/search";
import SearchIcon from "@mui/icons-material/Search";
import { ActionButton } from "@/app/components/ui/ActionButton";

export const SearchAccessories = () => {
  const [searchText, setSearchText] = useState("");
  const tyreConfig = searchConfig.tyre;

  // 初始化筛选器状态
  const getInitialFilters = () => {
    return tyreConfig.fields.reduce(
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

  return (
    <Box data-testid="search-section" sx={{ mb: 8 }}>
      <Box className="container mx-auto" data-testid="search-section-container">
        <Box
          sx={{
            bgcolor: "secondary.dark",
            borderRadius: 2,
            p: 4,
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          {/* 搜索文本框 */}
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h6"
              sx={{ mb: 1, fontWeight: 600, color: "#fff" }}
            >
              Filter accessories
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
              Search how you know it - try panel, seat cover, etc.
            </Typography>
            <Box sx={{ mb: 3 }}>
              <TextField
                fullWidth
                placeholder="Filter accessories..."
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

          {/* 按钮 */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "center",
            }}
          >
            <ActionButton
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
            </ActionButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
