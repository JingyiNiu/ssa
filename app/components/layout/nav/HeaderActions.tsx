"use client"

import { Box, IconButton, Tooltip, Badge } from "@mui/material"
import { FaRegUser } from "react-icons/fa"
import { RiShoppingCart2Line } from "react-icons/ri"
import { TfiMenuAlt } from "react-icons/tfi"
import { useRouter } from "next/navigation"

export const HeaderActions = () => {
  const router = useRouter()
  
  // TODO: Replace with actual cart items count from state management
  const cartItemCount = 3

  const actions = [
    {
      icon: FaRegUser,
      label: "Account",
      onClick: () => router.push("/account"),
      type: "account",
    },
    {
      icon: RiShoppingCart2Line,
      label: "Cart",
      onClick: () => router.push("/cart"),
      type: "cart",
    },
    {
      icon: TfiMenuAlt,
      label: "Menu",
      onClick: () => console.log("Menu clicked"),
      type: "menu",
    },
  ]
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
      }}
      data-testid="hearder-actions"
    >
      {actions.map((action) => {
        const Icon = action.icon
        const isCart = action.type === "cart"
        
        return (
          <Tooltip key={action.label} title={action.label} arrow>
            <IconButton
              onClick={action.onClick}
              aria-label={action.label}
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
              {isCart ? (
                <Badge 
                  badgeContent={cartItemCount} 
                  sx={{
                    "& .MuiBadge-badge": {
                      backgroundColor: "primary.main",
                      color: "white",
                      fontWeight: 600,
                      fontSize: "0.75rem",
                    },
                  }}
                >
                  <Icon size={20} />
                </Badge>
              ) : (
                <Icon size={20} />
              )}
            </IconButton>
          </Tooltip>
        )
      })}
    </Box>
  )
}
