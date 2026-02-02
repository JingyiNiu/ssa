import { Box } from "@mui/material";
import HeroSlide from "./HeroSlide";
import SlideControls from "./SlideControls";

export default function HeroSection() {
  return (
    <Box sx={{ position: "relative", mb: 4 }} data-testid="hero-section">
      <HeroSlide />
      <SlideControls />
    </Box>
  );
};
