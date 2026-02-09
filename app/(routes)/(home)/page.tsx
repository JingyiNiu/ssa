import { Box } from "@mui/material";
import { HeroSection } from "./components/hero-section/HeroSection";
import { SearchSection } from "./components/search-section/SearchSection";
import { PopularCategories } from "../../components/layout/popular-categories/PopularCategories";
import { PromoBannersSection } from "./components/promotion-banner/PromoBannersSection";
import { PartnerLogosSection } from "./components/partner-logos/PartnerLogosSection";
import { ValuePropositionSection } from "./components/value-proposition/ValuePropositionSection";
import { ShopByBrandsSection } from "./components/shop-by-brands/ShopByBrandsSection";
import { ProductHighlightsSection } from "./components/product-highlights/ProductHighlightsSection";
import FindADealer from "@/app/components/layout/find-a-dealer/FindADealer";
import {
  allProducts,
  Product,
} from "@/app/components/layout/product-list/product";

// 模拟 API 调用获取产品数据
async function fetchProducts(): Promise<Product[]> {
  // 预留 API 调用接口
  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);
  // if (!response.ok) {
  //   throw new Error('Failed to fetch products');
  // }
  // const data: Product[] = await response.json();
  // return data;

  // 临时返回模拟数据
  return allProducts;
}

const Home = async () => {
  // 在 Server Component 中调用 API 获取产品数据
  const products = await fetchProducts();

  // Deal of the Day - 选择有折扣的产品
  const dealOfTheDayProducts = products.filter((p) => p.originalPrice && p.originalPrice > p.price);

  // Best Sellers - 选择评分最高或销量最高的产品
  const bestSellersProducts = products
    .filter((p) => p.stock && p.stock.sold > 50) // 销量 > 50
    .sort((a, b) => (b.rating || 0) - (a.rating || 0)) // 按评分排序
    .slice(0, 18);

  return (
    <Box>
      <HeroSection />
      <SearchSection />
      <PopularCategories products={products} />
      <PromoBannersSection />
      <PartnerLogosSection />
      <ValuePropositionSection />
      <ShopByBrandsSection />
      <ProductHighlightsSection
        dealOfTheDayProducts={dealOfTheDayProducts}
        bestSellersProducts={bestSellersProducts}
      />
      <FindADealer />
    </Box>
  );
};

export default Home;
