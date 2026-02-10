/**
 * API 错误处理
 */

export class APIError extends Error {
  public status: number;
  public data?: unknown;

  constructor(message: string, status: number = 500, data?: unknown) {
    super(message);
    this.name = 'APIError';
    this.status = status;
    this.data = data;
  }

  /**
   * 判断是否为网络错误
   */
  isNetworkError(): boolean {
    return this.status === 0 || this.status === 408;
  }

  /**
   * 判断是否为客户端错误
   */
  isClientError(): boolean {
    return this.status >= 400 && this.status < 500;
  }

  /**
   * 判断是否为服务器错误
   */
  isServerError(): boolean {
    return this.status >= 500;
  }

  /**
   * 判断是否为认证错误
   */
  isAuthError(): boolean {
    return this.status === 401 || this.status === 403;
  }
}

/**
 * 错误处理工具函数
 * 返回用户友好的英文错误信息
 */
export function handleAPIError(error: unknown): string {
  if (error instanceof APIError) {
    // 根据错误类型返回友好的错误信息（英文）
    if (error.isNetworkError()) {
      return 'Network connection failed. Please check your network settings.';
    }
    if (error.isAuthError()) {
      return 'Authentication failed. Please login again.';
    }
    if (error.status === 404) {
      return 'The requested resource was not found.';
    }
    if (error.isServerError()) {
      return 'Server error. Please try again later.';
    }
    return error.message;
  }

  if (error instanceof Error) {
    return error.message;
  }

  return 'Unknown error occurred.';
}
