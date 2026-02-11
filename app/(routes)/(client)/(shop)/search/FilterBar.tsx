"use client";

import {
  Box,
  Typography,
  MenuItem,
  Chip,
  FormControl,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import {
  Category,
} from "@/app/components/layout/product-list/wc-product";

export type SortOption =
  | "relevance"
  | "price-asc"
  | "price-desc"
  | "rating"
  | "name";
export type PriceRange = "all" | "0-50" | "50-100" | "100-200" | "200+";

interface FilterBarProps {
  searchQuery?: string;
  selectedCategory: Category | "all";
  onCategoryChange: (event: SelectChangeEvent<Category | "all">) => void;
  priceRange: PriceRange;
  onPriceRangeChange: (event: SelectChangeEvent) => void;
  sortBy: SortOption;
  onSortChange: (event: SelectChangeEvent<SortOption>) => void;
  hasActiveFilters: boolean;
  onClearFilters: () => void;
}

export const FilterBar = ({
  searchQuery,
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
  sortBy,
  onSortChange,
  hasActiveFilters,
  onClearFilters,
}: FilterBarProps) => {
  return (
    <Box
      sx={{
        mb: 3,
      }}
      data-testid="filter-bar"
    >
      {/* 显示搜索关键词 */}
      {searchQuery && searchQuery.trim() && (
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            color: "text.primary",
            mb: 2,
          }}
        >
          Results for: <span style={{ color: "#d32f2f" }}>"{searchQuery}"</span>
        </Typography>
      )}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          flexWrap: "wrap",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <FilterListIcon sx={{ color: "text.secondary" }} />
          <Typography
            variant="body2"
            sx={{ fontWeight: 600, color: "text.primary" }}
          >
            Filters:
          </Typography>
        </Box>

        {/* 类别过滤 */}
        <FormControl size="small" sx={{ minWidth: 150 }}>
          <Select
            value={selectedCategory}
            onChange={onCategoryChange}
            sx={{
              bgcolor: "white",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "grey.300",
              },
            }}
          >
            <MenuItem value="all">All Categories</MenuItem>
          </Select>
        </FormControl>

        {/* 价格区间 */}
        <FormControl size="small" sx={{ minWidth: 150 }}>
          <Select
            value={priceRange}
            onChange={onPriceRangeChange}
            sx={{
              bgcolor: "white",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "grey.300",
              },
            }}
          >
            <MenuItem value="all">All Prices</MenuItem>
            <MenuItem value="0-50">Under $50</MenuItem>
            <MenuItem value="50-100">$50 - $100</MenuItem>
            <MenuItem value="100-200">$100 - $200</MenuItem>
            <MenuItem value="200+">$200+</MenuItem>
          </Select>
        </FormControl>

        {/* 排序 */}
        <FormControl size="small" sx={{ minWidth: 150 }}>
          <Select
            value={sortBy}
            onChange={onSortChange}
            sx={{
              bgcolor: "white",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "grey.300",
              },
            }}
          >
            <MenuItem value="relevance">Relevance</MenuItem>
            <MenuItem value="price-asc">Price: Low to High</MenuItem>
            <MenuItem value="price-desc">Price: High to Low</MenuItem>
            <MenuItem value="rating">Highest Rated</MenuItem>
            <MenuItem value="name">Name: A-Z</MenuItem>
          </Select>
        </FormControl>

        {/* 清除过滤器 */}
        {hasActiveFilters && (
          <Chip
            label="Clear Filters"
            onClick={onClearFilters}
            onDelete={onClearFilters}
            color="primary"
            variant="outlined"
            size="small"
            sx={{
              cursor: "pointer",
              "&:hover": {
                bgcolor: "primary.light",
              },
            }}
          />
        )}
      </Box>
    </Box>
  );
};
