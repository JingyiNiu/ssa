"use client";

import { IconButton, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCartStore } from "@/app/store/cartStore";
import { useState, useEffect } from "react";
import { CartDrawer } from "./CartDrawer";

interface CartIconProps {
  color?: string;
}

export const CartIcon = ({ color = "inherit" }: CartIconProps) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const totalItems = useCartStore((state) => state.getTotalItems());

  // 等待客户端 hydration 完成后再显示真实数量
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = () => {
    setDrawerOpen(true);
  };

  const handleClose = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <IconButton
        onClick={handleClick}
        sx={{
          color,
          "&:hover": {
            bgcolor: "rgba(255, 255, 255, 0.1)",
          },
        }}
      >
      <Badge
        badgeContent={mounted ? totalItems : 0}
        color="error"
        sx={{
          "& .MuiBadge-badge": {
            bgcolor: "primary.main",
            color: "white",
          },
        }}
      >
        <ShoppingCartIcon />
      </Badge>
      </IconButton>
      
      <CartDrawer open={drawerOpen} onClose={handleClose} />
    </>
  );
};
