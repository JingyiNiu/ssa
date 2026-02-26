import { Typography } from "@mui/material";

export default function OrdersPage() {
  return (
    <>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Orders
      </Typography>
      <Typography color="text.secondary">
        Your order history will appear here.
      </Typography>
    </>
  );
}
