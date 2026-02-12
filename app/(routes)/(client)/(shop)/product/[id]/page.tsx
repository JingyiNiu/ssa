import FindADealer from "@/app/components/layout/find-a-dealer/FindADealer";
import { Box } from "@mui/material";
import ProductHero from "./ProductHero";
import ProductDetails from "./ProductDetails";
import { ProductDetails as ProductDetailsType } from "./product";
import {
  allProducts,
  brands,
} from "@/app/components/layout/product-list/mock-product";
import { WCProduct } from "@/app/components/layout/product-list/wc-product";
import { PublicProduct } from "@/app/components/layout/product-list/public-product";
import { cookies } from "next/headers";
import { getProductsAuto } from "@/app/lib/api";

type ProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

// TODO: 后端完成后替换为真实的 API 调用
async function fetchProductById(id: string) {
  try {
    // 🔐 从 cookie 读取 token（服务端）
    const cookieStore = await cookies();
    const token = cookieStore.get("auth-token")?.value || null;

    console.log(
      "[TyresPage] Fetching products with token:",
      token ? "Yes (logged in)" : "No (public)"
    );

    // 🌐 根据 token 调用对应的 API
    const products = await getProductsAuto(token, {
      per_page: 50,
      slug: id,
    });

    console.log("✅ Server: 成功获取产品", products);
    return { products, token };
  } catch (error) {
    console.error("[TyresPage] Failed to fetch products:", error);
    // 失败时返回模拟数据
    return { products: allProducts, token: null };
  }
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const { id } = await params;

  // 在 Server Component 中调用 API 获取产品数据
  const product = await fetchProductById(id);

  return (
    <Box data-testid="product-page">
      <ProductHero />
      <ProductDetails product={product.products[0]} />
      <FindADealer />
    </Box>
  );
};

export default ProductPage;
