/**
 * 产品相关 API 服务
 */

import { apiClient } from '../client';
import { API_ENDPOINTS } from '../config';

/**
 * WooCommerce 产品接口
 */
export interface WCProduct {
  id: number;
  name: string;
  slug: string;
  sku: string;
  price: string;
  regular_price: string;
  sale_price: string;
  description: string;
  short_description: string;
  images: Array<{
    id: number;
    src: string;
    name: string;
    alt: string;
  }>;
  categories: Array<{
    id: number;
    name: string;
    slug: string;
  }>;
  stock_status: 'instock' | 'outofstock' | 'onbackorder';
  stock_quantity: number | null;
  calculated_price?: string; // 用户实际价格
  [key: string]: any;
}

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
): Promise<any[]> {
  return apiClient.get<any[]>(API_ENDPOINTS.store.products, {
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
