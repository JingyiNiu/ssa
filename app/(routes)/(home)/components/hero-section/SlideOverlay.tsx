import { Box } from "@mui/material";

export const SlideOverlay = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(31, 36, 59,0.8)",
        pointerEvents: "none",
        zIndex: 1,
      }}
      data-testid="hero-slide-overlay"
    />
  );
};
