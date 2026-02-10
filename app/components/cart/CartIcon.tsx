"use client";

import { IconButton, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCartStore } from "@/app/store/cartStore";
import { useState, useEffect } from "react";
import { CartDrawer } from "./CartDrawer";
import { IoCart } from "react-icons/io5";

interface CartIconProps {
  color?: string;
}

export const CartIcon = ({ color = "primary.main" }: CartIconProps) => {
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
            fontSize: "0.65rem",
            height: "16px",
            minWidth: "16px",
            padding: "0 4px",
            bgcolor: "primary.main",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            lineHeight: 1,
          },
        }}
      >
        <IoCart />
      </Badge>
      </IconButton>
      
      <CartDrawer open={drawerOpen} onClose={handleClose} />
    </>
  );
};
