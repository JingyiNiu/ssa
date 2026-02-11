import FindADealer from "@/app/components/layout/find-a-dealer/FindADealer";
import { Box } from "@mui/material";
import ProductHero from "./ProductHero";
import ProductDetails from "./ProductDetails";
import { ProductDetails as ProductDetailsType } from "./product";
import { allProducts, brands } from "@/app/components/layout/product-list/mock-product";
import { WCProduct } from "@/app/components/layout/product-list/wc-product";
import { PublicProduct } from "@/app/components/layout/product-list/public-product";

type ProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

// TODO: 后端完成后替换为真实的 API 调用
async function fetchProductById(id: string): Promise<WCProduct | PublicProduct> {
  // 预留 API 调用接口
  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${id}`);
  // if (!response.ok) {
  //   throw new Error('Failed to fetch product');
  // }
  // const data: Product = await response.json();
  // return data;

  // 临时模拟数据
  return allProducts[0];
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const { id } = await params;

  // 在 Server Component 中调用 API 获取产品数据
  const product = await fetchProductById(id);

  return (
    <Box data-testid="product-page">
      <ProductHero />
      <ProductDetails product={product} />
      <FindADealer />
    </Box>
  );
};

export default ProductPage;
