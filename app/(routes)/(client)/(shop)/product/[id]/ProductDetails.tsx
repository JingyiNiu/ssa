"use client";

import { Box } from "@mui/material";
import { ProductDetails as ProductDetailsType } from "./product";
import ProductImageGallery from "./ProductImageGallery";
import ProductInfo from "./ProductInfo";
import ProductTabs from "./ProductTabs";

interface ProductDetailsProps {
  product: ProductDetailsType;
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  // 优先使用 images 数组，如果没有则使用 image 字段
  const productImages =
    product.images && product.images.length > 0
      ? product.images
      : [product.image];

  return (
    <Box className="container mx-auto py-8 px-4">
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 4,
        }}
      >
        {/* 左侧 - 图片展示区 */}
        <ProductImageGallery
          images={productImages}
          productName={product.name}
        />

        {/* 右侧 - 产品信息区 */}
        <ProductInfo product={product} />
      </Box>

      {/* 产品详情 Tabs */}
      <ProductTabs product={product} />
    </Box>
  );
};

export default ProductDetails;
