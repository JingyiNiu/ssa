"use client";

import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import { useRouter } from "next/navigation";
import { Product } from "../product-list/product";

interface PopularCardProps {
  product: Product;
}

export const PopularProductCard = ({ product }: PopularCardProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${product.id}`);
  };

  return (
    <Card
      onClick={handleClick}
      sx={{
        cursor: "pointer",
        transition: "all 0.3s ease",
        border: "1px solid #e0e0e0",
        boxShadow: "none",
        borderRadius: 0,
        "&:hover": {
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          transform: "translateY(-4px)",
        },
        "&:hover img": {
          transform: "rotateY(180deg)",
        },
      }}
      data-testid="popular-product-card"
    >
      <CardMedia
        component="div"
        sx={{
          height: 180,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
          perspective: "1000px",
        }}
      >
        <Box
          component="img"
          src={product.image}
          alt={product.name}
          sx={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
            transition: "transform 0.6s ease-in-out",
            transformStyle: "preserve-3d",
          }}
        />
      </CardMedia>

      <CardContent
        sx={{ textAlign: "center", py: 2, bgcolor: "secondary.light" }}
      >
        <Typography
          variant="body1"
          sx={{
            fontWeight: 500,
            color: "#333",
            mb: 1,
            fontSize: "0.875rem",
          }}
        >
          {product.name}
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
          }}
        >
          {product.originalPrice && (
            <Typography
              variant="body2"
              sx={{
                color: "#999",
                textDecoration: "line-through",
                fontSize: "0.875rem",
              }}
            >
              ${product.originalPrice.toFixed(2)}
            </Typography>
          )}
          <Typography
            variant="body1"
            sx={{
              fontWeight: 600,
              color: product.originalPrice ? "primary.main" : "#333",
              fontSize: "0.875rem",
            }}
          >
            ${product.price.toFixed(2)}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
