"use client";

import { Typography, Grid } from "@mui/material";
import { getAccountCardItems } from "../accountTabs";
import { AccountCard } from "../AccountCard";

export default function AccountDetailsPage() {
  const items = getAccountCardItems("/account/account-details");
  return (
    <>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Account details
      </Typography>
      <Grid container spacing={2}>
        {items.map((item) => (
          <Grid key={item.path} size={{ xs: 12, md: 6 }}>
            <AccountCard item={item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
