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
import { FaRegUser } from "react-icons/fa";
import { MdLogin } from "react-icons/md";
import { usePathname, useRouter } from "next/navigation";
import { isActive } from "@/app/utils";
import { menuItems } from "./nav";
import { useAuthStore } from "@/app/lib/auth";

type MobileNavigationProps = {
  onClose: () => void;
};

const MobileNavigation = ({ onClose }: MobileNavigationProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const isLoggedIn = useAuthStore((state) => state.isAuthenticated);
  const isHydrated = useAuthStore((state) => state.isHydrated);

  const handleNavigation = (href: string) => {
    router.push(href);
    onClose();
  };

  return (
    <Box
      sx={{ height: "100%", display: "flex", flexDirection: "column" }}
      data-testid="mobile-navigation"
    >
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
                color: isActive(pathname, item.href)
                  ? "primary.main"
                  : "text.primary",
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

        {/* Account / Login Item - 等待 hydration 完成后显示 */}
        {isHydrated && (
          <>
            <Divider sx={{ my: 2 }} />
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => handleNavigation(isLoggedIn ? "/account" : "/login")}
                sx={{
                  py: 2,
                  px: 3,
                  color: isActive(pathname, isLoggedIn ? "/account" : "/login")
                    ? "primary.main"
                    : "text.primary",
                  "&:hover": {
                    bgcolor: "primary.light",
                  },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  {isLoggedIn ? (
                    <FaRegUser size={20} />
                  ) : (
                    <MdLogin size={20} />
                  )}
                  <ListItemText
                    primary={isLoggedIn ? "账户" : "登录"}
                    primaryTypographyProps={{
                      fontWeight: 600,
                      fontSize: "1rem",
                    }}
                  />
                </Box>
              </ListItemButton>
            </ListItem>
          </>
        )}
      </List>

      <Divider />
    </Box>
  );
};

export default MobileNavigation;
