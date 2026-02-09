"use client";

import {
  Box,
  Typography,
  TextField,
  Button,
  Divider,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Checkbox,
  Select,
  MenuItem,
} from "@mui/material";
import { ActionButton } from "@/app/components/ui/ActionButton";
import { useState } from "react";
import CheckoutDetailsForm from "./CheckoutDetailsForm";

interface CheckoutDetailsStepProps {
  onNext: () => void;
  onBack: () => void;
}

const CheckoutDetailsStep = ({ onNext, onBack }: CheckoutDetailsStepProps) => {
  const [paymentMethod, setPaymentMethod] = useState("check");
  const [shipToDifferent, setShipToDifferent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <Box className="container mx-auto" data-testid="checkout-details-step">
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          {/* 左侧 - 账单详情 */}
          <CheckoutDetailsForm />

          {/* 右侧 - 订单摘要 */}
          <Box
            sx={{
              width: { xs: "100%", md: "500px", height: "100%" },
              bgcolor: "grey.50",
              p: 3,
            }}
            data-testid="checkout-details-right"
          >
            <Box
              sx={{
                p: 3,
                bgcolor: "white",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  mb: 3,
                  color: "#d32f2f",
                  textTransform: "uppercase",
                }}
              >
                Your Order
              </Typography>

              {/* 产品表头 */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mb: 2,
                  pb: 1,
                  borderBottom: "1px solid #e0e0e0",
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                  PRODUCT
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                  SUBTOTAL
                </Typography>
              </Box>

              {/* 产品列表 */}
              <Box sx={{ mb: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Typography variant="body2" color="text.secondary">
                    2-Piece Slotted Big Brake Kit - Blue × 1
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    $25.00
                  </Typography>
                </Box>
              </Box>

              <Divider sx={{ my: 2 }} />

              {/* Subtotal */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mb: 1.5,
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  Subtotal
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 600, color: "#d32f2f" }}
                >
                  $25.00
                </Typography>
              </Box>

              {/* Shipping */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mb: 2,
                  pb: 2,
                  borderBottom: "1px solid #e0e0e0",
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  Shipping
                </Typography>
                <Typography variant="body2">
                  Flat rate:{" "}
                  <Box component="span" sx={{ color: "#d32f2f" }}>
                    $10.00
                  </Box>
                </Typography>
              </Box>

              {/* Total */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mb: 3,
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ fontWeight: "bold", fontSize: "1rem" }}
                >
                  TOTAL
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#d32f2f" }}
                >
                  $35.00
                </Typography>
              </Box>

              {/* 支付方式 */}
              <FormControl component="fieldset" sx={{ width: "100%", mb: 3 }}>
                <RadioGroup
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                >
                  {/* Check payments */}
                  <Box
                    sx={{
                      border: "1px solid #e0e0e0",
                      borderRadius: 1,
                      p: 2,
                      mb: 1,
                      bgcolor:
                        paymentMethod === "check" ? "#f5f5f5" : "transparent",
                    }}
                  >
                    <FormControlLabel
                      value="check"
                      control={<Radio />}
                      label={
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          Check payments
                        </Typography>
                      }
                    />
                    {paymentMethod === "check" && (
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ display: "block", mt: 1, ml: 4 }}
                      >
                        Please send a check to Store Name, Store Street, Store
                        Town, Store State / County, Store Postcode.
                      </Typography>
                    )}
                  </Box>

                  {/* Cash on delivery */}
                  <Box
                    sx={{
                      border: "1px solid #e0e0e0",
                      borderRadius: 1,
                      p: 2,
                      mb: 1,
                      bgcolor:
                        paymentMethod === "cod" ? "#f5f5f5" : "transparent",
                    }}
                  >
                    <FormControlLabel
                      value="cod"
                      control={<Radio />}
                      label={
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          Cash on delivery
                        </Typography>
                      }
                    />
                  </Box>

                  {/* PayPal */}
                  <Box
                    sx={{
                      border: "1px solid #e0e0e0",
                      borderRadius: 1,
                      p: 2,
                      bgcolor:
                        paymentMethod === "paypal" ? "#f5f5f5" : "transparent",
                    }}
                  >
                    <FormControlLabel
                      value="paypal"
                      control={<Radio />}
                      label={
                        <Box
                          sx={{ display: "flex", alignItems: "center", gap: 1 }}
                        >
                          <Typography variant="body2" sx={{ fontWeight: 500 }}>
                            PayPal
                          </Typography>
                          <Box
                            component="img"
                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMTAwIDMyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMzIiIGZpbGw9IiMwMDcwYmEiIHJ4PSI0Ii8+PHRleHQgeD0iNTAiIHk9IjIwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iYm9sZCI+UGF5UGFsPC90ZXh0Pjwvc3ZnPg=="
                            alt="PayPal"
                            sx={{ height: 20 }}
                          />
                        </Box>
                      }
                    />
                  </Box>
                </RadioGroup>
              </FormControl>

              {/* 隐私政策提示 */}
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ display: "block", mb: 2 }}
              >
                Your personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our privacy policy.
              </Typography>

              {/* Place Order 按钮 */}
              <ActionButton fullWidth type="submit">
                Place Order
              </ActionButton>
            </Box>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default CheckoutDetailsStep;
