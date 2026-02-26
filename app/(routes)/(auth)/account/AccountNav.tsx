"use client";

import React from "react";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ACCOUNT_NAV } from "./accountTabs";
import { getAccountNavIcon } from "./accountNavIcons";

const ICONS: Record<string, React.ReactNode> = {
  "/account/dashboard": <DashboardOutlinedIcon />,
  "/account/orders": <ShoppingBagOutlinedIcon />,
  "/account/downloads": <DownloadOutlinedIcon />,
  "/account/address": <LocationOnOutlinedIcon />,
  "/account/account-details": <PersonOutlineIcon />,
};

const itemSx = {
  py: 1.5,
  px: 3,
  "&.Mui-selected": {
    bgcolor: "#f5f5f5",
    borderLeft: "3px solid #333",
    "& .MuiListItemIcon-root": { color: "#333" },
    "& .MuiListItemText-primary": { color: "#333", fontWeight: 600 },
  },
  "&:hover": { bgcolor: "#fafafa" },
};

const iconSx = { minWidth: 40, color: "#999" };
const textSx = {
  fontSize: "0.875rem",
  color: "#666",
  fontWeight: 500,
  letterSpacing: "0.5px",
};

export default function AccountNav() {
  const pathname = usePathname();

  return (
    <Box sx={{ py: 1 }}>
      <List sx={{ p: 0 }}>
        {ACCOUNT_NAV.map((item) => {
          const hasChildren = item.children && item.children.length > 0;
          const selected = pathname === item.path;
          const showChildren =
            hasChildren &&
            (pathname === item.path || pathname.startsWith(item.path + "/"));
          const icon = ICONS[item.path];

          return (
            <React.Fragment key={item.path}>
              <ListItemButton
                component={Link}
                href={item.path}
                selected={selected}
                sx={itemSx}
              >
                {icon && (
                  <ListItemIcon sx={iconSx}>
                    {icon}
                  </ListItemIcon>
                )}
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{ sx: textSx }}
                />
              </ListItemButton>
              {showChildren &&
                item.children!.map((child) => {
                  const childSelected = pathname === child.path;
                  const childIcon = child.icon ? getAccountNavIcon(child.icon) : null;
                  return (
                    <ListItemButton
                      key={child.path}
                      component={Link}
                      href={child.path}
                      selected={childSelected}
                      sx={{ ...itemSx, pl: 5 }}
                    >
                      <ListItemIcon sx={{ ...iconSx, minWidth: 40 }}>
                        {childIcon}
                      </ListItemIcon>
                      <ListItemText
                        primary={child.label}
                        primaryTypographyProps={{ sx: textSx }}
                      />
                    </ListItemButton>
                  );
                })}
            </React.Fragment>
          );
        })}
      </List>
    </Box>
  );
}
