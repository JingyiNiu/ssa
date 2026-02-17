/**
 * Cookie 工具函数
 * 用于在客户端设置和删除 cookies
 */

export const COOKIE_NAME = 'auth-token';
const COOKIE_MAX_AGE = 7 * 24 * 60 * 60; // 7 天（秒）

/**
 * 设置 token 到 cookie
 * @param token JWT token
 */
export function setTokenCookie(token: string) {
  if (typeof window === 'undefined') return; // 只在客户端执行

  // 设置 cookie，确保服务端和客户端都能读取
  // 注意：生产环境应该添加 Secure 标志（需要 HTTPS）
  const isProduction = process.env.NODE_ENV === 'production';
  const secureFlag = isProduction ? '; Secure' : '';
  
  document.cookie = `${COOKIE_NAME}=${token}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax${secureFlag}`;
  console.log('🍪 Token saved to cookie', {
    name: COOKIE_NAME,
    tokenPreview: `${token.substring(0, 20)}...`,
    secure: isProduction,
  });
}

/**
 * 删除 token cookie
 */
export function removeTokenCookie() {
  if (typeof window === 'undefined') return; // 只在客户端执行

  document.cookie = `${COOKIE_NAME}=; path=/; max-age=0; SameSite=Lax`;
  console.log('🍪 Token removed from cookie');
}

/**
 * 从 cookie 中读取 token（客户端）
 */
export function getTokenFromCookie(): string | null {
  if (typeof window === 'undefined') return null;

  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split('=');
    if (name === COOKIE_NAME) {
      return value;
    }
  }
  return null;
}
