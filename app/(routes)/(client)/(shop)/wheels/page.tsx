import { Box } from "@mui/material";
import { Suspense } from "react";
import FindADealer from "@/app/components/layout/find-a-dealer/FindADealer";
import { WheelsHero } from "./WheelsHero";
import { SearchWheels } from "./SearchWheels";
import { allProducts } from "@/app/components/layout/product-list/mock-product";
import { getProductsAuto } from "@/app/lib/api";
import { PopularCategories } from "@/app/components/layout/popular-categories/PopularCategories";
import { ProductList } from "@/app/components/layout/product-list/ProductList";

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

const WheelPage = async () => {
  // 在 Server Component 中调用 API 获取产品数据
  const products = await fetchProducts();

  return (
    <Box>
      <Suspense fallback={<Box sx={{ height: 500 }} />}>
        <WheelsHero />
      </Suspense>
      <PopularCategories products={products} />
      <Suspense fallback={<Box sx={{ height: 200 }} />}>
        <SearchWheels />
      </Suspense>
      <ProductList products={products} />
      <FindADealer />
    </Box>
  );
};

export default WheelPage;
