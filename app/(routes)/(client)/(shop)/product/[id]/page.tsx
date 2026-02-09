import FindADealer from "@/app/components/layout/find-a-dealer/FindADealer";
import { Box } from "@mui/material";
import ProductHero from "./ProductHero";
import ProductDetails from "./ProductDetails";
import { ProductDetails as ProductDetailsType } from "./product";
import { brands } from "@/app/components/layout/product-list/product";

type ProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

// TODO: 后端完成后替换为真实的 API 调用
async function fetchProductById(id: string): Promise<ProductDetailsType> {
  // 预留 API 调用接口
  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${id}`);
  // if (!response.ok) {
  //   throw new Error('Failed to fetch product');
  // }
  // const data: Product = await response.json();
  // return data;

  // 临时模拟数据
  return {
    id: "sample-product-demo-0000-0000-000000000000",
    category: "wheel",
    name: "Sample Product for demonstration",
    price: 289.0,
    originalPrice: 329.0,
    image: "/images/pics/product-1.jpg",
    brand: brands[0],
    stock: {
      available: 12,
      sold: 48,
    },
    description:
      "Premium alloy wheel designed for strength, reduced weight, and a modern performance look.",
    specifications:
      "Size: 18x8.5 | PCD: 5x114.3 | Offset: +35 | Finish: Matte Black",
    rating: 4.6,
    images: [
      "/images/pics/product-1.jpg",
      "/images/pics/product-2.jpg",
      "/images/pics/product-3.jpg",
    ],
    features: [
      "Factory original quality for less.",
      "Direct replacement.",
      "Installation is identical to factory unit.",
      "No vehicle modifications required.",
    ],
    reviews: [
      {
        id: "rev-sample-demo-0000-0000-111111111111",
        rating: 4.6,
        comment: "Great product!",
        createdAt: "2026-01-01",
      },
      {
        id: "rev-sample-demo-0000-0000-222222222222",
        rating: 4.5,
        comment: "Good product!",
        createdAt: "2026-01-02",
      },
    ],
  };
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
