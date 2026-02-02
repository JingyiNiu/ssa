import { Box } from "@mui/material";
import { Partner } from "./partner";
import { PartnerLogo } from "./PartnetLogo";

export const PartnerLogosSection = () => {
  const partners: Partner[] = [
    {
      id: 1,
      name: "Bean Shop",
      logo: "/images/pics/image-placeholder.png",
    },
    {
      id: 2,
      name: "Appgames",
      logo: "/images/pics/image-placeholder.png",
    },
    {
      id: 3,
      name: "Oak Bark",
      logo: "/images/pics/image-placeholder.png",
    },
    {
      id: 4,
      name: "Mi Casa Es Tu Casa",
      logo: "/images/pics/image-placeholder.png",
    },
    {
      id: 5,
      name: "Scandinavia",
      logo: "/images/pics/image-placeholder.png",
    },
    {
      id: 6,
      name: "Lady & Daly",
      logo: "/images/pics/image-placeholder.png",
    },
  ];

  return (
    <Box data-testid="partner-logos-section" sx={{ mb: 4 }}>
      <Box className="container mx-auto">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: 4,
            alignItems: "center",
          }}
        >
          {partners.map((partner) => (
            <PartnerLogo key={partner.id} partner={partner} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
