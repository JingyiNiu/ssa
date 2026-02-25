"use client";

import { Box, Typography } from "@mui/material";
import React from "react";
import { OutlineButton } from "@/app/components/ui/OutlineButton";
import { useRouter } from "next/navigation";

export const ValuePropositionSection = () => {
  const router = useRouter();

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: 700,
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
          backgroundImage: "url(/images/pics/value-proposition.png)",
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
          background: "rgba(0,0,0,0.7)",
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
            color: "primary.main",
            fontFamily: "Bebas Neue, sans-serif",
            fontWeight: 700,
            fontSize: { xs: "3rem", sm: "4rem", md: "5rem" },
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
            fontSize: { xs: "0.875rem", sm: "1rem" },
            lineHeight: 1.8,
            mb: 4,
            maxWidth: "800px",
            mx: "auto",
            color: "#fff",
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
            flexDirection: { xs: "column", md: "row" },
            gap: 2,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <OutlineButton onClick={() => router.push("/about")}>
            Learn More
          </OutlineButton>
          <OutlineButton onClick={() => router.push("/brands")}>
            Our Brands
          </OutlineButton>
        </Box>
      </Box>
    </Box>
  );
};
