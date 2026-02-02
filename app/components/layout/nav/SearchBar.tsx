import { Box, Button, TextField } from "@mui/material";
import { ActionButton } from "../../ui/ActionButton";

export const SearchBar = () => {
  return (
    <Box
      sx={{ display: "flex", flex: 1, maxWidth: 400, mx: 4 }}
      data-testid="search-bar"
    >
      <TextField
        placeholder="Enter Search Keyword"
        variant="outlined"
        size="small"
        fullWidth
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
              opacity: 0.5,
            },
          },
        }}
      />
      <ActionButton sx={{ borderRadius: 0 }}>Search</ActionButton>
    </Box>
  );
};
