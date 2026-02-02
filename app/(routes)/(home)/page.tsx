import { Box } from "@mui/material";
import HeroSection from "./components/hero-banner-section/HeroSection";
import SearchSection from "./components/search-section/SearchSection";
import { PromoBannersSection } from "./components/main/PromoBannersSection";
import { ValuePropositionSection } from "./components/main/ValuePropositionSection";
import { ProductHighlightsSection } from "./components/main/ProductHighlightsSection";
import { LatestBlogPostsSection } from "./components/main/LatestBlogPostsSection";
import ShopByBrandsSection from "./components/shop-by-brands/ShopByBrandsSection";
import PartnerLogosSection from "./components/partner-logos/PartnerLogosSection";
import PopularCategories from "./components/popular-categories/PopularCategories";

export default function Home() {
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
      <LatestBlogPostsSection />
    </Box>
  );
}
