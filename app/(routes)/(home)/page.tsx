import { cookies } from "next/headers";
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
    // 🔐 从 cookie 读取 token（服务端）
    const cookieStore = await cookies();
    const token = cookieStore.get("auth-token")?.value || null;

    console.log(
      "[HomePage] Fetching products with token:",
      token ? "Yes (logged in)" : "No (public)"
    );

    // 🌐 根据 token 调用对应的 API
    const products = await getProductsAuto(token, {
      per_page: 50,
    });

    console.log("[HomePage] Successfully fetched products", products);
    return { products, token };
  } catch (error) {
    console.error("[HomePage] Failed to fetch products:", error);
    // 失败时返回模拟数据
    return { products: allProducts, token: null };
  }
}

const HomePage = async () => {
  console.log("API URL:", process.env.NEXT_PUBLIC_API_URL);
  // 🎯 服务端预加载产品（SEO 友好）
  const { products: initialProducts, token: serverToken } =
    await fetchProducts();

  return (
    <ProductsProvider
      initialProducts={initialProducts}
      serverToken={serverToken}
    >
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
