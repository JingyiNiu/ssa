/**
 * 用户相关 API 服务
 */

import { apiClient } from '../client';
import { API_ENDPOINTS } from '../config';

/**
 * 用户信息接口
 */
export interface User {
  id: number;
  username: string;
  email: string;
  name: string;
  first_name: string;
  last_name: string;
  avatar_urls?: {
    [key: string]: string;
  };
  price_level?: string; // 用户价格等级
  [key: string]: any;
}

/**
 * 登录参数
 */
export interface LoginParams {
  username: string;
  password: string;
}

/**
 * 登录响应
 */
export interface LoginResponse {
  token: string;
  user_email: string;
  user_nicename: string;
  user_display_name: string;
}

/**
 * 用户登录 - 获取 JWT Token
 * POST /jwt-auth/v1/token
 */
export async function loginUser(params: LoginParams): Promise<LoginResponse> {
  return apiClient.post<LoginResponse>(API_ENDPOINTS.auth.login, params);
}

/**
 * 获取当前登录用户信息 (含 Price Level)
 * GET /wp/v2/users/me
 */
export async function getCurrentUser(token: string): Promise<User> {
  return apiClient.get<User>(API_ENDPOINTS.users.me, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
