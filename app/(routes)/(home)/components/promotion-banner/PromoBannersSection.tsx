"use client";

import { Box } from "@mui/material";
import { Banner } from "./banner";
import { PromoBanner } from "./PromoBanner";
import { useProducts } from "../ProductsProvider";

export const PromoBannersSection = () => {
  const banners: Banner[] = [
    {
      id: "wheels",
      url: "/wheels",
      title: "Premium Alloy Wheels",
      subtitle: "Engineered for Performance",
      description:
        "Lightweight yet durable alloy wheels designed to improve handling, enhance braking response, and elevate your vehicle’s style.",
      buttonText: "Shop Now",
      backgroundImage: "/images/pics/wheels5.png",
    },
    {
      id: "tyres",
      url: "/tyres",
      title: "High-Performance Tyres",
      subtitle: "Superior Grip & Safety",
      description:
        "Advanced tread design and long-lasting compounds deliver exceptional traction, smoother rides, and confidence in all road conditions.",
      buttonText: "Shop Now",
      backgroundImage: "/images/pics/tyres1.png",
    },
  ];

  return (
    <Box data-testid="promo-banners-section" sx={{ mb: 4 }}>
      <Box className="container mx-auto">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "repeat(2, 1fr)" },
            gap: 4,
          }}
        >
          {banners.map((banner) => (
            <PromoBanner key={banner.id} banner={banner} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
