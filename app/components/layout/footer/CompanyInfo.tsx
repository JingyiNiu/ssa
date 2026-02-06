import { Box, Typography, IconButton, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { TiSocialSkype } from "react-icons/ti";
import { socialIcons } from "../nav/SocialIcons";

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
        Lorem ipsum dolor sit amet.
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

      <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
        {socialIcons.map((social, index) => (
          <Link
            key={index}
            href={social.href}
            sx={{
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              "&:hover": {
                opacity: 0.8,
                backgroundColor: "rgba(255,255,255,0.1)",
              },
            }}
          >
            {social.icon}
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default CompanyInfo;
