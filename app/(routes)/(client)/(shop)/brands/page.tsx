import { Box } from "@mui/material";
import { Suspense } from "react";
import { PopularCategories } from "@/app/components/layout/popular-categories/PopularCategories";
import { ProductList } from "@/app/components/layout/product-list/ProductList";
import FindADealer from "@/app/components/layout/find-a-dealer/FindADealer";
import { BrandHero } from "./BrandHero";
import { SearchBrands } from "./SearchBrands";

const page = () => {
  return (
    <Box>
      <Suspense fallback={<Box sx={{ height: 600 }} />}>
        <BrandHero />
      </Suspense>
      <PopularCategories />
      <Suspense fallback={<Box sx={{ height: 200 }} />}>
        <SearchBrands />
      </Suspense>
      <ProductList />
      <FindADealer />
    </Box>
  );
};

export default page;
