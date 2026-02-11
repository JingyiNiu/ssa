/**
 * 产品相关 API 服务
 */

import { WCProduct } from '@/app/components/layout/product-list/wc-product';
import { apiClient } from '../client';
import { API_ENDPOINTS } from '../config';
import type { PublicProduct } from '@/app/components/layout/product-list/public-product';

/**
 * 产品查询参数
 */
export interface ProductQueryParams {
  per_page?: number;
  page?: number;
  search?: string;
  sku?: string;
  include?: string; // 逗号分隔的产品ID列表
  category?: string;
  [key: string]: string | number | boolean | undefined | null;
}

/**
 * 获取产品列表 (WooCommerce REST API v3 - 需要 JWT 认证)
 * GET /wc/v3/products
 * 用于获取产品列表、查询产品、验证价格 (含用户价格)
 */
export async function getProducts(
  token: string,
  params?: ProductQueryParams
): Promise<WCProduct[]> {
  return apiClient.get<WCProduct[]>(API_ENDPOINTS.wc.products, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: params as Record<string, string | number | boolean | undefined | null>,
  });
}

/**
 * 通过 SKU 查询产品
 * GET /wc/v3/products?sku={sku}
 */
export async function getProductBySku(
  token: string,
  sku: string
): Promise<WCProduct | null> {
  const products = await getProducts(token, { sku, per_page: 1 });
  return products.length > 0 ? products[0] : null;
}

/**
 * 获取公开产品列表 (WooCommerce Store API v1 - 不需要认证)
 * GET /wc/store/v1/products
 * 用作 fallback 方案，当用户未登录时使用
 */
export async function getPublicProducts(
  params?: ProductQueryParams
): Promise<PublicProduct[]> {
  return apiClient.get<PublicProduct[]>(API_ENDPOINTS.store.products, {
    params: params as Record<string, string | number | boolean | undefined | null>,
  });
}

/**
 * 验证购物车价格
 * 通过 include 参数批量获取产品信息并验证价格
 */
export async function verifyCartPrices(
  token: string,
  productIds: number[]
): Promise<WCProduct[]> {
  if (productIds.length === 0) return [];
  
  return getProducts(token, {
    include: productIds.join(','),
    per_page: 100,
  });
}

/**
 * 智能获取产品列表 - 自动根据登录状态选择 API
 * - 已登录：使用 /wc/v3/products (包含用户价格) → 返回 WCProduct[]
 * - 未登录：使用 /wc/store/v1/products (公开价格) → 返回 PublicProduct[]
 * 
 * @param token - JWT token (可选)，如果提供则使用认证 API
 * @param params - 查询参数
 * @returns 产品列表（类型取决于是否登录）
 */
export async function getProductsAuto(
  token?: string | null,
  params?: ProductQueryParams
): Promise<WCProduct[] | PublicProduct[]> {
  if (token) {
    // 已登录：使用 WooCommerce REST API v3 (包含用户价格)
    console.log('🔐 Using authenticated API: /wc/v3/products');
    return getProducts(token, params);
  } else {
    // 未登录：使用 WooCommerce Store API v1 (公开价格)
    console.log('🌐 Using public API: /wc/store/v1/products');
    return getPublicProducts(params);
  }
}

/**
 * 获取单个产品 (通过 ID) - 自动根据登录状态选择 API
 */
export async function getProductByIdAuto(
  productId: number,
  token?: string | null
): Promise<WCProduct | PublicProduct | null> {
  const products = await getProductsAuto(token, { 
    include: String(productId),
    per_page: 1 
  });
  return products.length > 0 ? products[0] : null;
}

/**
 * 通过 SKU 查询产品 - 自动根据登录状态选择 API
 */
export async function getProductBySkuAuto(
  sku: string,
  token?: string | null
): Promise<WCProduct | PublicProduct | null> {
  const products = await getProductsAuto(token, { 
    sku, 
    per_page: 1 
  });
  return products.length > 0 ? products[0] : null;
}
