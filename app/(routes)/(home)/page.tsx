import { Box } from "@mui/material";
import { HeroSection } from "./components/hero-section/HeroSection";
import { SearchSection } from "./components/search-section/SearchSection";
import { PopularCategories } from "../../components/layout/popular-categories/PopularCategories";
import { PromoBannersSection } from "./components/promotion-banner/PromoBannersSection";
import { PartnerLogosSection } from "./components/partner-logos/PartnerLogosSection";
import { ValuePropositionSection } from "./components/value-proposition/ValuePropositionSection";
import { ShopByBrandsSection } from "./components/shop-by-brands/ShopByBrandsSection";
import { ProductHighlightsSection } from "./components/product-highlights/ProductHighlightsSection";
import FindADealer from "@/app/components/find-a-dealer/FindADealer";

const Home = () => {
  return (
    <Box>
      <HeroSection />
      <SearchSection />
      <PopularCategories />
      <PromoBannersSection />
      <PartnerLogosSection />
      <ValuePropositionSection />
      <ShopByBrandsSection />
      <ProductHighlightsSection />
      <FindADealer />
    </Box>
  );
};

export default Home;
