"use client"

import { Box, IconButton, Tooltip } from "@mui/material"
import { FaRegUser } from "react-icons/fa"
import { RiShoppingCart2Line } from "react-icons/ri"
import { TfiMenuAlt } from "react-icons/tfi"
import { useRouter } from "next/navigation"

export const HeaderActions = () => {
  const router = useRouter()

  const actions = [
    {
      icon: FaRegUser,
      label: "Account",
      onClick: () => router.push("/account"),
    },
    {
      icon: RiShoppingCart2Line,
      label: "Cart",
      onClick: () => router.push("/cart"),
    },
    {
      icon: TfiMenuAlt,
      label: "Menu",
      onClick: () => console.log("Menu clicked"),
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
              <Icon size={20} />
            </IconButton>
          </Tooltip>
        )
      })}
    </Box>
  )
}
