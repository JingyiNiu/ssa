import { Box } from "@mui/material";
import { HeroSection } from "./components/hero-section/HeroSection";
import { SearchSection } from "./components/search-section/SearchSection";
import { PromoBannersSection } from "./components/promotion-banner/PromoBannersSection";
import { PartnerLogosSection } from "./components/partner-logos/PartnerLogosSection";
import { ValuePropositionSection } from "./components/value-proposition/ValuePropositionSection";
import { ShopByBrandsSection } from "./components/shop-by-brands/ShopByBrandsSection";
import FindADealer from "@/app/components/layout/find-a-dealer/FindADealer";
import { getProductsAuto } from '@/app/lib/api';
import { ProductsProvider } from "./components/ProductsProvider";
import { HomeContent } from "./components/HomeContent";
import { allProducts } from "@/app/components/layout/product-list/mock-product";

/**
 * 从 API 获取产品数据（服务端预加载）
 * Server Component 只能获取公开价格
 * 如果用户已登录，ProductsProvider 会在客户端重新加载用户价格
 */
async function fetchProducts() {
  try {
    // 🌐 Server Component 使用公开 API（传 null）
    const products = await getProductsAuto(null, { 
      per_page: 50 
    });
    
    console.log('✅ Server: 成功获取产品', products);
    return products;
  } catch (error) {
    // 失败时返回模拟数据
    return allProducts;
  }
}

const Home = async () => {
  // 🎯 服务端预加载产品（SEO 友好）
  const initialProducts = await fetchProducts();

  return (
    <Box>
      {/* 不需要产品数据的部分 - 直接渲染 */}
      <HeroSection />
      <SearchSection />
      
      {/* 需要产品数据的部分 - 用 Provider 包装 */}
      <ProductsProvider initialProducts={initialProducts}>
        <HomeContent />
      </ProductsProvider>
      
      {/* 不需要产品数据的部分 - 直接渲染 */}
      <PromoBannersSection />
      <PartnerLogosSection />
      <ValuePropositionSection />
      <ShopByBrandsSection />
      <FindADealer />
    </Box>
  );
};

export default Home;
