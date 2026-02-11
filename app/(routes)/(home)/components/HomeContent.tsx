'use client';

import { Box } from "@mui/material";
import { PopularCategories } from "../../../components/layout/popular-categories/PopularCategories";
import { ProductHighlightsSection } from "./product-highlights/ProductHighlightsSection";
import { useProducts } from "./ProductsProvider";
import { isProductOnSale } from "@/app/lib/api";

/**
 * 首页内容组件 - 使用产品数据
 * 从 ProductsProvider 获取数据
 */
export function HomeContent() {
  const { products, isLoading, isUserPrices } = useProducts();

  // Deal of the Day - 选择有折扣的产品
  // 使用辅助函数统一处理 WCProduct 和 PublicProduct
  const dealOfTheDayProducts = products.filter((p: any) => isProductOnSale(p));

  // Best Sellers - 前 18 个产品
  const bestSellersProducts = products.slice(0, 18);

  return (
    <Box>
      {/* 显示价格类型（调试用）*/}
      {isUserPrices && (
        <Box sx={{ 
          position: 'fixed', 
          bottom: 20, 
          right: 20, 
          bgcolor: 'success.main', 
          color: 'white',
          px: 2,
          py: 1,
          borderRadius: 1,
          zIndex: 9999,
          fontSize: '0.875rem',
          boxShadow: 2
        }}>
          🔐 显示用户价格
        </Box>
      )}
      
      <PopularCategories products={products} />
      
      <ProductHighlightsSection
        dealOfTheDayProducts={dealOfTheDayProducts}
        bestSellersProducts={bestSellersProducts}
      />
    </Box>
  );
}
