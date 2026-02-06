"use client";

import { Box, Divider, Link } from "@mui/material";
import CompanyInfo from "./CompanyInfo";
import CopyrightSection from "./CopyrightSection";
import { footerLinks } from "./footer";
import { FooterSectionTitle } from "./FooterSectionTitle";

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
            {footerLinks.map((section) => (
              <Box key={section.title}>
                <FooterSectionTitle title={section.title} />
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  {section.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      sx={{ color: "white", fontSize: "0.875rem" }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Divider sx={{ borderColor: "rgba(255,255,255,0.1)" }} />

      <CopyrightSection />
    </Box>
  );
};
