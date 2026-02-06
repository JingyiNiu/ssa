import { Placeholder } from "@/app/components/layout/placeholder/Placeholder";
import { Box } from "@mui/material";
import { HeroSection } from "./HeroSection";
import { PopularCategories } from "@/app/components/layout/popular-categories/PopularCategories";
import { SearchSection } from "./SearchSection";
import { ProductList } from "@/app/components/layout/product-list/ProductList";
import FindADealer from "@/app/components/find-a-dealer/FindADealer";

const page = () => {
  return (
    <Box>
      <HeroSection />
      <PopularCategories />
      <SearchSection />
      <ProductList />
      <FindADealer />
    </Box>
  );
};

export default page;
