import { Box, Link } from "@mui/material";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";

export const Navigation = () => {
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
        backgroundColor: "primary.main",
        color: "white",
        px: 4,
        position: "absolute",
        left: 0,
        right: 0,
        top: "80%",
        zIndex: 5,
        mx: 10,
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
                color: "#fff",
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
                color: "#fff",
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
