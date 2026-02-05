import { ActionButton } from "@/app/components/ui/ActionButton";
import { Box, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Banner } from "./banner";

interface PromoBannerProps {
  banner: Banner;
}

export const PromoBanner = ({ banner }: PromoBannerProps) => {
  return (
    <Box
      sx={{
        position: "relative",
        height: 280,
        borderRadius: 0,
        overflow: "hidden",
        cursor: "pointer",
        transition: "transform 0.3s ease",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${banner.backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#fff",
          zIndex: 0,
        },
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "linear-gradient(to right, rgba(255,255,255,1), rgba( 255,255,255,0.3))",
          zIndex: 1,
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          p: 4,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "primary.main",
            fontWeight: 700,
            fontSize: "2rem",
            lineHeight: 1.2,
            mb: 1,
          }}
        >
          {banner.title}
        </Typography>

        <Typography
          variant="h6"
          sx={{
            color: "text.primary",
            fontWeight: 600,
            fontSize: "1rem",
            lineHeight: 1.3,
            mb: 2,
          }}
        >
          {banner.subtitle}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "text.primary",
            fontSize: "0.875rem",
            lineHeight: 1.6,
            mb: 3,
            maxWidth: "90%",
          }}
        >
          {banner.description}
        </Typography>

        <Box sx={{ width: "100%" }}>
          <ActionButton
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            sx={{ width: { xs: "100%", md: "auto" } }}
          >
            {banner.buttonText}
          </ActionButton>
        </Box>
      </Box>
    </Box>
  );
};
