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
import { BrandList } from "./BrandList";

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
  return allProducts;
}

// 从每个分类中取出指定数量的产品
function getProductsByCategory(products: Product[], countPerCategory: number = 3): Product[] {
  const categories = ['wheel', 'tyre', 'accessory'] as const;
  const selectedProducts: Product[] = [];

  categories.forEach(category => {
    const categoryProducts = products
      .filter(product => product.category === category)
      .slice(0, countPerCategory);
    selectedProducts.push(...categoryProducts);
  });

  return selectedProducts;
}

const page = async () => {
  const allProductsList = await fetchProducts();
  // 每个分类取3个产品
  const products = getProductsByCategory(allProductsList, 3);
  
  return (
    <Box>
      <Suspense fallback={<Box sx={{ height: { xs: 700, sm: 600 } }} />}>
        <BrandHero />
      </Suspense>
      <PopularCategories products={products} />
      <SearchBrands />
      <ProductList products={products} />
      <FindADealer />
    </Box>
  );
};

export default page;
