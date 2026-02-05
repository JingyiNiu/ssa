import { Box, Typography, Link } from "@mui/material";

const footerLinks = [
  { label: "Career", href: "/career" },
  { label: "Fan's", href: "/fans" },
  { label: "Contact", href: "/contact" },
];

const FooterBottom = () => {
  return (
    <Box sx={{ py: 3 }}>
      <Box
        className="container mx-auto"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: "rgba(255,255,255,0.6)",
            fontSize: "0.875rem",
          }}
        >
          © {new Date().getFullYear()} Copyright Example. All rights reserved.
        </Typography>

        <Box sx={{ display: "flex", gap: 3 }}>
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              sx={{
                color: "rgba(255,255,255,0.6)",
                textDecoration: "none",
                fontSize: "0.875rem",
                "&:hover": { color: "white" },
              }}
            >
              {link.label}
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default FooterBottom;
