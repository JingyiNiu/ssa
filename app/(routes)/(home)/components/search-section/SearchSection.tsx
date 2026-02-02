"use client"

import { Box, Button } from "@mui/material"
import RefreshIcon from "@mui/icons-material/Refresh"
import { useState, useRef } from "react"
import { ActionButton } from "@/app/components/ui/ActionButton"
import { SearchTabs } from "./SearchTabs"
import { SearchFilter } from "./SearchFilter"

export const SearchSection = () => {
  const searchFilterRef = useRef<{ getFilters: () => any; resetFilters: () => void }>(null)

  const handleSearch = () => {
    const filters = searchFilterRef.current?.getFilters()
    console.log("Search filters:", filters)
    // Implement search logic here
  }

  const handleReset = () => {
    searchFilterRef.current?.resetFilters()
  }

  return (
    <Box data-testid="search-section" sx={{ mb: 4 }}>
      <Box className="container mx-auto" data-testid="search-section-container">
        <SearchTabs />
        <Box sx={{ py: 2 }} />

        <SearchFilter ref={searchFilterRef} />

        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            gap: 2,
            position: "relative",
          }}
        >
          <ActionButton
            onClick={handleSearch}
            sx={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              minWidth: 240,
            }}
          >
            SEARCH
          </ActionButton>
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
  )
}
