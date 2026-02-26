import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import React from "react";

interface FilterSelectProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  /** 为 true 时，label 单独显示在上方（如 ProductSearch）；否则为 MUI 默认浮动 label */
  labelAbove?: boolean;
}

const FilterSelect = ({
  label,
  value,
  onChange,
  options,
  labelAbove = false,
}: FilterSelectProps) => {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value);
  };

  const selectSx = {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: labelAbove ? undefined : "none",
      },
      fontSize: "0.8rem",
    },
  };

  if (labelAbove) {
    return (
      <Box data-testid="filter-select">
        <Typography
          component="label"
          sx={{
            display: "block",
            fontSize: "0.8rem",
            fontWeight: 500,
            color: "text.primary",
            mb: 0.5,
          }}
        >
          {label}
        </Typography>
        <FormControl fullWidth size="small" sx={selectSx}>
          <Select
            value={value}
            displayEmpty
            onChange={handleChange}
            renderValue={(v) => {
              const opt = options.find((o) => o.value === v);
              return opt ? opt.label : "Select";
            }}
            MenuProps={{
              PaperProps: {
                sx: {
                  "& .MuiMenuItem-root": { fontSize: "0.8rem" },
                  "& .MuiFormLabel-root.MuiInputLabel-root": {
                    fontSize: "1rem",
                    top:"-10px"
                  },
                },
              },
            }}
          >
            <MenuItem value="">Select</MenuItem>
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    );
  }

  return (
    <FormControl
      fullWidth
      size="small"
      sx={{
        ...selectSx,
        "& .MuiOutlinedInput-root": {
          ...selectSx["& .MuiOutlinedInput-root"],
          "& fieldset": { border: "none" },
        },
        "& .MuiFormLabel-root.MuiInputLabel-root": {
          fontSize: "0.8rem",
        },
        "& .MuiInputLabel-shrink": {
          fontSize: "0.9rem",
          transform: "translate(14px, -10px) scale(0.75)",
        },
      }}
      data-testid="filter-select"
    >
      <InputLabel>{label}</InputLabel>
      <Select
        value={value}
        label={label}
        onChange={handleChange}
        MenuProps={{
          PaperProps: {
            sx: { "& .MuiMenuItem-root": { fontSize: "0.8rem" } },
          },
        }}
      >
        <MenuItem value="">Select</MenuItem>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default FilterSelect;
