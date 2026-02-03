import { Box, Typography, Button } from "@mui/material"
import { FaCar } from "react-icons/fa"
import { GiCarWheel, GiTyre } from "react-icons/gi"

export type SearchTabType = "vehicle" | "wheel" | "tyre"

type SearchTabsProps = {
  activeTab: SearchTabType
  onTabChange: (tab: SearchTabType) => void
}

export const SearchTabs = ({ activeTab, onTabChange }: SearchTabsProps) => {
  const tabs: { icon: React.ReactElement; label: string; type: SearchTabType }[] = [
    { icon: <FaCar size={24} />, label: "SEARCH BY VEHICLE", type: "vehicle" },
    { icon: <GiCarWheel size={24} />, label: "SEARCH WHEEL", type: "wheel" },
    { icon: <GiTyre size={24} />, label: "SEARCH TYRE", type: "tyre" },
  ]

  return (
    <Box
      sx={{
        position: "absolute",
        left: 0,
        width: "100%",
        transform: "translateY(-100%)",
        zIndex: 10,
      }}
      data-testid="search-tabs"
    >
      <Box
        className="container mx-auto"
        sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
      >
        {tabs.map((tab, index) => {
          const isActive = activeTab === tab.type
          return (
            <Button
              key={index}
              onClick={() => onTabChange(tab.type)}
              sx={{
                flex: 1,
                backgroundColor: isActive ? "primary.main" : "#fff",
                color: isActive ? "#fff" : "primary.main",
                py: 3,
                display: "flex",
                flexDirection: "column",
                gap: 1,
                borderRadius: 0,
                textTransform: "none",
                ...(index < tabs.length - 1 && {
                  borderRight: "1px solid #e0e0e0",
                }),
                "&:hover": {
                  backgroundColor: isActive ? "primary.dark" : "#f0f0f0",
                },
              }}
              data-testid={`search-control-button-${tab.type}`}
            >
              {tab.icon}
              <Typography sx={{ fontSize: "0.875rem", fontWeight: 600 }}>
                {tab.label}
              </Typography>
            </Button>
          )
        })}
      </Box>
    </Box>
  )
}
