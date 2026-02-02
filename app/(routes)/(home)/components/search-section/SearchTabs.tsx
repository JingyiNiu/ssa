import { Box, Typography, Button } from "@mui/material";
import { FaCar } from "react-icons/fa";
import { GiCarWheel, GiTyre } from "react-icons/gi";

export const SearchTabs = () => {
  const tabs = [
    { icon: <FaCar size={24} />, label: "SEARCH BY VEHICLE" },
    { icon: <GiCarWheel size={24} />, label: "SEARCH WHEEL" },
    { icon: <GiTyre size={24} />, label: "SEARCH TYRE" },
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
        {tabs.map((tab, index) => (
          <Button
            key={index}
            sx={{
              flex: 1,
              backgroundColor: index === 0 ? "primary.main" : "#fff",
              color: index === 0 ? "#fff" : "primary.main",
              py: 3,
              display: "flex",
              flexDirection: "column",
              gap: 1,
              borderRadius: 0,
              textTransform: "none",
              borderRight:
                index < tabs.length - 1 ? "1px solid #e0e0e0" : "none",
              "&:hover": {
                backgroundColor: index === 0 ? "primary.dark" : "#f0f0f0",
              },
            }}
            data-testid={`search-control-button`}
          >
            {tab.icon}
            <Typography sx={{ fontSize: "0.75rem", fontWeight: 600 }}>
              {tab.label}
            </Typography>
          </Button>
        ))}
      </Box>
    </Box>
  );
};
