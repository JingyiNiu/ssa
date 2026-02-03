import { Box, Link } from "@mui/material";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";

const socialIcons = [
  { icon: <FaFacebookF size={16} />, href: "#" },
  { icon: <FaInstagram size={16} />, href: "#" },
  { icon: <IoLogoWhatsapp size={16} />, href: "#" },
  { icon: <FaTwitter size={16} />, href: "#" },
];

const SocialIcons = () => {
  return (
    <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
      {socialIcons.map((social, index) => (
        <Link
          key={index}
          href={social.href}
          sx={{
            color: "#fff",
            display: "flex",
            alignItems: "center",
            "&:hover": {
              opacity: 0.8,
            },
          }}
        >
          {social.icon}
        </Link>
      ))}
    </Box>
  );
};

export default SocialIcons;
