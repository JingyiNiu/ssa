"use client";

import { useState } from "react";
import { Box, Typography, Container } from "@mui/material";
import ShoppingCartStep from "./ShoppingCartStep";
import CheckoutDetailsStep from "./CheckoutDetailsStep";
import OrderCompleteStep from "./OrderCompleteStep";
import router from "next/router";

const steps = [
  {
    number: "01",
    title: "SHOPPING CART",
    subtitle: "Manage Your Items List",
  },
  {
    number: "02",
    title: "CHECKOUT DETAILS",
    subtitle: "Checkout Your Items List",
  },
  {
    number: "03",
    title: "ORDER COMPLETE",
    subtitle: "Review and Submit Your Order",
  },
];

const CartSteps = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <ShoppingCartStep onNext={handleNext} />;
      case 1:
        return <CheckoutDetailsStep onNext={handleNext} onBack={handleBack} />;
      case 2:
        return <OrderCompleteStep />;
      default:
        return null;
    }
  };

  return (
    <Box className="container mx-auto" data-testid="cart-steps">
      {/* Custom Steps Navigation */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          gap: { xs: 2, sm: 4, md: 8 },
          px: { xs: 2, md: 0 },
          mb: { xs: 4, md: 10 },
          flexWrap: "wrap",
        }}
      >
        {steps.map((step, index) => {
          const isCompleted = index < activeStep;
          const isActive = index === activeStep;
          const isUpcoming = index > activeStep;

          return (
            <Box
              key={step.number}
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: 2,
                opacity: isUpcoming ? 0.3 : 1,
                transition: "opacity 0.3s ease",
              }}
            >
              {/* Step Number */}
              <Typography
                sx={{
                  fontSize: { xs: "3rem", sm: "4rem" },
                  fontWeight: "bold",
                  lineHeight: 1,
                  color: isUpcoming ? "#999" : "#000",
                }}
              >
                {step.number}
              </Typography>

              {/* Step Title and Subtitle */}
              <Box sx={{ pt: 1 }}>
                <Typography
                  sx={{
                    fontSize: { xs: "0.875rem", sm: "1rem" },
                    fontWeight: "bold",
                    letterSpacing: "0.5px",
                    color: isUpcoming ? "#999" : "#000",
                    mb: 0.5,
                  }}
                >
                  {step.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "0.75rem", sm: "0.875rem" },
                    color: isUpcoming ? "#ccc" : "#666",
                  }}
                >
                  {step.subtitle}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>

      {/* Step Content */}
      <Box>{renderStepContent(activeStep)}</Box>
    </Box>
  );
};

export default CartSteps;
