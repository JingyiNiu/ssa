import { Typography } from "@mui/material";

export default function InvoicePage() {
  return (
    <>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Invoice
      </Typography>
      <Typography color="text.secondary">
        Your downloadable invoices will appear here.
      </Typography>
    </>
  );
}
