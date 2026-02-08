import { Box } from "@mui/material";
import { Suspense } from "react";
import { HeroSection } from "./HeroSection";
import { PopularCategories } from "@/app/components/layout/popular-categories/PopularCategories";
import { ProductList } from "@/app/components/layout/product-list/ProductList";
import FindADealer from "@/app/components/find-a-dealer/FindADealer";
import { SearchSection } from "./SearchSection";

const WheelPage = () => {
  return (
    <Box>
      <Suspense fallback={<Box sx={{ height: 500 }} />}>
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

export default WheelPage;
