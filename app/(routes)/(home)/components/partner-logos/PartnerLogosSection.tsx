import { Box } from "@mui/material";
import { Partner } from "./partner";
import { PartnerLogo } from "./PartnetLogo";

export const PartnerLogosSection = () => {
  const partners: Partner[] = [
    {
      id: 1,
      name: "Brand name",
      logo: "/images/pics/image-placeholder.png",
    },
    {
      id: 2,
      name: "Brand name",
      logo: "/images/pics/image-placeholder.png",
    },
    {
      id: 3,
      name: "Brand name",
      logo: "/images/pics/image-placeholder.png",
    },
    {
      id: 4,
      name: "Brand name",
      logo: "/images/pics/image-placeholder.png",
    },
    {
      id: 5,
      name: "Brand name",
      logo: "/images/pics/image-placeholder.png",
    },
    {
      id: 6,
      name: "Brand name",
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
