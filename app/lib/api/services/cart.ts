/**
 * 购物车相关 API 服务 (CoCart API v2)
 */

import { apiClient } from '../client';
import { API_ENDPOINTS } from '../config';

/**
 * 购物车商品接口
 */
export interface CartItem {
  item_key: string;
  id: number;
  name: string;
  title: string;
  price: string;
  quantity: {
    value: number;
    min_purchase: number;
    max_purchase: number;
  };
  totals: {
    subtotal: number;
    subtotal_tax: number;
    total: number;
    tax: number;
  };
  slug: string;
  meta: {
    product_type: string;
    sku: string;
    dimensions: any;
    weight: number;
  };
  featured_image: string;
  [key: string]: any;
}

/**
 * 购物车接口
 */
export interface Cart {
  items: CartItem[];
  item_count: number;
  totals: {
    subtotal: string;
    subtotal_tax: string;
    fee_total: string;
    fee_tax: string;
    discount_total: string;
    discount_tax: string;
    shipping_total: string;
    shipping_tax: string;
    total: string;
    total_tax: string;
  };
  [key: string]: any;
}

/**
 * 添加商品参数
 */
export interface AddToCartParams {
  id: string | number; // 产品 ID
  quantity: number;
}

/**
 * 更新商品参数
 */
export interface UpdateCartItemParams {
  quantity: number;
}

/**
 * 获取购物车内容
 * GET /cocart/v2/cart
 * 需要认证: Bearer Token
 */
export async function getCart(token: string): Promise<Cart> {
  return apiClient.get<Cart>(API_ENDPOINTS.cart.get, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

/**
 * 添加商品到购物车
 * POST /cocart/v2/cart/add-item
 * 需要认证: Bearer Token
 */
export async function addToCart(
  token: string,
  params: AddToCartParams
): Promise<Cart> {
  return apiClient.post<Cart>(API_ENDPOINTS.cart.addItem, params, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

/**
 * 更新购物车商品数量
 * POST /cocart/v2/cart/item/{itemKey}
 * 需要认证: Bearer Token
 */
export async function updateCartItem(
  token: string,
  itemKey: string,
  params: UpdateCartItemParams
): Promise<Cart> {
  return apiClient.post<Cart>(
    API_ENDPOINTS.cart.updateItem(itemKey),
    params,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
}

/**
 * 从购物车删除商品
 * DELETE /cocart/v2/cart/item/{itemKey}
 * 需要认证: Bearer Token
 */
export async function removeCartItem(
  token: string,
  itemKey: string
): Promise<Cart> {
  return apiClient.delete<Cart>(API_ENDPOINTS.cart.removeItem(itemKey), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

/**
 * 清空整个购物车
 * POST /cocart/v2/cart/clear
 * 需要认证: Bearer Token
 */
export async function clearCart(token: string): Promise<{ message: string }> {
  return apiClient.post<{ message: string }>(API_ENDPOINTS.cart.clear, undefined, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
