"use client";

import { ActionButton } from "@/app/components/ui/ActionButton";
import {
  Box,
  Typography,
  FormControl,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import React, { useState } from "react";

interface GalleryFilterProps {
  onFilterChange?: (category: string) => void;
}

export const GalleryFilter = ({ onFilterChange }: GalleryFilterProps) => {
  const [category, setCategory] = useState("all");

  const handleCategoryChange = (value: string) => {
    setCategory(value);
    if (onFilterChange) {
      onFilterChange(value);
    }
  };

  const categories = [{ value: "all", label: "All" }];

  return (
    <Box
      sx={{
        width: { xs: "100%", md: "250px" },
        p: 3,
        border: "1px solid #e0e0e0",
        borderRadius: 2,
        height: "fit-content",
      }}
    >
      <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
        Filter Images
      </Typography>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <Select
          value={category}
          onChange={(e) => handleCategoryChange(e.target.value)}
          sx={{
            bgcolor: "white",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#e0e0e0",
            },
          }}
        >
          {categories.map((cat) => (
            <MenuItem key={cat.value} value={cat.value}>
              {cat.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <ActionButton
        fullWidth
        onClick={() => handleCategoryChange("all")}
        sx={{
          mt: 2,
        }}
      >
        Reset Filter
      </ActionButton>
    </Box>
  );
};
