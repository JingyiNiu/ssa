import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React from "react";
import { ActionButton } from "@/app/components/ui/ActionButton";

interface Banner {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  backgroundImage: string;
}

export const PromoBannersSection = () => {
  const banners: Banner[] = [
    {
      id: 1,
      title: "100% Approved",
      subtitle: "by customers",
      description:
        "elit, sed do eiusmod tempor incididunt ut dolore magna aliqua. Quis ipsum",
      buttonText: "Shop Now",
      backgroundImage: "/images/pics/image-placeholder.png",
    },
    {
      id: 2,
      title: "Get 20% off",
      subtitle: "your first order when you join our newsletter",
      description:
        "elit, sed do eiusmod tempor incididunt ut dolore magna aliqua. Quis ipsum",
      buttonText: "Shop Now",
      backgroundImage: "/images/pics/image-placeholder.png",
    },
  ];

  return (
    <Box data-testid="promo-banners-section" sx={{ mb: 4 }}>
      <Box className="container mx-auto">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
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

interface PromoBannerProps {
  banner: Banner;
}

const PromoBanner = ({ banner }: PromoBannerProps) => {
  return (
    <Box
      sx={{
        position: "relative",
        height: 250,
        borderRadius: 0,
        overflow: "hidden",
        cursor: "pointer",
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "scale(1.02)",
        },
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${banner.backgroundImage})`,
          backgroundSize: "contain",
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#333",
          zIndex: 0,
        },
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.3))",
          zIndex: 1,
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          p: 4,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "white",
            fontWeight: 700,
            fontSize: "2rem",
            lineHeight: 1.2,
            mb: 0.5,
          }}
        >
          {banner.title}
        </Typography>

        <Typography
          variant="h6"
          sx={{
            color: "white",
            fontWeight: 400,
            fontSize: "1rem",
            lineHeight: 1.3,
            mb: 2,
          }}
        >
          {banner.subtitle}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "rgba(255,255,255,0.9)",
            fontSize: "0.875rem",
            lineHeight: 1.6,
            mb: 3,
            maxWidth: "90%",
          }}
        >
          {banner.description}
        </Typography>

        <Box>
          <ActionButton
            variant="contained"
            endIcon={<ArrowForwardIcon />}
          >
            {banner.buttonText}
          </ActionButton>
        </Box>
      </Box>
    </Box>
  );
};
