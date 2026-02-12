import { HeroSection } from "./components/hero-section/HeroSection";
import { SearchSection } from "./components/search-section/SearchSection";
import { PromoBannersSection } from "./components/promotion-banner/PromoBannersSection";
import { PartnerLogosSection } from "./components/partner-logos/PartnerLogosSection";
import { ValuePropositionSection } from "./components/value-proposition/ValuePropositionSection";
import { ShopByBrandsSection } from "./components/shop-by-brands/ShopByBrandsSection";
import FindADealer from "@/app/components/layout/find-a-dealer/FindADealer";
import { getProductsAuto } from "@/app/lib/api";
import { ProductsProvider } from "./components/ProductsProvider";
import { allProducts } from "@/app/components/layout/product-list/mock-product";
import { PopularCategories } from "@/app/components/layout/popular-categories/PopularCategories";
import { ProductHighlightsSection } from "./components/product-highlights/ProductHighlightsSection";

async function fetchProducts() {
  try {
    // 🌐 Server Component 使用公开 API（传 null）
    const products = await getProductsAuto(null, {
      per_page: 50,
    });

    console.log("[HomePage] Successfully fetched products", products);
    return products;
  } catch (error) {
    // 失败时返回模拟数据
    return allProducts;
  }
}

const HomePage = async () => {
  // 🎯 服务端预加载产品（SEO 友好）
  const initialProducts = await fetchProducts();

  return (
    <ProductsProvider initialProducts={initialProducts}>
      <HeroSection />
      <SearchSection />
      <PopularCategories />
      <PromoBannersSection />
      <PartnerLogosSection />
      <ValuePropositionSection />
      <ShopByBrandsSection />
      <ProductHighlightsSection />
      <FindADealer />
    </ProductsProvider>
  );
};

export default HomePage;
