import { Placeholder } from "@/app/components/layout/placeholder/Placeholder";
import { Box } from "@mui/material";
import { Suspense } from "react";
import { HeroSection } from "./HeroSection";
import { PopularCategories } from "@/app/components/layout/popular-categories/PopularCategories";
import { SearchSection } from "./SearchSection";
import { ProductList } from "@/app/components/layout/product-list/ProductList";
import FindADealer from "@/app/components/find-a-dealer/FindADealer";

const page = () => {
  return (
    <Box>
      <Suspense fallback={<Box sx={{ height: 600 }} />}>
        <HeroSection />
      </Suspense>
      <PopularCategories />
      <Suspense fallback={<Box sx={{ height: 200 }} />}>
        <SearchSection />
      </Suspense>
      <ProductList />
      <FindADealer />
    </Box>
  );
};

export default page;
