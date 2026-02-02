import { Box } from "@mui/material";
import { Partner } from "./partner";

interface PartnerLogoProps {
  partner: Partner;
}

export const PartnerLogo = ({ partner }: PartnerLogoProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 60,
        cursor: "pointer",
        opacity: 0.6,
        filter: "grayscale(100%)",
        transition: "all 0.3s ease",
        "&:hover": {
          opacity: 1,
          filter: "grayscale(0%)",
        },
      }}
    >
      <Box
        component="img"
        src={partner.logo}
        alt={partner.name}
        sx={{
          maxWidth: "100%",
          maxHeight: "100%",
          objectFit: "contain",
        }}
      />
    </Box>
  );
}
