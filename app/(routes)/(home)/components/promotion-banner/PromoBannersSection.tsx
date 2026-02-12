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
      title: "100% Approved",
      subtitle: "by customers",
      description:
        "Sed in justo sit amet mauris mattis vulputate. Nunc tristique libero sit amet tristique tempus. ",
      buttonText: "Shop Now",
      backgroundImage: "/images/pics/hero-slide.png",
    },
    {
      id: promotionProducts[1].id,
      slug: promotionProducts[1].slug,
      productId: promotionProducts[1].id,
      title: "Get 20% off",
      subtitle: "your first order when you join our newsletter",
      description:
        "Aliquam ac finibus justo, id venenatis nulla. Cras nec egestas ante. Etiam consequat lacus vitae lorem faucibus scelerisque. Nunc purus neque.",
      buttonText: "Shop Now",
      backgroundImage: "/images/pics/hero-slide.png",
    },
  ];

  return (
    <Box data-testid="promo-banners-section" sx={{ mb: 4 }}>
      <Box className="container mx-auto">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "repeat(2, 1fr)" },
            gap: 3,
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
