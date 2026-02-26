import { Box, Typography, Button } from "@mui/material";
import { GiCarWheel, GiTyre } from "react-icons/gi";
import { MdBrandingWatermark } from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";
import { FaTags, FaToolbox } from "react-icons/fa";

export type SearchTabType = "wheel" | "tyre" | "brand" | "accessories";

type SearchTabsProps = {
  activeTab: SearchTabType;
  onTabChange: (tab: SearchTabType) => void;
};

export const SearchTabs = ({ activeTab, onTabChange }: SearchTabsProps) => {
  const tabs: {
    icon: React.ReactElement;
    label: string;
    type: SearchTabType;
  }[] = [
    { icon: <GiCarWheel size={24} />, label: "SEARCH WHEEL", type: "wheel" },
    { icon: <GiTyre size={24} />, label: "SEARCH TYRE", type: "tyre" },
    { icon: <FaTags size={22} />, label: "SEARCH BRAND", type: "brand" },
    {
      icon: <FaToolbox size={22} />,
      label: "SEARCH ACCESSORIES",
      type: "accessories",
    },
  ];

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
          const isActive = activeTab === tab.type;
          return (
            <Button
              key={index}
              onClick={() => onTabChange(tab.type)}
              sx={{
                flex: 1,
                backgroundColor: isActive ? "primary.main" : "#000",
                color: isActive ? "#fff" : "#fff",
                py: 3,
                display: "flex",
                flexDirection: "column",
                gap: 1,
                borderRadius: 0,
                textTransform: "none",
                borderTop: "1px solid #333",
                ...(index < tabs.length - 1 && {
                  borderRight: "1px solid #333",
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
          );
        })}
      </Box>
    </Box>
  );
};
