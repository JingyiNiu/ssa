/**
 * API 配置文件
 * 统一管理所有 API 相关配置
 */

// API 基础 URL
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

// API 端点
export const API_ENDPOINTS = {
  // JWT 认证相关
  auth: {
    login: '/jwt-auth/v1/token', // 用户登录获取 JWT Token
  },
  
  // WordPress 核心 API
  users: {
    me: '/wp/v2/users/me', // 获取当前登录用户信息(含 Price Level)
  },
  
  // WooCommerce REST API v3 (需要 JWT 认证)
  wc: {
    products: '/wc/v3/products', // 获取产品列表、查询产品、验证价格
  },
  
  // WooCommerce Store API v1 (公开访问，不需要认证)
  store: {
    products: '/wc/store/v1/products', // 公开访问产品列表
  },
  
  // CoCart API v2 (购物车管理)
  cart: {
    get: '/cocart/v2/cart', // 获取购物车内容
    addItem: '/cocart/v2/cart/add-item', // 添加商品到购物车
    updateItem: (itemKey: string) => `/cocart/v2/cart/item/${itemKey}`, // 更新购物车商品数量
    removeItem: (itemKey: string) => `/cocart/v2/cart/item/${itemKey}`, // 从购物车删除商品
    clear: '/cocart/v2/cart/clear', // 清空整个购物车
  },
} as const;

// API 超时配置（毫秒）
export const API_TIMEOUT = 30000;

// 请求重试配置
export const RETRY_CONFIG = {
  maxRetries: 3,
  retryDelay: 1000,
};
