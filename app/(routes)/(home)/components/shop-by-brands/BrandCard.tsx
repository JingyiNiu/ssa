import { Box, Typography, Card, Tooltip } from "@mui/material";
import { Brand } from "./brand";

interface BrandCardProps {
  brand: Brand;
}

export default function BrandCard({ brand }: BrandCardProps) {
  return (
    <Tooltip title={brand.name}>
      <Card
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: 120,
          cursor: "pointer",
          bgcolor: "white",
          borderRadius: 0,
          border: "1px solid #e0e0e0",
          boxShadow: "none",
          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            transform: "translateY(-4px)",
            borderColor: "#d0d0d0",
          },
        }}
        data-testid="brand-card"
      >
        <Box
          component="img"
          src={brand.logo}
          alt={brand.name}
          sx={{
            maxWidth: "70%",
            maxHeight: "60%",
            objectFit: "contain",
          }}
        />
      </Card>
    </Tooltip>
  );
}
