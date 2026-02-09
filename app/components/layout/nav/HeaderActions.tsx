"use client";

import { Box, IconButton, Tooltip, Drawer } from "@mui/material";
import { FaRegUser } from "react-icons/fa";
import { TfiMenuAlt } from "react-icons/tfi";
import { useRouter } from "next/navigation";
import { useState } from "react";
import MobileNavigation from "./MobileNavigation";
import { CartIcon } from "@/app/components/cart/CartIcon";

export const HeaderActions = () => {
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
      }}
      data-testid="hearder-actions"
    >
      <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
        {/* Account Icon */}
        <Tooltip title="Account" arrow>
          <IconButton
            onClick={() => router.push("/account")}
            aria-label="Account"
            sx={{
              width: 64,
              height: 64,
              color: "primary.main",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "primary.light",
              },
            }}
          >
            <FaRegUser size={20} />
          </IconButton>
        </Tooltip>

        {/* Cart Icon */}
        <Box
          sx={{
            "& .MuiIconButton-root": {
              width: 64,
              height: 64,
              color: "primary.main",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "primary.light",
              },
            },
            "& .MuiBadge-badge": {
              backgroundColor: "primary.main",
              color: "white",
              fontWeight: 600,
              fontSize: "0.75rem",
            },
          }}
        >
          <CartIcon color="primary.main" />
        </Box>
      </Box>

      <IconButton
        onClick={() => toggleDrawer(true)}
        aria-label="Menu"
        sx={{
          width: 64,
          height: 64,
          color: "primary.main",
          transition: "all 0.3s ease",
          display: { xs: "flex", md: "none" },
          "&:hover": {
            backgroundColor: "primary.light",
          },
        }}
      >
        <TfiMenuAlt size={20} />
      </IconButton>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: { xs: "85%", sm: "400px" },
            maxWidth: "100vw",
          },
        }}
      >
        <MobileNavigation onClose={() => toggleDrawer(false)} />
      </Drawer>
    </Box>
  );
};
