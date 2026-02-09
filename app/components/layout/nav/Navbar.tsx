"use client";

import { Box } from "@mui/material";
import { SearchBar } from "./SearchBar";
import { Logo } from "./Logo";
import { HeaderActions } from "./HeaderActions";
import { WebNavigation } from "./WebNavigation";

export const Navbar = () => {
  return (
    <Box
      data-testid="navbar"
      sx={{
        position: "sticky",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: "white",
        boxShadow: "0 2px 10px 0 rgba(0, 0, 0, 0.08)",
      }}
    >
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
