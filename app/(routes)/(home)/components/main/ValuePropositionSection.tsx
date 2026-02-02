import { Box, Typography, Button } from "@mui/material";
import React from "react";

export const ValuePropositionSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: 400,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 8,
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "url(/images/pics/image-placeholder.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#1a1a1a",
          zIndex: 0,
        },
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0,0,0,0.6)",
          zIndex: 1,
        },
      }}
      data-testid="value-proposition-section"
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          maxWidth: "900px",
          px: 3,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "secondary.accent",
            fontWeight: 700,
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
            lineHeight: 1.2,
            mb: 3,
            textTransform: "uppercase",
            letterSpacing: "0.02em",
          }}
        >
          Driving Success
          <br />
          For The Tyre Dealer
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "white",
            fontSize: { xs: "0.875rem", sm: "1rem" },
            lineHeight: 1.8,
            mb: 4,
            maxWidth: "800px",
            mx: "auto",
          }}
        >
          We are dedicated to serving New Zealand's tyre retailers with the
          products, service and support required for success in the tyre
          industry. With distribution centres strategically located throughout
          the country, we offer high quality passenger, 4x4, commercial,
          agricultural and industrial tyres to suit every requirement.
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Button
            variant="outlined"
            sx={{
              color: "white",
              borderColor: "white",
              px: 4,
              py: 1.5,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              borderRadius: 0,
              "&:hover": {
                borderColor: "white",
                bgcolor: "rgba(255,255,255,0.1)",
              },
            }}
          >
            Learn More
          </Button>

          <Button
            variant="outlined"
            sx={{
              color: "white",
              borderColor: "white",
              px: 4,
              py: 1.5,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              borderRadius: 0,
              "&:hover": {
                borderColor: "white",
                bgcolor: "rgba(255,255,255,0.1)",
              },
            }}
          >
            Our Brands
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
