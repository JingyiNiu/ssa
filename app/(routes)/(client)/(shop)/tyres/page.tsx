import { Box } from "@mui/material";
import { Suspense } from "react";
import { SearchTyres } from "./SearchTyres";
import FindADealer from "@/app/components/layout/find-a-dealer/FindADealer";
import { allProducts, Product } from "@/app/components/layout/product-list/mock-product";
import { TyresHeroWithBrand } from "./TyresHeroWithBrand";
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
  return allProducts
}

const TyresPage = async () => {
  const products = await fetchProducts();

  return (
    <Box>
      <Suspense fallback={<Box sx={{ height: { xs: 700, sm: 600 } }} />}>
        <TyresHeroWithBrand />
      </Suspense>
      {/* <PopularCategories products={products} /> */}
      <SearchTyres />
      {/* <ProductList products={products} /> */}
      <FindADealer />
    </Box>
  );
};

export default TyresPage;
