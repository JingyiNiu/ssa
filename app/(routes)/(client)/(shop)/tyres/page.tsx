import { cookies } from "next/headers";
import { Box } from "@mui/material";
import { Suspense } from "react";
import { SearchTyres } from "./SearchTyres";
import FindADealer from "@/app/components/layout/find-a-dealer/FindADealer";
import {
  allProducts,
} from "@/app/components/layout/product-list/mock-product";
import { TyresHeroWithBrand } from "./TyresHeroWithBrand";
import { getProductsAuto } from "@/app/lib/api";
import { PopularCategories } from "@/app/components/layout/popular-categories/PopularCategories";
import { ProductList } from "@/app/components/layout/product-list/ProductList";
import { ProductsProvider } from "@/app/(routes)/(home)/components/ProductsProvider";

async function fetchProducts() {
  try {
    // 🔐 从 cookie 读取 token（服务端）
    const cookieStore = await cookies();
    const token = cookieStore.get('auth-token')?.value || null;

    console.log('[TyresPage] Fetching products with token:', token ? 'Yes (logged in)' : 'No (public)');

    // 🌐 根据 token 调用对应的 API
    const products = await getProductsAuto(token, {
      per_page: 50,
    });

    console.log("✅ Server: 成功获取产品", products);
    return { products, token };
  } catch (error) {
    console.error('[TyresPage] Failed to fetch products:', error);
    // 失败时返回模拟数据
    return { products: allProducts, token: null };
  }
}

const TyresPage = async () => {
  const { products: initialProducts, token: serverToken } = await fetchProducts();

  return (
    <ProductsProvider initialProducts={initialProducts} serverToken={serverToken}>
      <Suspense fallback={<Box sx={{ height: { xs: 700, sm: 600 } }} />}>
        <TyresHeroWithBrand />
      </Suspense>
      <PopularCategories />
      <SearchTyres />
      <ProductList />
      <FindADealer />
    </ProductsProvider>
  );
};

export default TyresPage;
