import { Box } from "@mui/material";
import { Suspense } from "react";
import FindADealer from "@/app/components/layout/find-a-dealer/FindADealer";
import { WheelsHero } from "./WheelsHero";
import { SearchWheels } from "./SearchWheels";
import { allProducts } from "@/app/components/layout/product-list/mock-product";
import { WCProduct } from "@/app/components/layout/product-list/wc-product";
import { PublicProduct } from "@/app/components/layout/product-list/public-product";

// 模拟 API 调用获取产品数据
async function fetchProducts(): Promise<(WCProduct | PublicProduct)[]> {
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

const WheelPage = async () => {
  // 在 Server Component 中调用 API 获取产品数据
  const products = await fetchProducts();

  return (
    <Box>
      <Suspense fallback={<Box sx={{ height: 500 }} />}>
        <WheelsHero />
      </Suspense>
      {/* <PopularCategories products={products} /> */}
      <Suspense fallback={<Box sx={{ height: 200 }} />}>
        <SearchWheels />
      </Suspense>
      {/* <ProductList products={products} /> */}
      <FindADealer />
    </Box>
  );
};

export default WheelPage;
