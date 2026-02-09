"use client";

import { Box, Typography, Chip, Divider } from "@mui/material";
import { categories, CategoryType } from "@/app/components/layout/product-list/product";
import { PriceRange } from "./FilterBar";

interface SearchResultsHeaderProps {
  resultCount: number;
  searchQuery: string;
  selectedCategory: CategoryType | "all";
  onCategoryRemove: () => void;
  priceRange: PriceRange;
  onPriceRangeRemove: () => void;
}

export const SearchResultsHeader = ({
  resultCount,
  searchQuery,
  selectedCategory,
  onCategoryRemove,
  priceRange,
  onPriceRangeRemove,
}: SearchResultsHeaderProps) => {
  return (
    <>
      <Box
        sx={{
          mb: 3,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        data-testid="search-results-header"
      >
        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          {resultCount > 0 ? (
            <>
              Found <strong>{resultCount}</strong> product
              {resultCount !== 1 ? "s" : ""}
              {searchQuery.trim() && (
                <>
                  {" "}
                  for <strong>"{searchQuery}"</strong>
                </>
              )}
            </>
          ) : (
            <>No products found</>
          )}
        </Typography>

        {/* 活动过滤器标签 */}
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          {selectedCategory !== "all" && (
            <Chip
              label={categories.find((c) => c.value === selectedCategory)?.label}
              size="small"
              onDelete={onCategoryRemove}
              sx={{ bgcolor: "primary.light" }}
            />
          )}
          {priceRange !== "all" && (
            <Chip
              label={
                priceRange === "200+" ? "Over $200" : `$${priceRange.replace("-", " - $")}`
              }
              size="small"
              onDelete={onPriceRangeRemove}
              sx={{ bgcolor: "primary.light" }}
            />
          )}
        </Box>
      </Box>

      <Divider sx={{ mb: 4 }} />
    </>
  );
};
