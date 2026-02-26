import { Typography } from "@mui/material";

export default function ShippingAddressPage() {
  return (
    <>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Shipping address
      </Typography>
      <Typography color="text.secondary">
        Your shipping address will appear here.
      </Typography>
    </>
  );
}
