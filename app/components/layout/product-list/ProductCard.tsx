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
import { Product } from "./product";

interface ProductCardProps {
  product: Product;
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
  const totalStock = product.stock
    ? product.stock.available + product.stock.sold
    : 0;
  const soldPercentage = product.stock
    ? (product.stock.sold / totalStock) * 100
    : 0;

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
        {/* 品牌标签 - 左上角 */}
        {product.brand && (
          <Box
            sx={{
              position: "absolute",
              top: 8,
              left: 0,
              bgcolor: product.brand.image ? "transparent" : "primary.main",
              color: "white",
              px: product.brand.image ? 0 : 1.5,
              pb: product.brand.image ? 0 : 0.5,
              zIndex: 1,
            }}
            data-testid="popular-product-brand"
          >
            {product.brand.image ? (
              <Box
                component="img"
                src={product.brand.image}
                alt={product.brand.name}
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
                {product.brand.name}
              </Typography>
            )}
          </Box>
        )}

        <Box
          component="img"
          src={product.image}
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
        {/* 库存信息条 */}
        {product.stock && (
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
                Available: <strong>{product.stock.available}</strong>
              </Typography>
              <Typography variant="caption" sx={{ color: "text.secondary" }}>
                Already Sold: <strong>{product.stock.sold}</strong>
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
        {product.description && (
          <Typography
            variant="caption"
            sx={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
              color: "text.secondary",
              mb: 1,
              fontSize: "0.75rem",
              lineHeight: 1.4,
              minHeight: "2.1em", // 2行的高度
            }}
          >
            {product.description}
          </Typography>
        )}

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
        {product.rating !== undefined && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: 1.5,
            }}
          >
            <RatingStars rating={product.rating} />
          </Box>
        )}

        {/* 价格 */}
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
            variant="h6"
            sx={{
              fontWeight: 700,
              color: product.originalPrice ? "primary.main" : "#333",
              fontSize: "1.125rem",
            }}
          >
            ${product.price.toFixed(2)}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
