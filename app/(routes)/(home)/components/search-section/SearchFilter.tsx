import { Box } from "@mui/material";
import FilterSelect from "./FilterSelect";
import { useState, forwardRef, useImperativeHandle, useEffect } from "react";
import { SearchTabType } from "./SearchTabs";

type SearchFilterProps = {
  filterType: SearchTabType;
};

export const SearchFilter = forwardRef<
  {
    getFilters: () => any;
    resetFilters: () => void;
  },
  SearchFilterProps
>(({ filterType }, ref) => {
  const getInitialFilters = () => {
    switch (filterType) {
      case "vehicle":
        return {
          make: "",
          model: "",
          year: "",
          trim: "",
          diameter: "",
          stock: "",
        };
      case "wheel":
        return {
          diameter: "",
          width: "",
          boltPattern: "",
          finish: "",
        };
      case "tyre":
        return {
          width: "",
          aspectRatio: "",
          rimDiameter: "",
          brand: "",
        };
      default:
        return {};
    }
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

  // Common options
  const stockOptions = [
    { value: "instock", label: "In Stock" },
    { value: "outofstock", label: "Out of Stock" },
  ];

  // Vehicle filter options
  const makeOptions = [
    { value: "toyota", label: "Toyota" },
    { value: "honda", label: "Honda" },
    { value: "ford", label: "Ford" },
  ];

  const modelOptions = [
    { value: "camry", label: "Camry" },
    { value: "accord", label: "Accord" },
    { value: "f150", label: "F-150" },
  ];

  const yearOptions = [
    { value: "2023", label: "2023" },
    { value: "2022", label: "2022" },
    { value: "2021", label: "2021" },
  ];

  const trimOptions = [
    { value: "base", label: "Base" },
    { value: "sport", label: "Sport" },
    { value: "luxury", label: "Luxury" },
  ];

  const vehicleDiameterOptions = [
    { value: "16", label: '16"' },
    { value: "17", label: '17"' },
    { value: "18", label: '18"' },
  ];

  // Wheel filter options
  const wheelDiameterOptions = [
    { value: "17", label: '17"' },
    { value: "18", label: '18"' },
    { value: "19", label: '19"' },
    { value: "20", label: '20"' },
  ];

  const widthOptions = [
    { value: "7", label: '7"' },
    { value: "7.5", label: '7.5"' },
    { value: "8", label: '8"' },
    { value: "8.5", label: '8.5"' },
  ];

  const boltPatternOptions = [
    { value: "5x114.3", label: "5x114.3" },
    { value: "5x120", label: "5x120" },
    { value: "5x112", label: "5x112" },
  ];

  const offsetOptions = [
    { value: "35", label: "+35" },
    { value: "40", label: "+40" },
    { value: "45", label: "+45" },
  ];

  const finishOptions = [
    { value: "silver", label: "Silver" },
    { value: "black", label: "Black" },
    { value: "chrome", label: "Chrome" },
  ];

  // Tyre filter options
  const tyreWidthOptions = [
    { value: "205", label: "205" },
    { value: "215", label: "215" },
    { value: "225", label: "225" },
    { value: "235", label: "235" },
  ];

  const aspectRatioOptions = [
    { value: "45", label: "45" },
    { value: "50", label: "50" },
    { value: "55", label: "55" },
    { value: "60", label: "60" },
  ];

  const rimDiameterOptions = [
    { value: "16", label: '16"' },
    { value: "17", label: '17"' },
    { value: "18", label: '18"' },
  ];

  const brandOptions = [
    { value: "michelin", label: "Michelin" },
    { value: "bridgestone", label: "Bridgestone" },
    { value: "goodyear", label: "Goodyear" },
  ];

  const seasonOptions = [
    { value: "summer", label: "Summer" },
    { value: "winter", label: "Winter" },
    { value: "allseason", label: "All Season" },
  ];

  const renderFilters = () => {
    switch (filterType) {
      case "vehicle":
        return (
          <>
            <FilterSelect
              label="MAKE"
              value={filters.make || ""}
              onChange={(value) => handleFilterChange("make", value)}
              options={makeOptions}
            />
            <FilterSelect
              label="MODEL"
              value={filters.model || ""}
              onChange={(value) => handleFilterChange("model", value)}
              options={modelOptions}
            />
            <FilterSelect
              label="YEAR"
              value={filters.year || ""}
              onChange={(value) => handleFilterChange("year", value)}
              options={yearOptions}
            />
            <FilterSelect
              label="TRIM"
              value={filters.trim || ""}
              onChange={(value) => handleFilterChange("trim", value)}
              options={trimOptions}
            />
            <FilterSelect
              label="DIAMETER"
              value={filters.diameter || ""}
              onChange={(value) => handleFilterChange("diameter", value)}
              options={vehicleDiameterOptions}
            />
            <FilterSelect
              label="STOCK"
              value={filters.stock || ""}
              onChange={(value) => handleFilterChange("stock", value)}
              options={stockOptions}
            />
          </>
        );
      case "wheel":
        return (
          <>
            <FilterSelect
              label="DIAMETER"
              value={filters.diameter || ""}
              onChange={(value) => handleFilterChange("diameter", value)}
              options={wheelDiameterOptions}
            />
            <FilterSelect
              label="WIDTH"
              value={filters.width || ""}
              onChange={(value) => handleFilterChange("width", value)}
              options={widthOptions}
            />
            <FilterSelect
              label="BOLT PATTERN"
              value={filters.boltPattern || ""}
              onChange={(value) => handleFilterChange("boltPattern", value)}
              options={boltPatternOptions}
            />
            <FilterSelect
              label="FINISH"
              value={filters.finish || ""}
              onChange={(value) => handleFilterChange("finish", value)}
              options={finishOptions}
            />
          </>
        );
      case "tyre":
        return (
          <>
            <FilterSelect
              label="WIDTH"
              value={filters.width || ""}
              onChange={(value) => handleFilterChange("width", value)}
              options={tyreWidthOptions}
            />
            <FilterSelect
              label="ASPECT RATIO"
              value={filters.aspectRatio || ""}
              onChange={(value) => handleFilterChange("aspectRatio", value)}
              options={aspectRatioOptions}
            />
            <FilterSelect
              label="RIM DIAMETER"
              value={filters.rimDiameter || ""}
              onChange={(value) => handleFilterChange("rimDiameter", value)}
              options={rimDiameterOptions}
            />
            <FilterSelect
              label="BRAND"
              value={filters.brand || ""}
              onChange={(value) => handleFilterChange("brand", value)}
              options={brandOptions}
            />
          </>
        );
      default:
        return null;
    }
  };

  const getGridColumns = () => {
    switch (filterType) {
      case "vehicle":
        return { xs: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(6, 1fr)" };
      case "wheel":
      case "tyre":
        return { xs: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" };
      default:
        return { xs: "1fr", md: "repeat(4, 1fr)" };
    }
  };

  return (
    <Box
      sx={{
        bgcolor: "white",
        borderRadius: 1,
        py: 1,
        px: { xs: 2, md: 4, lg: 10 },
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        mb: 3,
      }}
      data-testid="search-filter"
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: getGridColumns(),
          gap: 0,
          columnGap: 3,
          rowGap: 2,
          "& > *": {
            position: "relative",
            // 默认有 divider
            "&::after": {
              content: '""',
              position: "absolute",
              right: "-12px",
              top: "10%",
              height: "80%",
              width: "1px",
              backgroundColor: "grey.200",
            },

            // xs：1 列 → 全部不显示
            "@media (max-width:599px)": {
              "&::after": {
                display: "none",
              },
            },

            // sm：2 列 → 每 2 个去掉
            "@media (min-width:600px) and (max-width:1199px)": {
              "&:nth-child(2n)::after": {
                display: "none",
              },
            },

            // lg：4 列 → 每 4 个去掉
            "@media (min-width:1200px)": {
              "&:nth-child(4n)::after": {
                display: "none",
              },
            },
          },
        }}
      >
        {renderFilters()}
      </Box>
    </Box>
  );
});

SearchFilter.displayName = "SearchFilter";
