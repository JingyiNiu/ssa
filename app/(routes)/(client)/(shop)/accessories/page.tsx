import { Box } from "@mui/material";
import React, { Suspense } from "react";
import { PopularCategories } from "@/app/components/layout/popular-categories/PopularCategories";
import { ProductList } from "@/app/components/layout/product-list/ProductList";
import FindADealer from "@/app/components/layout/find-a-dealer/FindADealer";
import { AccessoriesHero } from "./AccessoriesHero";
import { SearchAccessories } from "./SearchAccessories";
import { allProducts } from "@/app/components/layout/product-list/mock-product";
import { getProductsAuto } from "@/app/lib/api";

async function fetchProducts() {
  try {
    // 🌐 Server Component 使用公开 API（传 null）
    const products = await getProductsAuto(null, {
      per_page: 50,
    });

    console.log("✅ Server: 成功获取产品", products);
    return products;
  } catch (error) {
    // 失败时返回模拟数据
    return allProducts;
  }
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
