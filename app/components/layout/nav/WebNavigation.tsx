import { Box, Link } from "@mui/material";
import SocialIcons from "./SocialIcons";
import MenuItems from "./MenuItems";

export const WebNavigation = () => {
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
        mx: {
          xs: 0,
          xl: 10,
        },
      }}
      data-testid="web-navigation"
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: 2,
        }}
      >
        <MenuItems />
        <Box sx={{ display: { xs: "none", lg: "flex" } }}>
          <SocialIcons />
        </Box>
      </Box>
    </Box>
  );
};
