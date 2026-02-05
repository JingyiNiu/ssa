import { Box, Tooltip } from "@mui/material";
import { Partner } from "./partner";

interface PartnerLogoProps {
  partner: Partner;
}

export const PartnerLogo = ({ partner }: PartnerLogoProps) => {
  return (
    <Tooltip title={partner.name} arrow placement="top">
      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: 60,
          cursor: "pointer",
          transition: "all 0.3s ease",
          overflow: "hidden",
          "&:hover::before": {
            content: '""',
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "100%",
            height: "100%",
            backgroundImage: `url(${partner.logo})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            transform: "translate(-50%, -50%)",
            animation: "ripple 1s ease-out",
            pointerEvents: "none",
          },
          "@keyframes ripple": {
            "0%": {
              transform: "translate(-50%, -50%) scale(1)",
              opacity: 0.6,
            },
            "100%": {
              transform: "translate(-50%, -50%) scale(1.5)",
              opacity: 0,
            },
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
            zIndex: 1,
            position: "relative",
          }}
        />
      </Box>
    </Tooltip>
  );
};
