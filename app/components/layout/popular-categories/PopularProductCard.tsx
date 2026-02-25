"use client";

import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import { useRouter } from "next/navigation";
import { WCProduct } from "../product-list/wc-product";
import { PublicProduct } from "../product-list/public-product";
import {
  getProductPrice,
  getProductRegularPrice,
  getProductSalePrice,
  getProductMainImage,
  isProductOnSale,
  isWCProduct,
} from "@/app/lib/api";

interface PopularCardProps {
  product: WCProduct | PublicProduct;
}

export const PopularProductCard = ({ product }: PopularCardProps) => {
  const router = useRouter();

  const price = getProductPrice(product);
  const regularPrice = getProductRegularPrice(product);
  const salePrice = getProductSalePrice(product);
  const onSale = isProductOnSale(product);
  const mainImage = getProductMainImage(product);

  const handleClick = () => {
    router.push(`/product/${product.slug}`);
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
        display: "flex",
        flexDirection: "column",
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
          height: 300,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          perspective: "1000px",
        }}
      >
        <Box
          component="img"
          src={mainImage || "/images/pics/image-placeholder.png"}
          alt={product.name}
          sx={{
            maxWidth: "70%",
            maxHeight: "70%",
            objectFit: "contain",
            transition: "transform 0.6s ease-in-out",
            transformStyle: "preserve-3d",
          }}
        />
      </CardMedia>

      <CardContent
        sx={{
          flex: 1,
          textAlign: "center",
          py: 4,
          bgcolor: "secondary.light",
        }}
      >
        {/* 产品名称 */}
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

        {/* 产品SKU */}
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            mb: 1,
            fontSize: "0.75rem",
          }}
        >
          SKU: {product.sku || "N/A"}
        </Typography>

        {/* 价格 */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
            mb: 1,
          }}
        >
          {onSale && parseFloat(regularPrice) > parseFloat(price) && (
            <Typography
              variant="body2"
              sx={{
                color: "#999",
                textDecoration: "line-through",
                fontSize: "0.875rem",
              }}
            >
              ${parseFloat(regularPrice).toFixed(2)}
            </Typography>
          )}
          <Typography
            variant="body1"
            sx={{
              fontWeight: 600,
              color: onSale ? "primary.main" : "#333",
              fontSize: "0.875rem",
            }}
          >
            ${parseFloat(onSale ? salePrice : price).toFixed(2)}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
