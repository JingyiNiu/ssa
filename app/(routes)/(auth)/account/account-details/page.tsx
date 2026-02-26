import { Typography } from "@mui/material";

export default function AccountDetailsPage() {
  return (
    <>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Account details
      </Typography>
      <Typography color="text.secondary">
        Edit your account details here.
      </Typography>
    </>
  );
}
