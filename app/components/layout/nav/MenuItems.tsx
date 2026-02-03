"use client";

import { Box, Link, Menu, MenuItem, Grow } from "@mui/material";
import React, { useState, MouseEvent } from "react";
import { useRouter } from "next/navigation";

type DropdownItem = {
  label: string;
  href: string;
};

type MenuItemType = {
  label: string;
  hasDropdown: boolean;
  href?: string;
  dropdownItems?: DropdownItem[];
};

const MenuItems = () => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const menuItems: MenuItemType[] = [
    {
      label: "Home",
      hasDropdown: false,
      href: "/",
    },
    {
      label: "Wheels",
      hasDropdown: true,
      dropdownItems: [
        { label: "Steel Wheels", href: "/wheel?type=steel" },
        { label: "Alloy Wheels", href: "/wheel?type=alloy" },
      ],
    },
    {
      label: "Tyres",
      hasDropdown: true,
      dropdownItems: [
        { label: "BLACKLION", href: "/tyres?brand=blacklion" },
        { label: "JINYU", href: "/tyres?brand=jinyu" },
        { label: "AOTELI", href: "/tyres?brand=aoteli" },
        { label: "FARROAD", href: "/tyres?brand=farroad" },
        { label: "GRENLANDER", href: "/tyres?brand=grenlander" },
        { label: "SAILUN", href: "/tyres?brand=sailun" },
        { label: "ROVELO", href: "/tyres?brand=rovelo" },
        { label: "ROADX", href: "/tyres?brand=roadx" },
        { label: "FORTUNE", href: "/tyres?brand=fortune" },
        { label: "BLACKHAWK", href: "/tyres?brand=blackhawk" },
        { label: "ROADCLAW", href: "/tyres?brand=roadclaw" },
        { label: "Winrun", href: "/tyres?brand=winrun" },
        { label: "Genco", href: "/tyres?brand=genco" },
      ],
    },
    {
      label: "Accessories",
      hasDropdown: false,
      href: "/accessories",
    },
    {
      label: "Gallery",
      hasDropdown: false,
      href: "/gallery",
    },
    {
      label: "Sales",
      hasDropdown: false,
      href: "/sales",
    },
  ];

  const handleMouseEnter = (
    event: MouseEvent<HTMLElement>,
    menuLabel: string
  ) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(menuLabel);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
    setOpenMenu(null);
  };

  const handleMenuItemClick = (href: string) => {
    router.push(href);
    handleMouseLeave();
  };

  return (
    <Box sx={{ display: "flex", gap: 6 }}>
      {menuItems.map((item, index) => (
        <Box
          key={index}
          onMouseEnter={(e) =>
            item.hasDropdown && handleMouseEnter(e, item.label)
          }
          onMouseLeave={handleMouseLeave}
          sx={{ position: "relative" }}
        >
          <Link
            href={item.href || "#"}
            onClick={(e) => {
              if (item.hasDropdown) {
                e.preventDefault();
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
              "&:hover": {
                opacity: 0.8,
              },
            }}
          >
            {item.label}
            {item.hasDropdown && <span style={{ marginLeft: 4 }}>+</span>}
          </Link>

          {item.hasDropdown && item.dropdownItems && (
            <Menu
              anchorEl={anchorEl}
              open={openMenu === item.label}
              onClose={handleMouseLeave}
              TransitionComponent={Grow}
              transitionDuration={300}
              autoFocus={false}
              disableAutoFocusItem
              MenuListProps={{
                onMouseLeave: handleMouseLeave,
              }}
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
              {item.dropdownItems.map((dropdownItem, idx) => (
                <MenuItem
                  key={idx}
                  onClick={() => handleMenuItemClick(dropdownItem.href)}
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
                  {dropdownItem.label}
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
