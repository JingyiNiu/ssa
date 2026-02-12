/**
 * 产品数据辅助函数
 * 统一处理 WCProduct 和 PublicProduct 的差异
 */

import { WCProduct } from '@/app/components/layout/product-list/wc-product';
import { PublicProduct } from '@/app/components/layout/product-list/public-product';

/**
 * 类型守卫：判断是否为 PublicProduct
 */
export function isPublicProduct(product: any): product is PublicProduct {
  return product && typeof product === 'object' && 'prices' in product;
}

/**
 * 类型守卫：判断是否为 WCProduct
 */
export function isWCProduct(product: any): product is WCProduct {
  return product && typeof product === 'object' && 'price' in product && !('prices' in product);
}

/**
 * 将 PublicProduct 的价格从"分"转换为"元"
 * PublicProduct API 返回的价格单位是分（如 10000 = 100元）
 */
function convertPublicProductPrice(priceInCents: string): string {
  const cents = parseFloat(priceInCents);
  if (isNaN(cents)) return '0';
  return (cents / 100).toFixed(2);
}

/**
 * 获取产品价格（统一接口）
 */
export function getProductPrice(product: WCProduct | PublicProduct): string {
  if (isPublicProduct(product)) {
    return convertPublicProductPrice(product.prices.price);
  }
  // WCProduct: 优先使用 calculated_price（用户价格）
  return product.calculated_price || product.price;
}

/**
 * 获取产品原价
 */
export function getProductRegularPrice(product: WCProduct | PublicProduct): string {
  if (isPublicProduct(product)) {
    return convertPublicProductPrice(product.prices.regular_price);
  }
  return product.regular_price;
}

/**
 * 获取产品折扣价
 */
export function getProductSalePrice(product: WCProduct | PublicProduct): string {
  if (isPublicProduct(product)) {
    return convertPublicProductPrice(product.prices.sale_price);
  }
  return product.calculated_price||product.sale_price;
}

/**
 * 判断产品是否在促销
 */
export function isProductOnSale(product: WCProduct | PublicProduct): boolean {
  if (isPublicProduct(product)) {
    return product.on_sale;
  }
  // WCProduct: 判断 price_source 是否为 "special" 或者 sale_price 是否存在且不为空
  return product.price_source === 'special' || (!!product.sale_price && parseFloat(product.sale_price) > 0);
}

/**
 * 获取产品折扣百分比
 */
export function getDiscountPercentage(product: WCProduct | PublicProduct): number {
  const regularPrice = parseFloat(getProductRegularPrice(product));
  const salePrice = parseFloat(getProductSalePrice(product));
  
  if (!regularPrice || !salePrice || salePrice >= regularPrice) {
    return 0;
  }
  
  return Math.round(((regularPrice - salePrice) / regularPrice) * 100);
}

/**
 * 获取产品主图
 */
export function getProductMainImage(product: WCProduct | PublicProduct): string {
  if (!product.images || product.images.length === 0) {
    return '/placeholder.jpg'; // 默认占位图
  }
  return product.images[0].src;
}

/**
 * 获取产品缩略图
 */
export function getProductThumbnail(product: WCProduct | PublicProduct): string {
  if (isPublicProduct(product)) {
    return product.images[0]?.thumbnail || product.images[0]?.src || '/placeholder.jpg';
  }
  return product.images[0]?.src || '/placeholder.jpg';
}

/**
 * 判断产品是否有库存
 */
export function isInStock(product: WCProduct | PublicProduct): boolean {
  if (isPublicProduct(product)) {
    return product.is_in_stock;
  }
  return product.stock_status === 'instock';
}

/**
 * 格式化价格显示
 */
export function formatPrice(
  product: WCProduct | PublicProduct,
  showCurrency: boolean = true
): string {
  const price = getProductPrice(product);
  
  if (isPublicProduct(product) && showCurrency) {
    const symbol = product.prices.currency_symbol || '$';
    return `${symbol}${price}`;
  }
  
  return showCurrency ? `$${price}` : price;
}

/**
 * 获取货币符号
 */
export function getCurrencySymbol(product: WCProduct | PublicProduct): string {
  if (isPublicProduct(product)) {
    return product.prices.currency_symbol || '$';
  }
  return '$'; // WCProduct 默认使用美元符号
}
