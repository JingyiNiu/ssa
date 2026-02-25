"use client";

import { Box } from "@mui/material";
import { Banner } from "./banner";
import { PromoBanner } from "./PromoBanner";
import { useProducts } from "../ProductsProvider";

export const PromoBannersSection = () => {
  const { products } = useProducts();
  const promotionProducts = products.slice(0, 2);

  const banners: Banner[] = [
    {
      id: promotionProducts[0].id,
      slug: promotionProducts[0].slug,
      productId: promotionProducts[0].id,
      title: "Premium Alloy Wheels",
      subtitle: "Engineered for Performance",
      description:
        "Lightweight yet durable alloy wheels designed to improve handling, enhance braking response, and elevate your vehicle’s style.",
      buttonText: "Shop Now",
      backgroundImage: "/images/pics/value-proposition.png",
    },
    {
      id: promotionProducts[1].id,
      slug: promotionProducts[1].slug,
      productId: promotionProducts[1].id,
      title: "High-Performance Tyres",
      subtitle: "Superior Grip & Safety",
      description:
        "Advanced tread design and long-lasting compounds deliver exceptional traction, smoother rides, and confidence in all road conditions.",
      buttonText: "Shop Now",
      backgroundImage: "/images/pics/value-proposition.png",
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
