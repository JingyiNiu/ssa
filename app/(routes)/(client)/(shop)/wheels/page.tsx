import { Box } from "@mui/material";
import { Suspense } from "react";
import { PopularCategories } from "@/app/components/layout/popular-categories/PopularCategories";
import { ProductList } from "@/app/components/layout/product-list/ProductList";
import FindADealer from "@/app/components/layout/find-a-dealer/FindADealer";
import { WheelsHero } from "./WheelsHero";
import { SearchWheels } from "./SearchWheels";

const WheelPage = () => {
  return (
    <Box>
      <Suspense fallback={<Box sx={{ height: 500 }} />}>
        <WheelsHero />
      </Suspense>
      <PopularCategories />
      <Suspense fallback={<Box sx={{ height: 200 }} />}>
        <SearchWheels />
      </Suspense>
      <ProductList />
      <FindADealer />
    </Box>
  );
};

export default WheelPage;
