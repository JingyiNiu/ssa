"use client";

import { Typography, Paper, Box } from "@mui/material";
import Link from "next/link";
import type { AccountNavChild } from "./accountTabs";
import { getAccountNavIcon } from "./accountNavIcons";

interface AccountCardProps {
  item: AccountNavChild;
}

const cardSx = {
  p: 3,
  minWidth: 200,
  minHeight: 300,
  flex: 1,
  display: "flex",
  flexDirection: "column" as const,
  justifyContent: "center",
  alignItems: "center",
  textDecoration: "none",
  color: "inherit",
  borderRadius: 1,
  "&:hover": {
    bgcolor: "action.hover",
  },
};

export function AccountCard({ item }: AccountCardProps) {
  return (
    <Paper
      component={Link}
      href={item.path}
      variant="outlined"
      sx={cardSx}
    >
      {item.icon && (
        <Box sx={{ mb: 1 }}>{getAccountNavIcon(item.icon, 48)}</Box>
      )}
      <Typography variant="subtitle1" fontWeight={600} gutterBottom>
        {item.label}
      </Typography>
      {item.description && (
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      )}
    </Paper>
  );
}
