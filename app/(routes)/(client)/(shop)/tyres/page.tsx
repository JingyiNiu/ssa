import { Box } from "@mui/material";
import { TyresHero } from "./TyresHero";
import { PopularCategories } from "@/app/components/layout/popular-categories/PopularCategories";
import { SearchTyres } from "./SearchTyres";
import { ProductList } from "@/app/components/layout/product-list/ProductList";
import FindADealer from "@/app/components/layout/find-a-dealer/FindADealer";

const TyresPage = () => {
  return (
    <Box>
      <TyresHero />
      <PopularCategories />
      <SearchTyres />
      <ProductList />
      <FindADealer />
    </Box>
  );
};

export default TyresPage;
