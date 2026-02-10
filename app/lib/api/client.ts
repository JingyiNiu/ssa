/**
 * API 客户端
 * 封装所有 HTTP 请求方法
 */

import { API_BASE_URL, API_TIMEOUT } from './config';
import { APIError } from './errors';
import type { APIResponse, RequestOptions } from './types';

class APIClient {
  private baseURL: string;
  private timeout: number;

  constructor(baseURL: string = API_BASE_URL, timeout: number = API_TIMEOUT) {
    this.baseURL = baseURL;
    this.timeout = timeout;
  }

  /**
   * 通用请求方法
   */
  private async request<T>(
    endpoint: string,
    options: RequestOptions = {}
  ): Promise<APIResponse<T>> {
    const {
      method = 'GET',
      headers = {},
      body,
      params,
      signal,
    } = options;

    // 构建 URL
    let url = `${this.baseURL}${endpoint}`;
    
    // 添加查询参数
    if (params) {
      const searchParams = new URLSearchParams();
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          searchParams.append(key, String(value));
        }
      });
      const queryString = searchParams.toString();
      if (queryString) {
        url += `?${queryString}`;
      }
    }

    // 设置超时
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);

    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
        body: body ? JSON.stringify(body) : undefined,
        signal: signal || controller.signal,
      });

      clearTimeout(timeoutId);

      // 解析响应
      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new APIError(
          data.message || `Request failed: ${response.statusText}`,
          response.status,
          data
        );
      }

      return {
        data,
        status: response.status,
        headers: response.headers,
      };
    } catch (error) {
      clearTimeout(timeoutId);

      if (error instanceof APIError) {
        throw error;
      }

      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          throw new APIError('Request timeout', 408);
        }
        throw new APIError(error.message, 500);
      }

      throw new APIError('Unknown error', 500);
    }
  }

  /**
   * GET 请求
   */
  async get<T>(endpoint: string, options?: RequestOptions): Promise<T> {
    const response = await this.request<T>(endpoint, {
      ...options,
      method: 'GET',
    });
    return response.data;
  }

  /**
   * POST 请求
   */
  async post<T>(
    endpoint: string,
    body?: unknown,
    options?: RequestOptions
  ): Promise<T> {
    const response = await this.request<T>(endpoint, {
      ...options,
      method: 'POST',
      body,
    });
    return response.data;
  }

  /**
   * PUT 请求
   */
  async put<T>(
    endpoint: string,
    body?: unknown,
    options?: RequestOptions
  ): Promise<T> {
    const response = await this.request<T>(endpoint, {
      ...options,
      method: 'PUT',
      body,
    });
    return response.data;
  }

  /**
   * PATCH 请求
   */
  async patch<T>(
    endpoint: string,
    body?: unknown,
    options?: RequestOptions
  ): Promise<T> {
    const response = await this.request<T>(endpoint, {
      ...options,
      method: 'PATCH',
      body,
    });
    return response.data;
  }

  /**
   * DELETE 请求
   */
  async delete<T>(endpoint: string, options?: RequestOptions): Promise<T> {
    const response = await this.request<T>(endpoint, {
      ...options,
      method: 'DELETE',
    });
    return response.data;
  }
}

// 导出默认实例
export const apiClient = new APIClient();

// 也导出类，以便需要时创建新实例
export default APIClient;
