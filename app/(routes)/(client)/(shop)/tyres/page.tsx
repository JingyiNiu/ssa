import { Box } from "@mui/material";
import { Suspense } from "react";
import { SearchTyres } from "./SearchTyres";
import FindADealer from "@/app/components/layout/find-a-dealer/FindADealer";
import {
  allProducts,
  Product,
} from "@/app/components/layout/product-list/mock-product";
import { TyresHeroWithBrand } from "./TyresHeroWithBrand";
import { getProductsAuto } from "@/app/lib/api";
import { PopularCategories } from "@/app/components/layout/popular-categories/PopularCategories";
import { ProductList } from "@/app/components/layout/product-list/ProductList";
import { ProductsProvider } from "@/app/(routes)/(home)/components/ProductsProvider";

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

const TyresPage = async () => {
  const initialProducts = await fetchProducts();

  return (
    <ProductsProvider initialProducts={initialProducts}>
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
