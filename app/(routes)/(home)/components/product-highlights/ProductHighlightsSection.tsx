"use client";

import { Box } from "@mui/material";
import { DealOfTheDay } from "./DealOfTheDay";
import { BestSellers } from "./BestSellers";
import { useProducts } from "../ProductsProvider";
import { isProductOnSale } from "@/app/lib/api";

export const ProductHighlightsSection = () => {
  const { products } = useProducts();

  // Deal of the Day - 选择有折扣的产品
  const dealOfTheDayProducts = products.filter((p: any) => isProductOnSale(p));

  // Best Sellers - 前 18 个产品
  const bestSellersProducts = products.slice(0, 18);

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
