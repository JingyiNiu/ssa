"use client";

import { Typography, Box } from "@mui/material";
import { getAccountCardItems } from "../accountTabs";
import { AccountCard } from "../AccountCard";

export default function AddressPage() {
  const items = getAccountCardItems("/account/address");
  return (
    <>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Address
      </Typography>
      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
        {items.map((item) => (
          <AccountCard key={item.path} item={item} />
        ))}
      </Box>
    </>
  );
}
