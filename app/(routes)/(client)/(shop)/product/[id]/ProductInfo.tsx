"use client";

import { Box, Typography, Rating, IconButton } from "@mui/material";
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
import { useAuthStore } from "@/app/store/authStore";
import { LoginToAddToCartPrompt } from "@/app/components/common/LoginToAddToCartPrompt";
import { StockStatus } from "./StockStatus";

interface ProductInfoProps {
  product: WCProduct | PublicProduct;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);
  const { addItem, getItemQuantity } = useCartStore();
  const cartQuantity = getItemQuantity(product.id.toString());
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);

  const hasStockInfo =
    isWCProduct(product) && product.stock_quantity && product.total_sales;

  const totalStock = isWCProduct(product)
    ? (product.stock_quantity || 0) + product.total_sales
    : 1;

  const sold = isWCProduct(product) ? product.total_sales : 1;

  const available = isWCProduct(product) ? product.stock_quantity || 0 : 1;
  const soldPercentage = hasStockInfo ? (sold / totalStock) * 100 : 0;

  // 最大可选数量：有库存信息时用可用库存，否则为 1
  const maxStock = hasStockInfo ? available : 1;

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

      {/* 库存信息（表格 + 数量选择器） */}
      {hasStockInfo && isAuthenticated && (
        <StockStatus
          product={product}
          totalStock={totalStock}
          sold={sold}
          available={available}
          soldPercentage={soldPercentage}
          maxStock={maxStock}
          quantity={quantity}
          onQuantityChange={handleQuantityChange}
        />
      )}

      {/* 添加到购物车 */}
      <Box sx={{ mb: 2 }}>
        {isAuthenticated ? (
          hasStockInfo ? (
            <ActionButton
              fullWidth
              disabled={Number(maxStock) === 0}
              onClick={handleAddToCart}
            >
              {Number(maxStock) === 0 ? "Out of Stock" : "Add To Cart"}
            </ActionButton>
          ) : (
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: 2,
              }}
            >
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
              <ActionButton
                sx={{ flexGrow: 1 }}
                disabled={Number(maxStock) === 0}
                onClick={handleAddToCart}
              >
                {Number(maxStock) === 0 ? "Out of Stock" : "Add To Cart"}
              </ActionButton>
            </Box>
          )
        ) : (
          <LoginToAddToCartPrompt sx={{ py: 2 }} />
        )}
      </Box>
    </Box>
  );
};

export default ProductInfo;
