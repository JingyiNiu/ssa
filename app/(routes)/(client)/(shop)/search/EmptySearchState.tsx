"use client";

import { Box, Typography, Chip } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface EmptySearchStateProps {
  searchQuery: string;
  hasActiveFilters: boolean;
  onClearFilters: () => void;
}

export const EmptySearchState = ({
  searchQuery,
  hasActiveFilters,
  onClearFilters,
}: EmptySearchStateProps) => {
  return (
    <Box
      sx={{
        textAlign: "center",
        py: 8,
        px: 2,
      }}
      data-testid="empty-search-state"
    >
      <SearchIcon
        sx={{
          fontSize: 80,
          color: "grey.300",
          mb: 2,
        }}
      />
      <Typography
        variant="h5"
        sx={{
          fontWeight: 600,
          color: "text.primary",
          mb: 1,
        }}
      >
        No products found
      </Typography>
      <Typography variant="body1" sx={{ color: "text.secondary", mb: 3 }}>
        {searchQuery.trim() ? (
          <>
            We couldn't find any products matching <strong>"{searchQuery}"</strong>
          </>
        ) : (
          <>Try adjusting your filters or search terms</>
        )}
      </Typography>
      {hasActiveFilters && (
        <Chip
          label="Clear all filters"
          onClick={onClearFilters}
          color="primary"
          clickable
          sx={{ mt: 2 }}
        />
      )}
    </Box>
  );
};
