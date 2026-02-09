import { Placeholder } from "@/app/components/layout/placeholder/Placeholder";
import { Box } from "@mui/material";
import React, { Suspense } from "react";
import { PopularCategories } from "@/app/components/layout/popular-categories/PopularCategories";
import { ProductList } from "@/app/components/layout/product-list/ProductList";
import FindADealer from "@/app/components/layout/find-a-dealer/FindADealer";
import { AccessoriesHero } from "./AccessoriesHero";
import { SearchAccessories } from "./SearchAccessories";
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

const AccessoriesPage = async () => {
  const products = await fetchProducts();

  return (
    <Box>
      <AccessoriesHero />
      <PopularCategories products={products} />
      <Suspense fallback={<Box sx={{ height: 200 }} />}>
        <SearchAccessories />
      </Suspense>
      <ProductList products={products} />
      <FindADealer />
    </Box>
  );
};

export default AccessoriesPage;
