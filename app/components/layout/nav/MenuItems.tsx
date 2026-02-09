"use client";

import { Box, Link, Menu, MenuItem, Grow } from "@mui/material";
import React, { useState, MouseEvent } from "react";
import { useRouter, usePathname } from "next/navigation";
import { isActive } from "@/app/utils";
import { menuItems } from "./nav";

const MenuItems = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const handleClick = (event: MouseEvent<HTMLElement>, menuLabel: string) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(openMenu === menuLabel ? null : menuLabel);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenu(null);
  };

  const handleMenuItemClick = (href: string) => {
    router.push(href);
    handleClose();
  };

  return (
    <Box sx={{ display: "flex", gap: { xs: 2, md: 5, lg: 6 } }}>
      {menuItems.map((item, index) => (
        <Box key={index} sx={{ position: "relative" }}>
          <Link
            href={item.href || "#"}
            onClick={(e) => {
              e.preventDefault();
              if (item.hasDropdown) {
                handleClick(e, item.label);
              } else if (item.href) {
                router.push(item.href);
              }
            }}
            underline="none"
            sx={{
              color: "#fff",
              fontSize: "1rem",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              cursor: "pointer",
              position: "relative",
              pb: 0.5,
              transition: "all 0.3s ease",
              borderBottom: "2px solid",
              borderColor: isActive(pathname, item.href)
                ? "#fff"
                : "transparent",
              opacity: isActive(pathname, item.href) ? 1 : 0.9,
              "&:hover": {
                color: "rgba(255,255,255,0.9)",
                borderColor: "rgba(255,255,255,0.3)",
              },
            }}
          >
            {item.label}
            {item.hasDropdown && <span style={{ marginLeft: 4 }}>+</span>}
          </Link>

          {item.hasDropdown && item.subItems && (
            <Menu
              anchorEl={anchorEl}
              open={openMenu === item.label}
              onClose={handleClose}
              TransitionComponent={Grow}
              transitionDuration={300}
              autoFocus={false}
              disableAutoFocusItem
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              sx={{
                mt: 1,
                transform: "translateY(10px)",
                "& .MuiPaper-root": {
                  minWidth: 180,
                  animation: "slideUp 0.3s ease-out",
                },
                "@keyframes slideUp": {
                  "0%": {
                    opacity: 0,
                    transform: "translateY(20px)",
                  },
                  "100%": {
                    opacity: 1,
                    transform: "translateY(0)",
                  },
                },
              }}
            >
              {item.subItems.map((subItem, idx) => (
                <MenuItem
                  key={idx}
                  onClick={() => handleMenuItemClick(subItem.href)}
                  sx={{
                    py: 1.5,
                    fontSize: "0.875rem",
                    borderBottom: "1px solid",
                    borderColor: "grey.100",
                    ":last-child": {
                      borderBottom: "none",
                    },
                    "&:hover": {
                      backgroundColor: "primary.light",
                    },
                    "&:focus": {
                      backgroundColor: "transparent",
                    },
                    "&.Mui-focusVisible": {
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  {subItem.label}
                </MenuItem>
              ))}
            </Menu>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default MenuItems;
