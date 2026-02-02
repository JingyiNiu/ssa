import { Box } from "@mui/material";
import { HeroSection } from "./components/hero-banner-section/HeroSection";
import { SearchSection } from "./components/search-section/SearchSection";
import { PopularCategories } from "./components/popular-categories/PopularCategories";
import { PromoBannersSection } from "./components/promotion-banner/PromoBannersSection";
import { PartnerLogosSection } from "./components/partner-logos/PartnerLogosSection";
import { ValuePropositionSection } from "./components/value-proposition/ValuePropositionSection";
import { ShopByBrandsSection } from "./components/shop-by-brands/ShopByBrandsSection";
import { ProductHighlightsSection } from "./components/product-highlights/ProductHighlightsSection";
import { LatestBlogPostsSection } from "./components/blog-post/LatestBlogPostsSection";

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
