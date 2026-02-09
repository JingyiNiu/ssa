"use client";

import { Box, Typography, Paper, Button, Divider } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { ActionButton } from "@/app/components/ui/ActionButton";
import { useRouter } from "next/navigation";

const OrderCompleteStep = () => {
  const router = useRouter();
  const orderNumber = `SSA-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
  const orderDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Box
      sx={{
        maxWidth: 600,
        mx: "auto",
        textAlign: "center",
        bgcolor: "grey.50",
        p: 2,
      }}
      data-testid="order-complete-step"
    >
      <Box sx={{ p: 4, bgcolor: "white" }}>
        {/* 成功图标 */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: 3,
          }}
        >
          <CheckCircleIcon sx={{ fontSize: 80, color: "#4caf50" }} />
        </Box>

        {/* 标题 */}
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
          Order Successful!
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Thank you for your purchase. Your order has been confirmed and will be
          shipped soon.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* 订单详情 */}
        <Box sx={{ textAlign: "left", mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Order Details
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Typography variant="body2" color="text.secondary">
              Order Number:
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              {orderNumber}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Typography variant="body2" color="text.secondary">
              Order Date:
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              {orderDate}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Typography variant="body2" color="text.secondary">
              Total Amount:
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontWeight: 600, color: "#d32f2f" }}
            >
              $825.70
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Typography variant="body2" color="text.secondary">
              Payment Method:
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              Credit Card
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* 按钮 */}
        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <ActionButton fullWidth href="/account">
            View Order History
          </ActionButton>
          <Button fullWidth variant="outlined" onClick={() => router.push("/")}>
            Continue Shopping
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default OrderCompleteStep;
