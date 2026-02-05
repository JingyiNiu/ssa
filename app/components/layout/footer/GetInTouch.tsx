import { Box, Typography } from "@mui/material";
import { FooterSectionTitle } from "./FooterSectionTitle";

const GetInTouch = () => {
  return (
    <Box>
      <FooterSectionTitle title="Get in touch" />
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Box>
          <Typography
            variant="body2"
            sx={{
              color: "rgba(255,255,255,0.7)",
              mb: 0.5,
              fontSize: "0.875rem",
            }}
          >
            Contact Us
          </Typography>
          <Typography sx={{ fontWeight: 600, fontSize: "1rem" }}>
            111-222-3333
          </Typography>
        </Box>

        <Box>
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: "0.875rem",
              color: "white",
            }}
          >
            info@example.com
          </Typography>
        </Box>

        <Box>
          <Typography
            variant="body2"
            sx={{
              color: "rgba(255,255,255,0.7)",
              mb: 0.5,
              fontSize: "0.875rem",
            }}
          >
            Our Address
          </Typography>
          <Typography sx={{ fontSize: "0.875rem", lineHeight: 1.6 }}>
            4959 Adonais Way Duluth, GA 30136
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default GetInTouch;
