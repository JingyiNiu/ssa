import { Box, Typography, IconButton } from "@mui/material";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export default function HeroSlide() {
  return (
    <Box
      sx={{
        position: "relative",
        height: 700,
        backgroundImage: "url('/images/pics/image-placeholder.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      data-testid="hero-slide"
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0, 0.6)",
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          color: "white",
          mb: 10,
        }}
      >
        <Typography
          variant="h2"
          sx={{ fontSize: "3rem", fontWeight: 700, mb: 2 }}
        >
          New Top Product
          <br />
          High Quality
        </Typography>
        <Typography sx={{ maxWidth: 600, mx: "auto", opacity: 0.9 }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna
        </Typography>
      </Box>

      {/* Navigation Arrows */}
      <IconButton
        sx={{
          position: "absolute",
          left: 40,
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          color: "white",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.3)",
          },
        }}
      >
        <MdChevronLeft size={32} />
      </IconButton>

      <IconButton
        sx={{
          position: "absolute",
          right: 40,
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          color: "white",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.3)",
          },
        }}
      >
        <MdChevronRight size={32} />
      </IconButton>
    </Box>
  );
}
