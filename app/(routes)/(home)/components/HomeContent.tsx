"use client";

import { Box } from "@mui/material";
import { PopularCategories } from "../../../components/layout/popular-categories/PopularCategories";
import { ProductHighlightsSection } from "./product-highlights/ProductHighlightsSection";
import { useProducts } from "./ProductsProvider";
import { isProductOnSale } from "@/app/lib/api";
import { SearchSection } from "./search-section/SearchSection";
import { PromoBannersSection } from "./promotion-banner/PromoBannersSection";
import { PartnerLogosSection } from "./partner-logos/PartnerLogosSection";
import { ValuePropositionSection } from "./value-proposition/ValuePropositionSection";
import { ShopByBrandsSection } from "./shop-by-brands/ShopByBrandsSection";

/**
 * 首页内容组件 - 使用产品数据
 * 从 ProductsProvider 获取数据
 */
export function HomeContent() {
  const { products } = useProducts();

  // Deal of the Day - 选择有折扣的产品
  // 使用辅助函数统一处理 WCProduct 和 PublicProduct
  const dealOfTheDayProducts = products.filter((p: any) => isProductOnSale(p));

  // Best Sellers - 前 18 个产品
  const bestSellersProducts = products.slice(0, 18);

  return (
    <Box>
      <SearchSection />
      <PopularCategories products={products} />
      <PromoBannersSection />
      <PartnerLogosSection />
      <ValuePropositionSection />
      <ShopByBrandsSection />
      <ProductHighlightsSection
        dealOfTheDayProducts={dealOfTheDayProducts}
        bestSellersProducts={bestSellersProducts}
      />
    </Box>
  );
}
