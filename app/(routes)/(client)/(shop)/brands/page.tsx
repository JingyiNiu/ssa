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
} from "@/app/components/layout/product-list/mock-product";
import { BrandList } from "./BrandList";
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

const page = async () => {
  const products = await fetchProducts();

  return (
    <Box>
      <Suspense fallback={<Box sx={{ height: { xs: 700, sm: 600 } }} />}>
        <BrandHero />
      </Suspense>
      {/* <PopularCategories products={products} /> */}
      <SearchBrands />
      {/* <ProductList products={products} /> */}
      <FindADealer />
    </Box>
  );
};

export default page;
