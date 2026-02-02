"use client";

import { Box, Button } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import React, { useState } from "react";
import FilterSelect from "./FilterSelect";

const SearchSection = () => {
  const [filters, setFilters] = useState({
    make: "",
    model: "",
    yearChassis: "",
    trim: "",
    diameter: "",
    stock: "",
  });

  // Filter options data
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

  const yearChassisOptions = [
    { value: "2023", label: "2023" },
    { value: "2022", label: "2022" },
    { value: "2021", label: "2021" },
  ];

  const trimOptions = [
    { value: "base", label: "Base" },
    { value: "sport", label: "Sport" },
    { value: "luxury", label: "Luxury" },
  ];

  const diameterOptions = [
    { value: "16", label: '16"' },
    { value: "17", label: '17"' },
    { value: "18", label: '18"' },
  ];

  const stockOptions = [
    { value: "instock", label: "In Stock" },
    { value: "outofstock", label: "Out of Stock" },
  ];

  const handleFilterChange = (field: string, value: string) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const handleSearch = () => {
    console.log("Search filters:", filters);
    // Implement search logic here
  };

  const handleReset = () => {
    setFilters({
      make: "",
      model: "",
      yearChassis: "",
      trim: "",
      diameter: "",
      stock: "",
    });
  };

  return (
    <Box data-testid="search-section" sx={{ mb: 4 }}>
      <Box
        className="container mx-auto"
        data-testid="search-section-container"
        sx={{ px: 2 }}
      >
        <Box
          sx={{
            bgcolor: "white",
            borderRadius: 1,
            py: 1,
            px: 10,
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            mb: 3,
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(6, 1fr)",
              gap: 0,
              columnGap: 3,
              "& > *": {
                position: "relative",
                "&:not(:last-child)::after": {
                  content: '""',
                  position: "absolute",
                  right: "-12px",
                  top: "10%",
                  height: "80%",
                  width: "1px",
                  backgroundColor: "grey.200",
                },
              },
            }}
          >
            <FilterSelect
              label="MAKE"
              value={filters.make}
              onChange={(value) => handleFilterChange("make", value)}
              options={makeOptions}
            />

            <FilterSelect
              label="MODEL"
              value={filters.model}
              onChange={(value) => handleFilterChange("model", value)}
              options={modelOptions}
            />

            <FilterSelect
              label="YEAR & CHASSIS"
              value={filters.yearChassis}
              onChange={(value) => handleFilterChange("yearChassis", value)}
              options={yearChassisOptions}
            />

            <FilterSelect
              label="TRIM"
              value={filters.trim}
              onChange={(value) => handleFilterChange("trim", value)}
              options={trimOptions}
            />

            <FilterSelect
              label="DIAMETER"
              value={filters.diameter}
              onChange={(value) => handleFilterChange("diameter", value)}
              options={diameterOptions}
            />

            <FilterSelect
              label="STOCK"
              value={filters.stock}
              onChange={(value) => handleFilterChange("stock", value)}
              options={stockOptions}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            gap: 2,
            position:"relative"
          }}
        >
          <Button
            variant="contained"
            size="large"
            onClick={handleSearch}
            sx={{
              bgcolor: "secondary.accent",
              color: "white",
              px: 8,
              py: 1,
              fontWeight: 600,
              "&:hover": {
                bgcolor: "secondary.dark",
              },
              position:"absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            SEARCH
          </Button>
          <Button
            variant="text"
            startIcon={<RefreshIcon />}
            onClick={handleReset}
            sx={{
              color: "text.secondary",
              textTransform: "none",
            }}
          >
            RESET
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SearchSection;
