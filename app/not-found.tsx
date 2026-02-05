import { Box, Typography, Container } from "@mui/material";
import Link from "next/link";

export default function NotFound() {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "70vh",
          textAlign: "center",
          py: 8,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "4rem", md: "8rem" },
            fontWeight: 900,
            color: "primary.main",
            mb: 2,
          }}
        >
          404
        </Typography>

        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: "1.5rem", md: "2rem" },
            fontWeight: 600,
            mb: 2,
            color: "text.primary",
          }}
        >
          Page Not Found
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            mb: 4,
            maxWidth: 500,
          }}
        >
          Sorry, the page you are looking for does not exist or has been
          removed.
        </Typography>

        <Link
          href="/"
          style={{
            textDecoration: "none",
          }}
        >
          <Box
            component="button"
            sx={{
              px: 4,
              py: 1.5,
              backgroundColor: "primary.main",
              color: "white",
              border: "none",
              borderRadius: 1,
              fontSize: "1rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.3s",
              "&:hover": {
                backgroundColor: "primary.dark",
                transform: "translateY(-2px)",
              },
            }}
          >
            Go to Home
          </Box>
        </Link>
      </Box>
    </Container>
  );
}
