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
        justifyContent: "end",
        alignItems: "center",
        gap: 2,
        position: "relative",
      }}
      data-testid="search-buttons"
    >
      <ActionButton
        onClick={handleSearch}
        sx={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          minWidth: 240,
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
        }}
        data-testid="search-button-reset"
      >
        RESET
      </Button>
    </Box>
  );
};
