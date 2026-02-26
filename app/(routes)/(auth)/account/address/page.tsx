import { Typography } from "@mui/material";

export default function AddressPage() {
  return (
    <>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Address
      </Typography>
      <Typography color="text.secondary">
        Your saved addresses (billing, shipping) will appear here.
      </Typography>
    </>
  );
}
