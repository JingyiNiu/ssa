import { Box } from "@mui/material";
import { SearchBar } from "./SearchBar";
import { Logo } from "./Logo";
import { HeaderActions } from "./HeaderActions";
import { Navigation } from "./Navigation";

export const Navbar = () => {
  return (
    <Box data-testid="header">
      <Box
        className="container mx-auto"
        data-testid="header-container"
        sx={{ position: "relative" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            pt: 2,
            pb: 6,
          }}
          data-testid="header-wrapper"
        >
          <Logo />
          <SearchBar />
          <HeaderActions />
        </Box>
        <Navigation />
      </Box>
    </Box>
  );
};
