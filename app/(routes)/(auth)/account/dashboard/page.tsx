import { Typography } from "@mui/material";

export default function DashboardPage() {
  return (
    <>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Dashboard
      </Typography>
      <Typography color="text.secondary">
        Welcome to your account dashboard. Overview content goes here.
      </Typography>
    </>
  );
}
