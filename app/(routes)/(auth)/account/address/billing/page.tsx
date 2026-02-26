import { Typography } from "@mui/material";

export default function BillingAddressPage() {
  return (
    <>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Billing address
      </Typography>
      <Typography color="text.secondary">
        Your billing address will appear here.
      </Typography>
    </>
  );
}
