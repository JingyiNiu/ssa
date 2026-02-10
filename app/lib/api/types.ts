/**
 * API 类型定义
 */

/**
 * HTTP 方法
 */
export type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

/**
 * 请求选项
 */
export interface RequestOptions {
  method?: HTTPMethod;
  headers?: Record<string, string>;
  body?: unknown;
  params?: Record<string, string | number | boolean | undefined | null>;
  signal?: AbortSignal;
}

/**
 * API 响应
 */
export interface APIResponse<T> {
  data: T;
  status: number;
  headers: Headers;
}

/**
 * 分页参数
 */
export interface PaginationParams {
  page?: number;
  per_page?: number;
}

/**
 * 分页响应
 */
export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  per_page: number;
  total_pages: number;
}

/**
 * 搜索参数
 */
export interface SearchParams extends PaginationParams {
  search?: string;
  category?: string;
  brand?: string;
  min_price?: number;
  max_price?: number;
  sort_by?: 'price' | 'name' | 'date';
  sort_order?: 'asc' | 'desc';
}
