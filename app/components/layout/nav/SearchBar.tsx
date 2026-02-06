"use client";

import { Box, TextField, useMediaQuery, useTheme } from "@mui/material";
import { ActionButton } from "../../ui/ActionButton";
import { useRouter } from "next/navigation";
import { useState, KeyboardEvent } from "react";
import { IoSearch } from "react-icons/io5";

export const SearchBar = () => {
  const router = useRouter();
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    const query = searchQuery.trim();
    if (query) {
      router.push(`/search?query=${encodeURIComponent(query)}`);
    } else {
      router.push("/search");
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        width: { xs: "100%", md: 400, lg: 450, xl: 500 },
        mx: { xs: 0, md: 4 },
      }}
      data-testid="search-bar"
    >
      <TextField
        placeholder="Enter Search Keyword"
        variant="outlined"
        size="small"
        fullWidth
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        sx={{
          "& .MuiOutlinedInput-root": {
            color: "primary.main",
            border: "1px solid",
            borderColor: "primary.main",
            borderRadius: 0,
            "& fieldset": {
              borderColor: "transparent",
            },
            "&:hover fieldset": {
              borderColor: "transparent",
            },
            "&.Mui-focused fieldset": {
              borderColor: "transparent",
            },
            "& input::placeholder": {
              color: "primary.main",
              opacity: 0.8,
            },
          },
        }}
      />
      <ActionButton
        sx={{ borderRadius: 0, minWidth: { xs: "50px", sm: "fit-content" } }}
        onClick={handleSearch}
        data-testid="search-button"
      >
        {isSmUp ? "Search" : <IoSearch />}
      </ActionButton>
    </Box>
  );
};
