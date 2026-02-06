import { Placeholder } from "@/app/components/layout/placeholder/Placeholder";
import { Box } from "@mui/material";
import React from "react";
import { HeroSection } from "./components/HeroSection";
import { PopularCategories } from "@/app/components/layout/popular-categories/PopularCategories";
import { ProductList } from "@/app/components/layout/product-list/ProductList";
import FindADealer from "@/app/components/find-a-dealer/FindADealer";

const WheelPage = () => {
  return (
    <Box>
      <HeroSection />
      <PopularCategories />
      <ProductList />
      <FindADealer />
    </Box>
  );
};

export default WheelPage;
