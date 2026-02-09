import { Box } from "@mui/material";
import { DealOfTheDay } from "./DealOfTheDay";
import { BestSellers } from "./BestSellers";
import { Product } from "@/app/components/layout/product-list/product";

interface ProductHighlightsSectionProps {
  dealOfTheDayProducts: Product[];
  bestSellersProducts: Product[];
}

export const ProductHighlightsSection = ({ dealOfTheDayProducts, bestSellersProducts }: ProductHighlightsSectionProps) => {
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
          <DealOfTheDay products={dealOfTheDayProducts} />
          <BestSellers products={bestSellersProducts} />
        </Box>
      </Box>
    </Box>
  );
};
