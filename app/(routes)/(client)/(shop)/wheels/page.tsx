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
    // 🌐 Server Component 使用公开 API（传 null）
    const products = await getProductsAuto(null, { 
      per_page: 50 
    });
    
    console.log('[WheelPage] Successfully fetched products', products);
    return products;
  } catch (error) {
    // 失败时返回模拟数据
    return allProducts;
  }
}

const WheelPage = async () => {
  // 在 Server Component 中调用 API 获取产品数据
  const initialProducts = await fetchProducts();

  return (
    <ProductsProvider initialProducts={initialProducts}>
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
