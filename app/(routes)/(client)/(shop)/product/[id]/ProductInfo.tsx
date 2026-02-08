"use client";

import {
  Box,
  Typography,
  Rating,
  LinearProgress,
  IconButton,
} from "@mui/material";
import { ProductDetails } from "./product";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import StarIcon from "@mui/icons-material/Star";
import { ActionButton } from "@/app/components/ui/ActionButton";

interface ProductInfoProps {
  product: ProductDetails;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);

  // 获取最大可用库存
  const maxStock = product.stock?.available || 0;

  // 计算库存百分比
  const stockPercentage = product.stock
    ? (product.stock.sold / (product.stock.available + product.stock.sold)) *
      100
    : 0;

  const handleQuantityChange = (type: "increase" | "decrease") => {
    if (type === "increase" && quantity < maxStock) {
      setQuantity((prev) => prev + 1);
    } else if (type === "decrease" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <Box>
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
          ({product.reviews?.length || 0} customer{" "}
          {product.reviews?.length === 1 ? "review" : "reviews"})
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
        <Typography variant="h4" sx={{ color: "#d32f2f", fontWeight: "bold" }}>
          ${product.price.toFixed(2)}
        </Typography>
      </Box>

      {/* 产品特点 */}
      {product.features && product.features.length > 0 && (
        <Box sx={{ mb: 3 }}>
          {product.features.map((feature, index) => (
            <Box
              key={index}
              sx={{ display: "flex", alignItems: "start", mb: 1 }}
            >
              <Typography sx={{ color: "#d32f2f", mr: 1 }}>•</Typography>
              <Typography variant="body2">{feature}</Typography>
            </Box>
          ))}
        </Box>
      )}

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
            Stock Status
          </Typography>

          {/* 库存数量信息 */}
          <Box sx={{ display: "flex", gap: 3, mb: 1 }}>
            <Typography variant="body2" color="text.secondary">
              Total Stock:{" "}
              <Box
                component="span"
                sx={{ fontWeight: 600, color: "text.primary" }}
              >
                {product.stock.available + product.stock.sold}
              </Box>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Sold:{" "}
              <Box
                component="span"
                sx={{ fontWeight: 600, color: "text.primary" }}
              >
                {product.stock.sold}
              </Box>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Available:{" "}
              <Box
                component="span"
                sx={{ fontWeight: 600, color: "text.primary" }}
              >
                {product.stock.available}
              </Box>
            </Typography>
          </Box>

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
      <Box>
        {/* 数量提示 */}
        {maxStock > 0 && (
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ mb: 1, display: "block" }}
          >
            Max quantity: {maxStock} {maxStock === 1 ? "item" : "items"}
          </Typography>
        )}

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 2,
            mb: 2,
          }}
        >
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
            <Typography
              sx={{ px: 2, flexGrow: 1, minWidth: 40, textAlign: "center" }}
            >
              {quantity}
            </Typography>
            <IconButton
              size="small"
              onClick={() => handleQuantityChange("increase")}
              disabled={quantity >= maxStock}
            >
              <AddIcon />
            </IconButton>
          </Box>

          {/* 添加到购物车按钮 */}
          <ActionButton sx={{ flexGrow: 1 }} disabled={maxStock === 0}>
            {maxStock === 0 ? "Out of Stock" : "Add To Cart"}
          </ActionButton>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductInfo;
