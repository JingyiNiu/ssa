import { ActionButton } from "@/app/components/ui/ActionButton";
import { Box, Button } from "@mui/material";
import { IoMdRefresh } from "react-icons/io";

type SearchButtonsProps = {
  handleSearch: () => void;
  handleReset: () => void;
};

export const SearchButtons = ({
  handleSearch,
  handleReset,
}: SearchButtonsProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: { xs: "center", md: "end" },
        alignItems: "center",
        gap: 2,
        position: "relative",
      }}
      data-testid="search-buttons"
    >
      <ActionButton
        onClick={handleSearch}
        sx={{
          position: { xs: "relative", md: "absolute" },
          left: "50%",
          transform: "translateX(-50%)",
          minWidth: 240,
          width: { xs: "100%", md: "auto" },
        }}
        data-testid="search-button-search"
      >
        SEARCH
      </ActionButton>
      <Button
        variant="text"
        startIcon={<IoMdRefresh />}
        onClick={handleReset}
        sx={{
          color: "text.secondary",
          textTransform: "none",
          width: { xs: "100%", md: "auto" },
          fontSize: "0.875rem",
        }}
        data-testid="search-button-reset"
      >
        RESET
      </Button>
    </Box>
  );
};
