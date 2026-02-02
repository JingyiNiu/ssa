import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";

interface FilterSelectProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
}

const FilterSelect = ({
  label,
  value,
  onChange,
  options,
}: FilterSelectProps) => {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value);
  };

  return (
    <FormControl
      fullWidth
      size="small"
      sx={{
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            border: "none",
          },
          fontSize: "0.8rem",
        },
        "& .MuiInputLabel-root": {
          fontSize: "0.8rem",
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
            sx: {
              "& .MuiMenuItem-root": {
                fontSize: "0.8rem",
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
  );
};

export default FilterSelect;
