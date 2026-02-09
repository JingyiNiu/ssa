import { Box } from "@mui/material";
import { Suspense } from "react";
import { TyresHero } from "./TyresHero";
import { PopularCategories } from "@/app/components/layout/popular-categories/PopularCategories";
import { SearchTyres } from "./SearchTyres";
import { ProductList } from "@/app/components/layout/product-list/ProductList";
import FindADealer from "@/app/components/layout/find-a-dealer/FindADealer";
import { allProducts, Product } from "@/app/components/layout/product-list/product";
import { TyresHeroWithBrand } from "./TyresHeroWithBrand";

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
  return allProducts.filter((product) => product.category === "tyre");
}

const TyresPage = async () => {
  const products = await fetchProducts();

  return (
    <Box>
      <Suspense fallback={<Box sx={{ height: { xs: 700, sm: 600 } }} />}>
        <TyresHeroWithBrand />
      </Suspense>
      <PopularCategories products={products} />
      <SearchTyres />
      <ProductList products={products} />
      <FindADealer />
    </Box>
  );
};

export default TyresPage;
