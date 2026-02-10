import { Box } from "@mui/material";
import { Banner } from "./banner";
import { PromoBanner } from "./PromoBanner";

export const PromoBannersSection = () => {
  const banners: Banner[] = [
    {
      id: 1,
      productId: "3f9a1c2e-6b4f-4a6e-9d8a-1b2c3d4e5f60",
      title: "100% Approved",
      subtitle: "by customers",
      description:
        "Sed in justo sit amet mauris mattis vulputate. Nunc tristique libero sit amet tristique tempus. ",
      buttonText: "Shop Now",
      backgroundImage: "/images/pics/hero-slide.png",
    },
    {
      id: 2,
      productId: "a7c2e9b4-1d53-4f88-8c0a-9e6d2b7a4c11",
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
