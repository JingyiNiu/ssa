"use client";

import {
  Box,
  Typography,
  Button,
  Rating,
  LinearProgress,
  IconButton,
  Chip,
} from "@mui/material";
import { Product } from "@/app/components/layout/product-list/product";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import StarIcon from "@mui/icons-material/Star";
import ProductImageGallery from "./ProductImageGallery";

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  // 优先使用 images 数组，如果没有则使用 image 字段
  const productImages = product.images && product.images.length > 0 
    ? product.images 
    : [product.image];
  
  const [quantity, setQuantity] = useState(1);

  // 计算折扣百分比
  const discountPercentage = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  // 计算库存百分比
  const stockPercentage = product.stock
    ? (product.stock.sold / (product.stock.available + product.stock.sold)) *
      100
    : 0;

  const handleQuantityChange = (type: "increase" | "decrease") => {
    if (type === "increase") {
      setQuantity((prev) => prev + 1);
    } else if (type === "decrease" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <Box className="container mx-auto py-8 px-4">
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 4,
        }}
      >
        {/* 左侧 - 图片展示区 */}
        <ProductImageGallery images={productImages} productName={product.name} />

        {/* 右侧 - 产品信息区 */}
        <Box>
          {/* 折扣标签 */}
          {discountPercentage > 0 && (
            <Chip
              label={`-${discountPercentage}%`}
              color="error"
              size="small"
              sx={{ mb: 2, fontWeight: "bold" }}
            />
          )}

          {/* 产品标题 */}
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
            {product.name}
          </Typography>

          {/* 评分和评论 */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
            <Rating
              value={product.rating || 0}
              readOnly
              precision={0.1}
              icon={<StarIcon sx={{ color: "#ffc107" }} />}
              emptyIcon={<StarIcon sx={{ color: "#e0e0e0" }} />}
            />
            <Typography variant="body2" color="text.secondary">
              (1 customer review)
            </Typography>
          </Box>

          {/* 价格 */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
            {product.originalPrice && (
              <Typography
                variant="h6"
                sx={{
                  textDecoration: "line-through",
                  color: "text.secondary",
                }}
              >
                ${product.originalPrice.toFixed(2)}
              </Typography>
            )}
            <Typography
              variant="h4"
              sx={{ color: "#d32f2f", fontWeight: "bold" }}
            >
              ${product.price.toFixed(2)}
            </Typography>
          </Box>

          {/* 产品特点 */}
          <Box sx={{ mb: 3 }}>
            <Box sx={{ display: "flex", alignItems: "start", mb: 1 }}>
              <Typography sx={{ color: "#d32f2f", mr: 1 }}>•</Typography>
              <Typography variant="body2">
                Factory original quality for less.
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "start", mb: 1 }}>
              <Typography sx={{ color: "#d32f2f", mr: 1 }}>•</Typography>
              <Typography variant="body2">Direct replacement.</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "start", mb: 1 }}>
              <Typography sx={{ color: "#d32f2f", mr: 1 }}>•</Typography>
              <Typography variant="body2">
                Installation is identical to factory unit.
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "start", mb: 1 }}>
              <Typography sx={{ color: "#d32f2f", mr: 1 }}>•</Typography>
              <Typography variant="body2">
                No vehicle modifications required.
              </Typography>
            </Box>
          </Box>

          {/* 倒计时器 */}
          <Box
            sx={{
              bgcolor: "#f5f5f5",
              p: 2,
              borderRadius: 2,
              mb: 3,
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", mb: 1, color: "text.secondary" }}
            >
              Expires Times
            </Typography>
            <Box sx={{ display: "flex", gap: 2, justifyContent: "start" }}>
              {[
                { value: 329, label: "Days" },
                { value: 22, label: "Hours" },
                { value: 56, label: "Mins" },
                { value: 43, label: "Secs" },
              ].map((item) => (
                <Box key={item.label} sx={{ textAlign: "center" }}>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: "bold", color: "#d32f2f" }}
                  >
                    {item.value}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {item.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* 库存信息 */}
          {product.stock && (
            <Box
              sx={{
                bgcolor: "#f5f5f5",
                p: 2,
                borderRadius: 2,
                mb: 3,
              }}
            >
              <Typography
                variant="body2"
                sx={{ fontWeight: "bold", mb: 1, color: "text.secondary" }}
              >
                Sold Items
              </Typography>
              <Typography variant="body2" sx={{ mb: 1, color: "#d32f2f" }}>
                Hurry! only {product.stock.available} left in stock
              </Typography>
              <LinearProgress
                variant="determinate"
                value={stockPercentage}
                sx={{
                  height: 8,
                  borderRadius: 1,
                  bgcolor: "#e0e0e0",
                  "& .MuiLinearProgress-bar": {
                    bgcolor: "#d32f2f",
                  },
                }}
              />
            </Box>
          )}

          {/* 数量选择器和按钮 */}
          <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
            {/* 数量选择器 */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                border: "1px solid #e0e0e0",
                borderRadius: 1,
              }}
            >
              <IconButton
                size="small"
                onClick={() => handleQuantityChange("decrease")}
                disabled={quantity <= 1}
              >
                <RemoveIcon />
              </IconButton>
              <Typography sx={{ px: 2, minWidth: 40, textAlign: "center" }}>
                {quantity}
              </Typography>
              <IconButton
                size="small"
                onClick={() => handleQuantityChange("increase")}
              >
                <AddIcon />
              </IconButton>
            </Box>

            {/* 添加到购物车按钮 */}
            <Button
              variant="contained"
              sx={{
                bgcolor: "#d32f2f",
                color: "white",
                px: 4,
                "&:hover": {
                  bgcolor: "#b71c1c",
                },
              }}
            >
              Add To Cart
            </Button>

            {/* 立即购买按钮 */}
            <Button
              variant="contained"
              sx={{
                bgcolor: "#424242",
                color: "white",
                px: 4,
                "&:hover": {
                  bgcolor: "#212121",
                },
              }}
            >
              Buy Now
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDetails;