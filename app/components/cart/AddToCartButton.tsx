"use client";

import { Button, IconButton, Box, Typography } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useCartStore } from "@/app/store/cartStore";
import { WCProduct } from "@/app/components/layout/product-list/wc-product";
import { PublicProduct } from "@/app/components/layout/product-list/public-product";

interface AddToCartButtonProps {
  product: WCProduct | PublicProduct;
  variant?: "button" | "icon";
  size?: "small" | "medium" | "large";
  quantity?: number;
  disabled?: boolean;
  buttonText?: string;
  fullWidth?: boolean;
}

export const AddToCartButton = ({
  product,
  variant = "button",
  size = "medium",
  quantity: addQuantity = 1,
  disabled = false,
  buttonText = "Add to Cart",
  fullWidth = false,
}: AddToCartButtonProps) => {
  const { addItem, incrementQuantity, decrementQuantity, getItemQuantity } =
    useCartStore();
  const cartQuantity = getItemQuantity(product.id.toString());

  const handleAddToCart = () => {
    addItem(product, addQuantity);
  };

  const handleIncrement = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleDecrement = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  // 如果购物车中已有该商品，显示数量控制器
  if (cartQuantity > 0) {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          border: "1px solid #e0e0e0",
          borderRadius: 1,
          width: fullWidth ? "100%" : "auto",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <IconButton
          size="small"
          onClick={handleDecrement}
        >
          <RemoveIcon />
        </IconButton>
        <Typography
          sx={{ 
            px: 2, 
            flexGrow: fullWidth ? 1 : 0, 
            minWidth: 40, 
            textAlign: "center" 
          }}
        >
          {cartQuantity}
        </Typography>
        <IconButton
          size="small"
          onClick={handleIncrement}
        >
          <AddIcon />
        </IconButton>
      </Box>
    );
  }

  // 如果是图标变体
  if (variant === "icon") {
    return (
      <IconButton
        onClick={(e) => {
          e.stopPropagation();
          handleAddToCart();
        }}
        sx={{
          bgcolor: "primary.main",
          color: "white",
          "&:hover": {
            bgcolor: "primary.dark",
          },
        }}
        size={size}
      >
        <AddShoppingCartIcon />
      </IconButton>
    );
  }

  // 默认按钮变体
  return (
    <Button
      variant="contained"
      startIcon={<AddShoppingCartIcon />}
      onClick={(e) => {
        e.stopPropagation();
        handleAddToCart();
      }}
      disabled={disabled}
      fullWidth={fullWidth}
      sx={{
        bgcolor: "primary.main",
        color: "white",
        "&:hover": {
          bgcolor: "primary.dark",
        },
      }}
      size={size}
    >
      {buttonText}
    </Button>
  );
};
