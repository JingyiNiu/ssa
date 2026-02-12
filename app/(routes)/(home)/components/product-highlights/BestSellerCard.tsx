"use client";

import { Box, Typography, Card, CardContent } from "@mui/material";
import { useRouter } from "next/navigation";
import { WCProduct } from "../../../../components/layout/product-list/wc-product";
import { PublicProduct } from "@/app/components/layout/product-list/public-product";
import { getProductPrice, getProductMainImage } from "@/app/lib/api";

interface BestSellerCardProps {
  product: WCProduct | PublicProduct;
}

export const BestSellerCard = ({ product }: BestSellerCardProps) => {
  const router = useRouter();
  
  const price = getProductPrice(product);
  const mainImage = getProductMainImage(product);

  const handleClick = () => {
    router.push(`/product/${product.slug}`);
  };

  return (
    <Card
      onClick={handleClick}
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 2,
        p: 2,
        cursor: "pointer",
        borderRadius: 0,
        bgcolor: "secondary.light",
        boxShadow: "none",
        transition: "all 0.3s ease",
        "&:hover": {
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          borderColor: "#d0d0d0",
        },
      }}
      data-testid="best-seller-card"
    >
      <Box
        sx={{
          width: 80,
          height: 80,
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "white",
          "&:hover img": {
            transform: "rotateY(180deg)",
          },
        }}
      >
        <Box
          component="img"
          src={mainImage}
          alt={product.name}
          sx={{
            maxWidth: "90%",
            maxHeight: "90%",
            objectFit: "contain",
            transition: "transform 0.6s ease-in-out",
            transformStyle: "preserve-3d",
          }}
        />
      </Box>

      <CardContent sx={{ p: 0, flex: 1, "&:last-child": { pb: 0 } }}>
        <Typography
          variant="body2"
          sx={{
            fontWeight: 500,
            color: "#333",
            mb: 0.5,
            fontSize: "0.875rem",
          }}
        >
          {product.name}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontWeight: 600,
            color: "primary.main",
            fontSize: "0.875rem",
          }}
        >
          ${parseFloat(price).toFixed(2)}
        </Typography>
      </CardContent>
    </Card>
  );
};
