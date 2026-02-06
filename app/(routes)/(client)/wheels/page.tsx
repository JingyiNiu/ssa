import { Box } from "@mui/material";
import { HeroSection } from "./components/HeroSection";
import { PopularCategories } from "@/app/components/layout/popular-categories/PopularCategories";
import { ProductList } from "@/app/components/layout/product-list/ProductList";
import FindADealer from "@/app/components/find-a-dealer/FindADealer";
import { SearchSection } from "./components/SearchSection";

const WheelPage = () => {
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

export default WheelPage;
