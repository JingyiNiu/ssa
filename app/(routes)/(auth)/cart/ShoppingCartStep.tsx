"use client";

import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Button,
  Divider,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { ActionButton } from "@/app/components/ui/ActionButton";

interface ShoppingCartStepProps {
  onNext: () => void;
}

// 临时模拟数据
const mockCartItems = [
  {
    id: 1,
    name: "Alloy Wheel X7",
    price: 289.0,
    quantity: 2,
    image: "/images/pics/product-1.jpg",
  },
  {
    id: 2,
    name: "Premium Brake Pad Set",
    price: 159.0,
    quantity: 1,
    image: "/images/pics/product-2.jpg",
  },
];

const ShoppingCartStep = ({ onNext }: ShoppingCartStepProps) => {
  // 计算总计
  const subtotal = mockCartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.15; // 假设 15% 税率
  const total = subtotal + tax;

  return (
    <Box>
      {mockCartItems.length === 0 ? (
        <Box sx={{ p: 4, textAlign: "center" }}>
          <Typography variant="h6" color="text.secondary">
            Your cart is empty
          </Typography>
          <Button href="/" sx={{ mt: 2 }}>
            Continue Shopping
          </Button>
        </Box>
      ) : (
        <Box>
          {/* 购物车商品列表 */}
          <TableContainer sx={{ mb: 3 }}>
            <Table>
              <TableHead>
                <TableRow sx={{ bgcolor: "grey.50" }}>
                  <TableCell sx={{ fontWeight: "bold" }}>Product</TableCell>
                  <TableCell align="center" sx={{ fontWeight: "bold" }}>
                    Price
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: "bold" }}>
                    Quantity
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: "bold" }}>
                    Total
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: "bold" }}>
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {mockCartItems.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 2 }}
                      >
                        <Box
                          component="img"
                          src={item.image}
                          alt={item.name}
                          sx={{
                            width: 80,
                            height: 80,
                            objectFit: "cover",
                            borderRadius: 1,
                          }}
                        />
                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                          {item.name}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell align="center">
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        ${item.price.toFixed(2)}
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Box
                        sx={{
                          display: "inline-flex",
                          alignItems: "center",
                          border: "1px solid #e0e0e0",
                          borderRadius: 1,
                        }}
                      >
                        <IconButton size="small">
                          <RemoveIcon fontSize="small" />
                        </IconButton>
                        <Typography
                          sx={{ px: 2, minWidth: 30, textAlign: "center" }}
                        >
                          {item.quantity}
                        </Typography>
                        <IconButton size="small">
                          <AddIcon fontSize="small" />
                        </IconButton>
                      </Box>
                    </TableCell>
                    <TableCell align="center">
                      <Typography
                        variant="body1"
                        sx={{ fontWeight: 600, color: "#d32f2f" }}
                      >
                        ${(item.price * item.quantity).toFixed(2)}
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <IconButton color="error" size="small">
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* 总计区域 */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Box sx={{ p: 1, minWidth: 350, backgroundColor: "grey.50" }}>
              <Box sx={{ p: 3, backgroundColor: "white" }}>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                  Cart Summary
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Typography variant="body1" color="text.secondary">
                    Subtotal:
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    ${subtotal.toFixed(2)}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Typography variant="body1" color="text.secondary">
                    GST (15%):
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    ${tax.toFixed(2)}
                  </Typography>
                </Box>
                <Divider sx={{ my: 2 }} />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 3,
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    Total:
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "#d32f2f" }}
                  >
                    ${total.toFixed(2)}
                  </Typography>
                </Box>
                <ActionButton fullWidth onClick={onNext}>
                  Proceed to Checkout
                </ActionButton>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ShoppingCartStep;
