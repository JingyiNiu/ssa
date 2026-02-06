import { Box, Link } from "@mui/material";
import { FooterSectionTitle } from "./FooterSectionTitle";

const UsefulLinks = () => {
  const usefulLinks = [
    { label: "About", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "Our Blog", href: "/blog" },
  ];

  return (
    <Box data-testid="useful-links" mb={{ xs: 4, md: 0 }}>
      <FooterSectionTitle title="Useful Links" />
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
        {usefulLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            sx={{
              color: "rgba(255,255,255,0.7)",
              textDecoration: "none",
              fontSize: "0.875rem",
              transition: "color 0.3s",
              "&:hover": {
                color: "white",
              },
            }}
          >
            {link.label}
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default UsefulLinks;
