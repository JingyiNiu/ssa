import { Box } from "@mui/material";
import { Suspense } from "react";
import { PopularCategories } from "@/app/components/layout/popular-categories/PopularCategories";
import { ProductList } from "@/app/components/layout/product-list/ProductList";
import FindADealer from "@/app/components/layout/find-a-dealer/FindADealer";
import { BrandHero } from "./BrandHero";
import { SearchBrands } from "./SearchBrands";
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
  return allProducts.filter((product) => product.category === "accessory");
}
const page = () => {
  return (
    <Box>
      <Suspense fallback={<Box sx={{ height: 600 }} />}>
        <BrandHero />
      </Suspense>
      {/* <PopularCategories /> */}
      <Suspense fallback={<Box sx={{ height: 200 }} />}>
        <SearchBrands />
      </Suspense>
      {/* <ProductList /> */}
      <FindADealer />
    </Box>
  );
};

export default page;
