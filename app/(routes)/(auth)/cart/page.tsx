import { Box } from "@mui/material";
import CartSteps from "./CartSteps";

const CartPage = () => {
  return (
    <Box sx={{ minHeight: "100vh", py: 4 }} data-testid="cart-page">
      <CartSteps />
    </Box>
  );
};

export default CartPage;
