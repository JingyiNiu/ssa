import { Box } from "@mui/material";
import FilterSelect from "./FilterSelect";
import { useState, forwardRef, useImperativeHandle, useEffect } from "react";
import { searchConfig, SearchFilterProps } from "./search";

export const SearchFilter = forwardRef<
  {
    getFilters: () => any;
    resetFilters: () => void;
  },
  SearchFilterProps
>(({ filterType }, ref) => {
  // 获取当前类型的配置
  const currentConfig = searchConfig[filterType];

  // 根据配置生成初始 filters
  const getInitialFilters = () => {
    if (!currentConfig) return {};
    return currentConfig.fields.reduce(
      (acc, field) => {
        acc[field.key] = "";
        return acc;
      },
      {} as Record<string, string>
    );
  };

  const [filters, setFilters] = useState(getInitialFilters());

  // Reset filters when filterType changes
  useEffect(() => {
    setFilters(getInitialFilters());
  }, [filterType]);

  useImperativeHandle(ref, () => ({
    getFilters: () => ({ type: filterType, filters }),
    resetFilters: () => setFilters(getInitialFilters()),
  }));

  const handleFilterChange = (field: string, value: string) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  // 根据配置动态渲染筛选器
  const renderFilters = () => {
    if (!currentConfig) return null;

    return currentConfig.fields.map((field) => (
      <FilterSelect
        key={field.key}
        label={field.label}
        value={filters[field.key] || ""}
        onChange={(value) => handleFilterChange(field.key, value)}
        options={field.options}
      />
    ));
  };

  return (
    <Box
      sx={{
        bgcolor: "white",
        borderRadius: 2,
        border: "1px solid #eee",
        py: 1,
        px: { xs: 2, md: 4, lg: 10 },
        boxShadow: "0 30px 60px 40px rgba(0,0,0,0.05)",
        mb: 3,
      }}
      data-testid="search-filter"
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: currentConfig?.gridColumns || { xs: "1fr" },
          gap: 0,
          columnGap: 3,
          rowGap: 2,
        }}
      >
        {renderFilters()}
      </Box>
    </Box>
  );
});

SearchFilter.displayName = "SearchFilter";
