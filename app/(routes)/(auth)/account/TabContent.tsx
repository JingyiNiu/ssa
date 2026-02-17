"use client";

import { Typography } from "@mui/material";
import type { AccountTabId } from "./accountTabs";

interface TabContentProps {
  tab: AccountTabId;
}

export function TabContent({ tab }: TabContentProps) {
  switch (tab) {
    case "dashboard":
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
    case "orders":
      return (
        <>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Orders
          </Typography>
          <Typography color="text.secondary">
            Your order history will appear here.
          </Typography>
        </>
      );
    case "downloads":
      return (
        <>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Downloads
          </Typography>
          <Typography color="text.secondary">
            Your downloadable files will appear here.
          </Typography>
        </>
      );
    case "addresses":
      return (
        <>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Addresses
          </Typography>
          <Typography color="text.secondary">
            Your saved addresses will appear here.
          </Typography>
        </>
      );
    case "account-details":
      return (
        <>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Account Details
          </Typography>
          <Typography color="text.secondary">
            Edit your account details here.
          </Typography>
        </>
      );
    default:
      return null;
  }
}
