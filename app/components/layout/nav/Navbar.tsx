import { Box, TextField, Button, Link } from "@mui/material";
import React from "react";
import { FaRegUser, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoCartOutline, IoSearch } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io5";
import { TfiMenuAlt } from "react-icons/tfi";

export const Navbar = () => {
  return (
    <Box sx={{ backgroundColor: "primary.main" }} data-testid="header">
      <Box
        className="container mx-auto"
        data-testid="header-container"
        sx={{ position: "relative" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            pt: 2,
            pb: 6,
          }}
          data-testid="header-wrapper"
        >
          <Logo />
          <SearchBar />
          <HeaderActions />
        </Box>
        <Navigation />
      </Box>
    </Box>
  );
};

const Logo = () => {
  return (
    <Box
      component="img"
      src="/images/logo/logo3.png"
      alt="logo"
      width={150}
      data-testid="logo"
    />
  );
};

const SearchBar = () => {
  return (
    <Box
      sx={{ display: "flex", flex: 1, maxWidth: 400, mx: 4 }}
      data-testid="search-bar"
    >
      <TextField
        placeholder="Enter Search Keyword"
        variant="outlined"
        size="small"
        fullWidth
        sx={{
          "& .MuiOutlinedInput-root": {
            color: "white",
            border: "0.2px solid #fff",
            borderRadius: 0,
            "& fieldset": {
              borderColor: "transparent",
            },
            "&:hover fieldset": {
              borderColor: "transparent",
            },
            "&.Mui-focused fieldset": {
              borderColor: "transparent",
            },
            "& input::placeholder": {
              color: "#fff",
              opacity: 1,
            },
          },
        }}
      />
      <Button
        variant="contained"
        sx={{
          backgroundColor: "white",
          color: "text.primary",
          textTransform: "none",
          fontWeight: 600,
          px: 4,
          ml: -0.5,
          borderRadius: 0,
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "grey.100",
          },
        }}
      >
        Search
      </Button>
    </Box>
  );
};

const HeaderActions = () => {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", gap: 4, color: "white" }}
      data-testid="hearder-actions"
    >
      <FaRegUser />
      <IoSearch />
      <IoCartOutline />
      <TfiMenuAlt />
    </Box>
  );
};

const Navigation = () => {
  const menuItems = [
    { label: "Home", hasDropdown: true },
    { label: "About", hasDropdown: false },
    { label: "Pages", hasDropdown: true },
    { label: "Blog", hasDropdown: true },
    { label: "Contact Us", hasDropdown: false },
  ];

  const socialIcons = [
    { icon: <FaFacebookF size={16} />, href: "#" },
    { icon: <FaInstagram size={16} />, href: "#" },
    { icon: <IoLogoWhatsapp size={16} />, href: "#" },
    { icon: <FaTwitter size={16} />, href: "#" },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        px: 4,
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        position: "absolute",
        left: 0,
        right: 0,
        top: "80%",
        zIndex: 5,
        mx:10,
      }}
      data-testid="navigation"
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: 2,
        }}
      >
        {/* Menu Items */}
        <Box sx={{ display: "flex", gap: 3 }}>
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href="#"
              underline="none"
              sx={{
                color: "text.primary",
                fontSize: "0.875rem",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                "&:hover": {
                  opacity: 0.8,
                },
              }}
            >
              {item.label}
              {item.hasDropdown && <span style={{ marginLeft: 4 }}>+</span>}
            </Link>
          ))}
        </Box>

        {/* Social Icons */}
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          {socialIcons.map((social, index) => (
            <Link
              key={index}
              href={social.href}
              sx={{
                color: "text.primary",
                display: "flex",
                alignItems: "center",
                "&:hover": {
                  opacity: 0.8,
                },
              }}
            >
              {social.icon}
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
