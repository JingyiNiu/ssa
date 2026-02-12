import { cookies } from "next/headers";
import { Box } from "@mui/material";
import { Suspense } from "react";
import FindADealer from "@/app/components/layout/find-a-dealer/FindADealer";
import { WheelsHero } from "./WheelsHero";
import { SearchWheels } from "./SearchWheels";
import { allProducts } from "@/app/components/layout/product-list/mock-product";
import { getProductsAuto } from "@/app/lib/api";
import { PopularCategories } from "@/app/components/layout/popular-categories/PopularCategories";
import { ProductList } from "@/app/components/layout/product-list/ProductList";
import { ProductsProvider } from "@/app/(routes)/(home)/components/ProductsProvider";

async function fetchProducts() {
  try {
    // 🔐 从 cookie 读取 token（服务端）
    const cookieStore = await cookies();
    const token = cookieStore.get('auth-token')?.value || null;

    console.log('[WheelPage] Fetching products with token:', token ? 'Yes (logged in)' : 'No (public)');

    // 🌐 根据 token 调用对应的 API
    const products = await getProductsAuto(token, { 
      per_page: 50 
    });
    
    console.log('[WheelPage] Successfully fetched products', products);
    return { products, token };
  } catch (error) {
    console.error('[WheelPage] Failed to fetch products:', error);
    // 失败时返回模拟数据
    return { products: allProducts, token: null };
  }
}

const WheelPage = async () => {
  // 在 Server Component 中调用 API 获取产品数据
  const { products: initialProducts, token: serverToken } = await fetchProducts();

  return (
    <ProductsProvider initialProducts={initialProducts} serverToken={serverToken}>
      <Suspense fallback={<Box sx={{ height: 500 }} />}>
        <WheelsHero />
      </Suspense>
      <PopularCategories />
      <Suspense fallback={<Box sx={{ height: 200 }} />}>
        <SearchWheels />
      </Suspense>
      <ProductList />
      <FindADealer />
    </ProductsProvider>
  );
};

export default WheelPage;
