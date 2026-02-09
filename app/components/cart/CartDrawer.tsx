"use client";

import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Divider,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useCartStore } from "@/app/store/cartStore";
import { useRouter } from "next/navigation";
import { ActionButton } from "@/app/components/ui/ActionButton";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

export const CartDrawer = ({ open, onClose }: CartDrawerProps) => {
  const router = useRouter();
  const {
    items,
    removeItem,
    incrementQuantity,
    decrementQuantity,
    getSubtotal,
    getTotalItems,
  } = useCartStore();

  const handleCheckout = () => {
    onClose();
    router.push("/cart");
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 400, height: "100%", display: "flex", flexDirection: "column" }}>
        {/* Header */}
        <Box
          sx={{
            p: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid",
            borderColor: "grey.200",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Shopping Cart ({getTotalItems()})
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Cart Items */}
        <Box sx={{ flex: 1, overflow: "auto", p: 2 }}>
          {items.length === 0 ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                color: "text.secondary",
              }}
            >
              <Typography variant="body1">Your cart is empty</Typography>
            </Box>
          ) : (
            items.map((item) => (
              <Box
                key={item.product.id}
                sx={{
                  mb: 2,
                  pb: 2,
                  borderBottom: "1px solid",
                  borderColor: "grey.200",
                }}
              >
                <Box sx={{ display: "flex", gap: 2 }}>
                  {/* Product Image */}
                  <Box
                    component="img"
                    src={item.product.image}
                    alt={item.product.name}
                    sx={{
                      width: 80,
                      height: 80,
                      objectFit: "cover",
                      borderRadius: 1,
                    }}
                  />

                  {/* Product Info */}
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 600,
                        mb: 0.5,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {item.product.name}
                    </Typography>
                    
                    {/* Price with optional original price */}
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      {item.product.originalPrice && (
                        <Typography
                          variant="caption"
                          sx={{
                            color: "text.secondary",
                            textDecoration: "line-through",
                          }}
                        >
                          ${item.product.originalPrice.toFixed(2)}
                        </Typography>
                      )}
                      <Typography
                        variant="body2"
                        sx={{ 
                          color: item.product.originalPrice ? "error.main" : "primary.main", 
                          fontWeight: 600 
                        }}
                      >
                        ${item.product.price.toFixed(2)}
                      </Typography>
                    </Box>

                    {/* Quantity Controls */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        mt: 1,
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          border: "1px solid",
                          borderColor: "grey.300",
                          borderRadius: 1,
                        }}
                      >
                        <IconButton
                          size="small"
                          onClick={() => decrementQuantity(item.product.id)}
                        >
                          <RemoveIcon fontSize="small" />
                        </IconButton>
                        <Typography sx={{ px: 2, minWidth: 30, textAlign: "center" }}>
                          {item.quantity}
                        </Typography>
                        <IconButton
                          size="small"
                          onClick={() => incrementQuantity(item.product.id)}
                        >
                          <AddIcon fontSize="small" />
                        </IconButton>
                      </Box>

                      <IconButton
                        size="small"
                        color="error"
                        onClick={() => removeItem(item.product.id)}
                      >
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))
          )}
        </Box>

        {/* Footer */}
        {items.length > 0 && (
          <Box
            sx={{
              p: 2,
              borderTop: "1px solid",
              borderColor: "grey.200",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mb: 2,
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                Subtotal:
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, color: "primary.main" }}
              >
                ${getSubtotal().toFixed(2)}
              </Typography>
            </Box>
            <Typography 
              variant="caption" 
              color="text.secondary"
              sx={{ display: "block", mb: 2, textAlign: "center" }}
            >
              Taxes and shipping calculated at checkout
            </Typography>

            <ActionButton fullWidth onClick={handleCheckout}>
              Proceed to Checkout
            </ActionButton>
          </Box>
        )}
      </Box>
    </Drawer>
  );
};
