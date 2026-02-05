import {
  Box,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import { IoClose } from "react-icons/io5";
import { useRouter } from "next/navigation";

type MobileNavigationProps = {
  onClose: () => void;
};

const MobileNavigation = ({ onClose }: MobileNavigationProps) => {
  const router = useRouter();

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Wheels", href: "/wheels" },
    { label: "Tyres", href: "/tyres" },
    { label: "Brands", href: "/brands" },
    { label: "Accessories", href: "/accessories" },
    { label: "Gallery", href: "/gallery" },
    { label: "About", href: "/about" },
  ];

  const handleNavigation = (href: string) => {
    router.push(href);
    onClose();
  };

  return (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: 700, color: "primary.main" }}
        >
          Menu
        </Typography>
        <IconButton
          onClick={onClose}
          aria-label="Close menu"
          sx={{
            color: "primary.main",
            width: 48,
            height: 48,
            "&:hover": {
              backgroundColor: "primary.light",
              transform: "rotate(90deg)",
            },
            transition: "all 0.3s ease",
          }}
        >
          <IoClose size={28} />
        </IconButton>
      </Box>

      {/* Navigation Items */}
      <List sx={{ flex: 1, pt: 2 }}>
        {menuItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              onClick={() => handleNavigation(item.href)}
              sx={{
                py: 2,
                px: 3,
                "&:hover": {
                  bgcolor: "primary.light",
                },
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontWeight: 600,
                  fontSize: "1rem",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />
    </Box>
  );
};

export default MobileNavigation;
