import { Box } from "@mui/material";
import { Partner } from "./partner";
import { PartnerLogo } from "./PartnetLogo";
import SectionTitle from "@/app/components/ui/SectionTitle";

export const PartnerLogosSection = () => {
  const partners: Partner[] = [
    {
      id: 1,
      name: "Company 1",
      logo: "/images/logo/logo2.png",
    },
    {
      id: 2,
      name: "Company 2",
      logo: "/images/logo/logo3.png",
    },
    {
      id: 3,
      name: "Company 3",
      logo: "/images/logo/logo2.png",
    },
    {
      id: 4,
      name: "Company 4",
      logo: "/images/logo/logo3.png",
    },
    {
      id: 5,
      name: "Company 5",
      logo: "/images/logo/logo2.png",
    },
    {
      id: 6,
      name: "Company 6",
      logo: "/images/logo/logo3.png",
    },
  ];

  return (
    <Box data-testid="partner-logos-section" sx={{ mb: 4, overflow: "hidden" }}>
      <Box className="container mx-auto">
        <SectionTitle title="Our Partners" />
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(6, 1fr)",
            },
            gap: { xs: 2, md: 3, lg: 4 },
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
};
