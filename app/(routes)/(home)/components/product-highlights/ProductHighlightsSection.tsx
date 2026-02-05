import { Box } from "@mui/material";
import { DealOfTheDay } from "./DealOfTheDay";
import { BestSellers } from "./BestSellers";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export const ProductHighlightsSection = () => {
  return (
    <Box sx={{ mb: 10 }} data-testid="product-highlights-section">
      <Box className="container mx-auto">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "400px 1fr" },
            gap: 4,
          }}
        >
          <DealOfTheDay />
          <BestSellers />
        </Box>
      </Box>
    </Box>
  );
};
