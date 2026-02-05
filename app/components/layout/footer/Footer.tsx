"use client";

import { Box, Divider } from "@mui/material";
import CompanyInfo from "./CompanyInfo";
import UsefulLinks from "./UsefulLinks";
import GetInTouch from "./GetInTouch";
import PopularPost from "./PopularPost";
import FooterBottom from "./FooterBottom";

export const Footer = () => {
  return (
    <Box
      sx={{ bgcolor: "secondary.dark", color: "white" }}
      data-testid="footer"
    >
      {/* Main Footer Content */}
      <Box sx={{ py: 6 }}>
        <Box className="container mx-auto">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                lg: "repeat(4, 1fr)",
              },
              gap: 4,
            }}
          >
            <CompanyInfo />
            <UsefulLinks />
            <GetInTouch />
            <PopularPost />
          </Box>
        </Box>
      </Box>

      <Divider sx={{ borderColor: "rgba(255,255,255,0.1)" }} />

      <FooterBottom />
    </Box>
  );
};
