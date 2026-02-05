import { Box, Typography, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { TiSocialSkype } from "react-icons/ti";

export const CompanyInfo = () => {
  return (
    <Box>
      <Box
        component="img"
        src="/images/logo/logo2.png"
        alt="logo"
        width={150}
        sx={{ mb: 4 }}
      />

      <Typography
        variant="body2"
        sx={{
          color: "rgba(255,255,255,0.7)",
          mb: 2,
          fontSize: "0.875rem",
          lineHeight: 1.8,
        }}
      >
        The probability of someone needing your services or wantin Lorem ipsum
        dolor sit amet.
      </Typography>

      <Typography
        variant="body2"
        sx={{
          color: "rgba(255,255,255,0.7)",
          mb: 3,
          fontSize: "0.875rem",
          lineHeight: 1.8,
        }}
      >
        Phasellus porta lorem id nisl mattis, in sollicitudin augue scelerisque.
      </Typography>

      <Box sx={{ display: "flex", gap: 1 }}>
        <IconButton
          size="small"
          sx={{
            color: "white",
            bgcolor: "rgba(255,255,255,0.1)",
            "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
          }}
        >
          <FacebookIcon fontSize="small" />
        </IconButton>
        <IconButton
          size="small"
          sx={{
            color: "white",
            bgcolor: "rgba(255,255,255,0.1)",
            "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
          }}
        >
          <InstagramIcon fontSize="small" />
        </IconButton>
        <IconButton
          size="small"
          sx={{
            color: "white",
            bgcolor: "rgba(255,255,255,0.1)",
            "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
          }}
        >
          <TiSocialSkype />
        </IconButton>
        <IconButton
          size="small"
          sx={{
            color: "white",
            bgcolor: "rgba(255,255,255,0.1)",
            "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
          }}
        >
          <TwitterIcon fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default CompanyInfo;
