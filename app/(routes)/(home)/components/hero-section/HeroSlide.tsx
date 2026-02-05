import { Box, Typography } from "@mui/material";
import { SlideOverlay } from "./SlideOverlay";

export type HeroSlideData = {
  backgroundImage: string;
  title: string;
  description: string;
};

type HeroSlideProps = {
  data: HeroSlideData;
  isActive: boolean;
};

export const HeroSlide = ({ data, isActive }: HeroSlideProps) => {
  return (
    <Box
      sx={{
        position: "relative",
        flex: "0 0 100vw",
        width: "100vw",
        height: "100%",
        backgroundImage: `url('${data.backgroundImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      data-testid="hero-slide"
    >
      {/* 遮罩 */}
      <SlideOverlay />

      {/* Content */}
      {isActive && (
        <Box
          key={data.title}
          sx={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            color: "white",
            mb: 20,
          }}
          data-testid="hero-slide-content"
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: "4rem",
              fontWeight: 900,
              color: "#fff",
              mb: 4,
              whiteSpace: "pre-line",
              animation: "slideDown 0.7s ease-out 0.2s both",
              "@keyframes slideDown": {
                "0%": {
                  transform: "translateY(-50px)",
                  opacity: 0,
                },
                "100%": {
                  transform: "translateY(0)",
                  opacity: 1,
                },
              },
            }}
            data-testid="hero-slide-content-title"
          >
            {data.title}
          </Typography>
          <Typography
            sx={{
              maxWidth: 600,
              mx: "auto",
              color: "#fff",
              opacity: 0.9,
              animation: "fadeInUp 0.8s ease-out 0.7s both",
              "@keyframes fadeInUp": {
                "0%": {
                  opacity: 0,
                  transform: "translateY(20px)",
                },
                "100%": {
                  opacity: 0.9,
                  transform: "translateY(0)",
                },
              },
            }}
            data-testid="hero-slide-content-description"
          >
            {data.description}
          </Typography>
        </Box>
      )}
    </Box>
  );
};
