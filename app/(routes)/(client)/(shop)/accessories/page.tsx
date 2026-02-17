import { cookies } from "next/headers";
import { PopularCategories } from "@/app/components/layout/popular-categories/PopularCategories";
import { ProductList } from "@/app/components/layout/product-list/ProductList";
import FindADealer from "@/app/components/layout/find-a-dealer/FindADealer";
import { AccessoriesHero } from "./AccessoriesHero";
import { allProducts } from "@/app/components/layout/product-list/mock-product";
import { getProductsAuto } from "@/app/lib/api";
import { ProductsProvider } from "@/app/(routes)/(home)/components/ProductsProvider";
import { ProductSearch } from "@/app/components/common/ProductSearch";

async function fetchProducts() {
  try {
    // 🔐 从 cookie 读取 token（服务端）
    const cookieStore = await cookies();
    const token = cookieStore.get("auth-token")?.value || null;

    console.log(
      "[AccessoriesPage] Fetching products with token:",
      token ? "Yes (logged in)" : "No (public)"
    );

    // 🌐 根据 token 调用对应的 API
    const products = await getProductsAuto(token, {
      per_page: 50,
    });

    console.log("✅ Server: 成功获取产品", products);
    return { products, token };
  } catch (error) {
    console.error("[AccessoriesPage] Failed to fetch products:", error);
    // 失败时返回模拟数据
    return { products: allProducts, token: null };
  }
}

const AccessoriesPage = async () => {
  const { products: initialProducts, token: serverToken } =
    await fetchProducts();

  return (
    <ProductsProvider
      initialProducts={initialProducts}
      serverToken={serverToken}
    >
      <AccessoriesHero />
      <PopularCategories />
      <ProductSearch type="accessories" />
      <ProductList />
      <FindADealer />
    </ProductsProvider>
  );
};

export default AccessoriesPage;
