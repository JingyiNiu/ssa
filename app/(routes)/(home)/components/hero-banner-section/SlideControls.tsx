import { Box, Typography, Button } from "@mui/material";
import { FaCar, FaBatteryFull } from "react-icons/fa";
import { GiCarWheel, GiTyre } from "react-icons/gi";
import { FaTractor } from "react-icons/fa";

export default function SlideControls() {
  const tabs = [
    { icon: <FaCar size={24} />, label: "SEARCH BY VEHICLE" },
    { icon: <GiCarWheel size={24} />, label: "SEARCH WHEEL SIZE" },
    { icon: <GiTyre size={24} />, label: "SEARCH TYRE SIZE" },
    { icon: <FaTractor size={24} />, label: "SEARCH AGRICULTURAL" },
    { icon: <FaBatteryFull size={24} />, label: "SEARCH BATTERIES" },
  ];

  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
      }}
      data-testid="carousel-controls"
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
              backgroundColor:
                index === 0 ? "secondary.accent" : "rgba(0, 0, 0, 0.8)",
              color: "white",
              py: 3,
              display: "flex",
              flexDirection: "column",
              gap: 1,
              borderRadius: 0,
              textTransform: "none",
              borderRight:
                index < tabs.length - 1
                  ? "1px solid rgba(255, 255, 255, 0.1)"
                  : "none",
              "&:hover": {
                backgroundColor:
                  index === 0 ? "secondary.dark" : "rgba(0, 0, 0, 0.9)",
              },
            }}
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
}
