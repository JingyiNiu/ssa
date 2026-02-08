import { Box, Typography } from "@mui/material";
import { Product } from "@/app/components/layout/product-list/product";

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  return (
    <Box className="container mx-auto py-8">
      <Typography variant="h1">{product.name}</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        {product.description}
      </Typography>
      <Typography variant="h4" sx={{ mt: 2 }}>
        价格: ${product.price}
      </Typography>
      {product.originalPrice && (
        <Typography variant="body2" sx={{ textDecoration: "line-through" }}>
          原价: ${product.originalPrice}
        </Typography>
      )}
      {product.brand && (
        <Typography variant="body1" sx={{ mt: 2 }}>
          品牌: {product.brand.name}
        </Typography>
      )}
      {product.rating && (
        <Typography variant="body1" sx={{ mt: 1 }}>
          评分: {product.rating}/5
        </Typography>
      )}
      {product.stock && (
        <Typography variant="body1" sx={{ mt: 1 }}>
          库存: {product.stock.available} | 已售: {product.stock.sold}
        </Typography>
      )}
      {/* TODO: 根据后端返回的实际数据结构调整显示内容 */}
    </Box>
  );
};

export default ProductDetails;