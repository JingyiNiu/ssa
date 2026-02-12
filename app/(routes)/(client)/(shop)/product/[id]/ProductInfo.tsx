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
import { useCartStore } from "@/app/store/cartStore";
import { PublicProduct } from "@/app/components/layout/product-list/public-product";
import { WCProduct } from "@/app/components/layout/product-list/wc-product";
import {
  getProductPrice,
  getProductRegularPrice,
  isWCProduct,
} from "@/app/lib/api";

interface ProductInfoProps {
  product: WCProduct | PublicProduct;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);
  const { addItem, getItemQuantity } = useCartStore();
  const cartQuantity = getItemQuantity(product.id.toString());

  const hasStockInfo =
    isWCProduct(product) && product.stock_quantity && product.total_sales;

  const totalStock = isWCProduct(product)
    ? (product.stock_quantity || 0) + product.total_sales
    : 1;

  const sold = isWCProduct(product) ? product.total_sales : 1;

  const available = isWCProduct(product) ? product.stock_quantity || 0 : 1;
  const soldPercentage = hasStockInfo ? (sold / totalStock) * 100 : 0;

  // 获取最大可用库存
  const maxStock = 1;

  // 计算库存百分比
  const stockPercentage = 1;

  const handleQuantityChange = (type: "increase" | "decrease") => {
    if (type === "increase" && quantity < Number(maxStock)) {
      setQuantity((prev) => prev + 1);
    } else if (type === "decrease" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    addItem(product, quantity);
  };

  return (
    <Box>
      {/* 产品标题 */}
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
        {product.name}
      </Typography>
      <Typography variant="body1" sx={{ color: "text.secondary", mb: 2 }}>
        SKU: {product.sku}
      </Typography>

      {/* 评分和评论 */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
        <Rating
          value={parseFloat(product.average_rating) || 0}
          readOnly
          precision={0.1}
          icon={<StarIcon sx={{ color: "#ffc107" }} />}
          emptyIcon={<StarIcon sx={{ color: "#e0e0e0" }} />}
        />
        <Typography variant="body2" color="text.secondary">
          {isWCProduct(product) ? product.rating_count : product.review_count}
        </Typography>
      </Box>

      {/* 价格 */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
        {getProductRegularPrice(product) && (
          <Typography
            variant="h6"
            sx={{
              textDecoration: "line-through",
              color: "text.secondary",
            }}
          >
            ${getProductRegularPrice(product)}
          </Typography>
        )}
        <Typography variant="h4" sx={{ color: "#d32f2f", fontWeight: "bold" }}>
          ${getProductPrice(product)}
        </Typography>
      </Box>

      {/* 产品特点 */}
      {product.short_description && (
        <Box
          sx={{
            mb: 3,
            "& p": {
              margin: 0,
              fontSize: "0.875rem",
              lineHeight: 1.6,
              color: "text.secondary",
            },
          }}
          dangerouslySetInnerHTML={{ __html: product.short_description }}
        />
      )}

      {/* 库存信息 */}
      {hasStockInfo && (
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
              Total Stock:
              <Box
                component="span"
                sx={{ fontWeight: 600, color: "text.primary" }}
              >
                {totalStock}
              </Box>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Sold:
              <Box
                component="span"
                sx={{ fontWeight: 600, color: "text.primary" }}
              >
                {sold}
              </Box>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Available:
              <Box
                component="span"
                sx={{ fontWeight: 600, color: "text.primary" }}
              >
                {available}
              </Box>
            </Typography>
          </Box>

          {available < 10 && (
            <Typography variant="body2" sx={{ mb: 1, color: "#d32f2f" }}>
              Hurry! only {available} left in stock
            </Typography>
          )}
          <LinearProgress
            variant="determinate"
            value={soldPercentage}
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
        {Number(maxStock) > 0 && (
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ mb: 1, display: "block" }}
          >
            Max quantity: {Number(maxStock)}{" "}
            {Number(maxStock) === 1 ? "item" : "items"}
          </Typography>
        )}

        {/* 选择数量添加到购物车 */}
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
              disabled={quantity >= Number(maxStock)}
            >
              <AddIcon />
            </IconButton>
          </Box>

          {/* 添加到购物车按钮 */}
          <ActionButton
            sx={{ flexGrow: 1 }}
            disabled={Number(maxStock) === 0}
            onClick={handleAddToCart}
          >
            {Number(maxStock) === 0 ? "Out of Stock" : "Add To Cart"}
          </ActionButton>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductInfo;
