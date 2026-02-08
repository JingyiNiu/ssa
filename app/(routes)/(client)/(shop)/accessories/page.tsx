import { Placeholder } from "@/app/components/layout/placeholder/Placeholder";
import { Box } from "@mui/material";
import React, { Suspense } from "react";
import { PopularCategories } from "@/app/components/layout/popular-categories/PopularCategories";
import { ProductList } from "@/app/components/layout/product-list/ProductList";
import FindADealer from "@/app/components/layout/find-a-dealer/FindADealer";
import { AccessoriesHero } from "./AccessoriesHero";
import { SearchAccessories } from "./SearchAccessories";

const AccessoriesPage = () => {
  return (
    <Box>
      <AccessoriesHero />
      <PopularCategories />
      <Suspense fallback={<Box sx={{ height: 200 }} />}>
        <SearchAccessories />
      </Suspense>
      <ProductList />
      <FindADealer />
    </Box>
  );
};

export default AccessoriesPage;
