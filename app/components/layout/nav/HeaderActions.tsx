"use client";

import {
  Box,
  IconButton,
  Tooltip,
  Drawer,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Link,
} from "@mui/material";
import { FaRegUser } from "react-icons/fa";
import { TfiMenuAlt } from "react-icons/tfi";
import { MdLogout, MdLogin } from "react-icons/md";
import { useRouter } from "next/navigation";
import { useState } from "react";
import MobileNavigation from "./MobileNavigation";
import { CartIcon } from "@/app/components/cart/CartIcon";
import { useAuthStore, logout } from "@/app/lib/auth";
import { HeaderIconButton } from "./HeaderIconButton";
import { IoCart } from "react-icons/io5";
import { CartDrawer } from "../../cart/CartDrawer";

export const HeaderActions = () => {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [logoutDialogOpen, setLogoutDialogOpen] = useState(false);

  // 从 authStore 获取认证状态
  const isLoggedIn = useAuthStore((state) => state.isAuthenticated);
  const isHydrated = useAuthStore((state) => state.isHydrated);

  const handleLogoutClick = () => {
    setLogoutDialogOpen(true);
  };

  const handleLogoutConfirm = () => {
    setLogoutDialogOpen(false);
    logout();
  };

  const handleLogoutCancel = () => {
    setLogoutDialogOpen(false);
  };

  const toggleMobileMenu = (open: boolean) => {
    setMobileMenuOpen(open);
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
        {/* Cart Icon - 仅在已登录且 hydration 完成后显示 */}
        {isHydrated && isLoggedIn && (
          <Tooltip title="Cart" arrow>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: { xs: 36, lg: 64 },
                height: { xs: 36, lg: 64 },
                borderRadius: "50%",
                color: "primary.main",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "primary.light",
                },
              }}
            >
              <CartIcon />
            </Box>
          </Tooltip>
        )}

        {/* Account / Login 按钮 - 等待 hydration 完成后再显示，避免闪烁 */}
        {isHydrated && (
          <>
            {isLoggedIn ? (
              <HeaderIconButton
                icon={<FaRegUser size={20} />}
                tooltip="Account"
                onClick={() => router.push("/account")}
                ariaLabel="Account"
              />
            ) : (
              <Link href="/login" style={{ textDecoration: 'none' }}>Login</Link>

            )}
          </>
        )}

        {/* Logout Button - 仅在已登录且 hydration 完成后显示 */}
        {isHydrated && isLoggedIn && (
          <HeaderIconButton
            icon={<MdLogout size={20} />}
            tooltip="Logout"
            onClick={handleLogoutClick}
            ariaLabel="Logout"
          />
        )}
      </Box>

      {/* 移动端菜单按钮 */}
      <Box
        sx={{ display: { xs: "flex", md: "none" } }}
        data-testid="mobile-menu-button"
      >
        <CartIcon/>
        <IconButton
          onClick={() => toggleMobileMenu(true)}
          aria-label="Menu"
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
          <TfiMenuAlt size={20} />
        </IconButton>
      </Box>

      {/* 移动端菜单抽屉 */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={() => toggleMobileMenu(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: { xs: "85%", sm: "400px" },
            maxWidth: "100vw",
          },
        }}
        data-testid="mobile-drawer"
      >
        <MobileNavigation onClose={() => toggleMobileMenu(false)} />
      </Drawer>

      {/* 退出确认对话框 */}
      <Dialog
        open={logoutDialogOpen}
        onClose={handleLogoutCancel}
        aria-labelledby="logout-dialog-title"
        aria-describedby="logout-dialog-description"
        data-testid="logout-dialog"
      >
        <DialogTitle id="logout-dialog-title">Confirm Logout</DialogTitle>
        <DialogContent>
          <DialogContentText id="logout-dialog-description">
            Are you sure you want to logout?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleLogoutCancel} color="primary">
            Cancel
          </Button>
          <Button
            onClick={handleLogoutConfirm}
            color="primary"
            variant="contained"
            autoFocus
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>

      {/* 购物车抽屉 */}
      <CartDrawer
        open={cartDrawerOpen}
        onClose={() => setCartDrawerOpen(false)}
      />
    </Box>
  );
};
