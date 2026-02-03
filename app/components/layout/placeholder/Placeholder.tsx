import { Box, Typography, Container, LinearProgress } from "@mui/material";
import { MdConstruction } from "react-icons/md";
import { FaTools } from "react-icons/fa";

interface PlaceholderProps {
  title?: string;
}

export const Placeholder = ({ title }: PlaceholderProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        pt: 10,
        pb: 6,
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            textAlign: "center",
            position: "relative",
          }}
        >
          {/* Animated Icons */}
          <Box
            sx={{
              position: "relative",
              display: "inline-block",
              mb: 4,
            }}
          >
            <MdConstruction
              size={120}
              color="#FFA500"
              style={{
                animation: "bounce 2s ease-in-out infinite",
              }}
            />
            <FaTools
              size={40}
              color="#FF6B35"
              style={{
                position: "absolute",
                top: "50%",
                right: "-40px",
                transform: "translateY(-50%) rotate(-15deg)",
                animation: "swing 1.5s ease-in-out infinite",
              }}
            />
          </Box>

          {/* Title */}
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              color: "primary.main",
              mb: 2,
              fontFamily: "Bebas Neue, sans-serif",
              letterSpacing: "0.02em",
            }}
          >
            {title && title + " "}PAGE UNDER CONSTRUCTION
          </Typography>

          {/* Subtitle */}
          <Typography
            variant="h5"
            sx={{
              color: "text.secondary",
              mb: 3,
              fontSize: { xs: "1rem", sm: "1.25rem" },
            }}
          >
            We're working hard to bring you something amazing!
          </Typography>

          {/* Description */}
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              maxWidth: 600,
              mx: "auto",
              mb: 4,
              lineHeight: 1.8,
            }}
          >
            This page is currently being built. Our team is working diligently
            to create an exceptional experience for you. Please check back soon!
          </Typography>

          {/* Progress Bar */}
          <LinearProgress
            sx={{
              width: 300,
              height: 10,
              borderRadius: 10,
              mx: "auto",
              "& .MuiLinearProgress-bar1Indeterminate": {
                animationDuration: "3s",
                animationTimingFunction: "ease-in-out",
              },

              "& .MuiLinearProgress-bar2Indeterminate": {
                animationDuration: "3s",
                animationTimingFunction: "ease-in-out",
                animationDelay: "0.5s", 
              },
            }}
          />

          {/* Animations */}
          {/* <style>{`
            @keyframes bounce {
              0%, 100% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(-20px);
              }
            }

            @keyframes swing {
              0%, 100% {
                transform: translateY(-50%) rotate(-15deg);
              }
              50% {
                transform: translateY(-50%) rotate(15deg);
              }
            }

            @keyframes progress {
              0%, 100% {
                width: 70%;
              }
              50% {
                width: 85%;
              }
            }
          `}</style> */}
        </Box>
      </Container>
    </Box>
  );
};
