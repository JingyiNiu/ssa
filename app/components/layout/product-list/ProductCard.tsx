"use client";

import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  LinearProgress,
} from "@mui/material";
import { Star, StarBorder, StarHalf } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { WCProduct } from "./wc-product";
import { PublicProduct } from "./public-product";
import {
  getProductPrice,
  getProductRegularPrice,
  getProductSalePrice,
  getProductMainImage,
  isProductOnSale,
  isWCProduct,
  isPublicProduct,
} from "@/app/lib/api";

interface ProductCardProps {
  product: WCProduct | PublicProduct;
}

// 评分星星组件
const RatingStars = ({ rating = 0 }: { rating?: number }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(<Star key={i} sx={{ fontSize: "1rem", color: "#ffc107" }} />);
    } else if (i === fullStars && hasHalfStar) {
      stars.push(
        <StarHalf key={i} sx={{ fontSize: "1rem", color: "#ffc107" }} />
      );
    } else {
      stars.push(
        <StarBorder key={i} sx={{ fontSize: "1rem", color: "#ffc107" }} />
      );
    }
  }

  return <Box sx={{ display: "flex", gap: 0.2 }}>{stars}</Box>;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  const router = useRouter();

  // 使用辅助函数获取价格
  const price = getProductPrice(product);
  const regularPrice = getProductRegularPrice(product);
  const salePrice = getProductSalePrice(product);
  const onSale = isProductOnSale(product);
  const mainImage = getProductMainImage(product);

  // 库存信息（只有 WCProduct 可能有自定义 stock 字段）
  const hasStockInfo =
    isWCProduct(product) && product.stock_quantity && product.total_sales;
  const soldPercentage = hasStockInfo
    ? (product.total_sales /
        ((product.stock_quantity || 0) + product.total_sales)) *
      100
    : 0;

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
        overflow: "visible",
        display: "flex",
        flexDirection: "column",
        "&:hover": {
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          transform: "translateY(-4px)",
        },
        "&:hover [data-product-image]": {
          transform: "rotateY(180deg)",
        },
      }}
      data-testid="popular-product-card"
    >
      {/* 产品图片 */}
      <CardMedia
        component="div"
        sx={{
          height: 180,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
          perspective: "1000px",
          position: "relative",
        }}
        data-testid="popular-product-image"
      >
        {/* 品牌标签 - 左上角（只在有 brand 字段的产品上显示）*/}
        <Box
          sx={{
            position: "absolute",
            top: 8,
            left: 0,
            bgcolor:
              (product as any).brand && (product as any).brand.image
                ? "transparent"
                : "primary.main",
            color: "white",
            px:
              (product as any).brand && (product as any).brand.image ? 0 : 1.5,
            pb:
              (product as any).brand && (product as any).brand.image ? 0 : 0.5,
            zIndex: 1,
          }}
          data-testid="popular-product-brand"
        >
          {(product as any).brand && (product as any).brand.image ? (
            <Box
              component="img"
              src={(product as any).brand.image}
              alt={(product as any).brand.name}
              sx={{
                height: 32,
                width: "auto",
                objectFit: "contain",
                bgcolor: "primary.main",
                py: 0.5,
                px: 1,
                minWidth: 100,
                borderRadius: 0.5,
              }}
            />
          ) : (
            <Typography
              variant="caption"
              sx={{
                fontSize: "0.7rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              {(product as any).brand && (product as any).brand.name
                ? (product as any).brand.name
                : "N/A"}
            </Typography>
          )}
        </Box>

        <Box
          component="img"
          src={mainImage}
          alt={product.name}
          data-product-image
          sx={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
            transition: "transform 0.6s ease-in-out",
            transformStyle: "preserve-3d",
          }}
        />
      </CardMedia>

      {/* 产品信息 */}
      <CardContent
        sx={{ flex: 1, textAlign: "center", py: 1, bgcolor: "secondary.light" }}
      >
        {/* 库存信息条 - 只在 WCProduct 且有 stock 字段时显示 */}
        {hasStockInfo && (
          <Box sx={{ p: 1.5, pb: 0, mb: 2 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mb: 0.5,
                fontSize: "0.75rem",
              }}
            >
              <Typography variant="caption" sx={{ color: "text.secondary" }}>
                Available: <strong>{(product as any).stock_quantity}</strong>
              </Typography>
              <Typography variant="caption" sx={{ color: "text.secondary" }}>
                Already Sold: <strong>{(product as any).total_sales}</strong>
              </Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={soldPercentage}
              sx={{
                height: 6,
                borderRadius: 3,
                bgcolor: "#e0e0e0",
                "& .MuiLinearProgress-bar": {
                  bgcolor: "primary.main",
                  borderRadius: 3,
                },
              }}
            />
          </Box>
        )}

        {/* 产品描述 */}
        <Typography
          variant="caption"
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            color: "text.secondary",
            my: 1,
            fontSize: "0.75rem",
            lineHeight: 1,
          }}
        >
          SKU: {product.sku || "N/A"}
        </Typography>

        {/* 产品名称 */}
        <Typography
          variant="body1"
          sx={{
            fontWeight: 600,
            color: "#333",
            mb: 1,
            fontSize: "0.9rem",
            minHeight: "2.5em",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {product.name}
        </Typography>

        {/* 评分星星 */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: 1.5,
          }}
        >
          <RatingStars rating={parseFloat(product.average_rating)} />
        </Box>

        {/* 价格 - 使用辅助函数统一处理 */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
          }}
        >
          {onSale &&
            regularPrice &&
            parseFloat(regularPrice) > parseFloat(price) && (
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
            variant="h6"
            sx={{
              fontWeight: 700,
              color: onSale ? "primary.main" : "#333",
              fontSize: "1.125rem",
            }}
          >
            ${parseFloat(price).toFixed(2)}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
