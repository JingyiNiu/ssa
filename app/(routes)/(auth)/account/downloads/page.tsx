"use client";

import { Typography, Box } from "@mui/material";
import { getAccountCardItems } from "../accountTabs";
import { AccountCard } from "../AccountCard";

export default function DownloadsPage() {
  const items = getAccountCardItems("/account/downloads");
  return (
    <>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Downloads
      </Typography>
      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
        {items.map((item) => (
          <AccountCard key={item.path} item={item} />
        ))}
      </Box>
    </>
  );
}
