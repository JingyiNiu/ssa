"use client";

import { Box } from "@mui/material";
import { SearchBar } from "./SearchBar";
import { Logo } from "./Logo";
import { HeaderActions } from "./HeaderActions";
import { WebNavigation } from "./WebNavigation";

export const Navbar = () => {
  return (
    <Box data-testid="navbar">
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
            pb: { xs: 2, md: 6 },
          }}
          data-testid="header-wrapper"
        >
          <Logo />
          <Box
            sx={{ display: { xs: "none", md: "flex" } }}
            data-testid="search-bar-wrapper"
          >
            <SearchBar />
          </Box>
          <HeaderActions />
        </Box>

        <Box
          sx={{ display: { xs: "block", md: "none" }, mb: 2 }}
          data-testid="mobile-search-bar-wrapper"
        >
          <SearchBar />
        </Box>

        {/* 网页版导航 */}
        <Box
          sx={{ display: { xs: "none", md: "block" } }}
          data-testid="web-navigation-wrapper"
        >
          <WebNavigation />
        </Box>
      </Box>
    </Box>
  );
};
