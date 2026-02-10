# 认证管理系统

完整的 JWT 认证管理方案，包括 token 存储、过期检查、自动登出等功能。

## 📁 文件结构

```
app/lib/auth/
├── index.ts              # 核心认证函数
├── AuthProvider.tsx      # React Context Provider
├── ProtectedRoute.tsx    # 受保护路由组件
└── README.md            # 本文档
```

## 🔑 核心功能

### 1. Token 管理

- ✅ JWT Token 解码和过期时间提取
- ✅ 自动检查 token 是否过期（提前 5 分钟判定）
- ✅ Token 存储和读取
- ✅ 检查 token 即将过期（小于 10 分钟）

### 2. 登录流程

```typescript
import { login } from '@/app/lib/auth';

// 登录会自动：
// 1. 调用 loginUser 获取 token
// 2. 调用 getCurrentUser 获取用户信息（含 price_level）
// 3. 保存 token 和用户信息到 localStorage
const { token, user } = await login({ username, password });
```

### 3. Token 验证

```typescript
import { validateAndRefreshUser, isAuthenticated } from '@/app/lib/auth';

// 页面加载时验证 token
const user = await validateAndRefreshUser();
// 如果 token 过期或无效，返回 null 并清除认证信息

// 快速检查是否已登录
if (isAuthenticated()) {
  // 用户已登录且 token 有效
}
```

### 4. 自动登出

```typescript
import { logout } from '@/app/lib/auth';

// 手动登出
logout(); // 自动跳转到登录页

// 仅清除信息，不跳转
logout(false);
```

## 🚀 使用方法

### 方式 1: 使用 AuthProvider (推荐)

#### 1. 在根布局中添加 AuthProvider

```typescript
// app/layout.tsx
import { AuthProvider } from '@/app/lib/auth/AuthProvider';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
```

#### 2. 在组件中使用 useAuth Hook

```typescript
'use client';

import { useAuth } from '@/app/lib/auth/AuthProvider';

export default function ProfilePage() {
  const { user, isAuthenticated, logout } = useAuth();

  if (!isAuthenticated) {
    return <div>Please login</div>;
  }

  return (
    <div>
      <h1>Welcome, {user?.name}</h1>
      <p>Price Level: {user?.price_level}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
```

#### 3. 使用 ProtectedRoute 保护页面

```typescript
// app/account/page.tsx
import { ProtectedRoute } from '@/app/lib/auth/ProtectedRoute';

export default function AccountPage() {
  return (
    <ProtectedRoute fallback={<div>Loading...</div>}>
      <div>
        <h1>My Account</h1>
        {/* 只有登录用户才能看到 */}
      </div>
    </ProtectedRoute>
  );
}
```

### 方式 2: 直接使用认证函数

```typescript
import { 
  login, 
  logout, 
  getToken, 
  getUser, 
  isAuthenticated,
  validateAndRefreshUser 
} from '@/app/lib/auth';

// 登录
const { token, user } = await login({ username, password });

// 获取当前 token
const token = getToken();

// 获取用户信息
const user = getUser();

// 检查是否登录
if (isAuthenticated()) {
  // 已登录
}

// 页面刷新时验证
const user = await validateAndRefreshUser();

// 登出
logout();
```

## 🔄 最佳实践

### 1. 应用初始化时验证 Token

```typescript
// app/layout.tsx 或 _app.tsx
'use client';

import { useEffect } from 'react';
import { validateAndRefreshUser } from '@/app/lib/auth';

export default function RootLayout({ children }) {
  useEffect(() => {
    // 应用启动时验证 token
    validateAndRefreshUser();
  }, []);

  return <>{children}</>;
}
```

### 2. API 调用时自动处理认证错误

```typescript
import { withAuthErrorHandling } from '@/app/lib/api/interceptor';
import { getProducts } from '@/app/lib/api';

async function loadProducts() {
  // 自动处理 401/403 错误
  await withAuthErrorHandling(async () => {
    const token = getToken();
    const products = await getProducts(token);
    return products;
  });
}
```

### 3. 在受保护的页面使用

```typescript
// app/cart/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { getToken, isAuthenticated, logout } from '@/app/lib/auth';
import { getCart, handleAPIError } from '@/app/lib/api';

export default function CartPage() {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    async function loadCart() {
      // 检查是否登录
      if (!isAuthenticated()) {
        logout(); // 自动跳转登录页
        return;
      }

      try {
        const token = getToken();
        const data = await getCart(token!);
        setCart(data);
      } catch (error) {
        const message = handleAPIError(error);
        alert(message);
      }
    }

    loadCart();
  }, []);

  return <div>{/* 购物车内容 */}</div>;
}
```

### 4. 登录页面完整示例

```typescript
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '@/app/lib/auth';
import { handleAPIError } from '@/app/lib/api';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // login 函数会：
      // 1. 获取 token
      // 2. 获取用户信息
      // 3. 保存到 localStorage
      const { user } = await login({ username, password });
      
      console.log('Login successful!', user);
      
      // 跳转到之前的页面或首页
      const redirectPath = sessionStorage.getItem('redirectAfterLogin') || '/';
      sessionStorage.removeItem('redirectAfterLogin');
      router.push(redirectPath);
      
    } catch (err) {
      setError(handleAPIError(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
}
```

## ⏰ Token 过期处理

### 自动监控（使用 AuthProvider）

AuthProvider 会每分钟自动检查 token 是否过期：

```typescript
// 自动进行，无需手动配置
// 如果检测到 token 过期，会自动登出并跳转到登录页
```

### 手动检查

```typescript
import { isTokenExpired, isTokenExpiringSoon, getTokenRemainingTime } from '@/app/lib/auth';

// 检查是否过期
if (isTokenExpired()) {
  logout();
}

// 检查是否即将过期（< 10 分钟）
if (isTokenExpiringSoon()) {
  alert('Your session will expire soon. Please save your work.');
}

// 获取剩余时间（毫秒）
const remaining = getTokenRemainingTime();
console.log(`Token expires in ${Math.floor(remaining / 60000)} minutes`);
```

### API 错误自动处理

所有 API 调用如果返回 401/403，会自动：
1. 清除 token 和用户信息
2. 跳转到登录页
3. 保存当前页面路径，登录后返回

```typescript
import { handleAuthError } from '@/app/lib/api/interceptor';

try {
  const products = await getProducts(token);
} catch (error) {
  handleAuthError(error); // 自动处理认证错误
  throw error;
}
```

## 📊 Token 信息查看

```typescript
import { decodeJWT, getTokenExpiry } from '@/app/lib/auth';

const token = getToken();

// 查看 token 内容
const payload = decodeJWT(token);
console.log('User ID:', payload.sub);
console.log('Issued at:', new Date(payload.iat * 1000));
console.log('Expires at:', new Date(payload.exp * 1000));

// 获取过期时间
const expiry = getTokenExpiry(token);
console.log('Expires:', new Date(expiry));
```

## 🎯 什么时候调用 getCurrentUser

### ✅ 应该调用的时机

1. **登录后立即调用**（自动，在 `login()` 函数中）
```typescript
const { user } = await login({ username, password });
// getCurrentUser 已经在 login 内部调用
```

2. **页面刷新/应用初始化时**
```typescript
// 验证 token 并获取用户信息
const user = await validateAndRefreshUser();
```

3. **需要更新用户信息时**（例如用户修改了个人资料）
```typescript
import { getCurrentUser, getToken } from '@/app/lib/auth';

const token = getToken();
const updatedUser = await getCurrentUser(token!);
```

### ❌ 不应该调用的时机

1. **每次渲染时** - 会造成大量不必要的请求
2. **每次 API 调用前** - 用户信息不会频繁变化
3. **已有用户信息时** - 使用 `getUser()` 从 localStorage 读取即可

## 🔒 安全建议

1. **使用 HTTPS** - 确保 token 传输安全
2. **设置合理的过期时间** - 建议 token 有效期为 1-24 小时
3. **不要在 URL 中传递 token** - 只在 Authorization header 中使用
4. **定期刷新用户信息** - 特别是价格等级可能变化时

## 📝 总结

**推荐的认证流程：**

1. 用户登录 → 调用 `login()` → 自动获取 token 和用户信息
2. 应用启动 → 调用 `validateAndRefreshUser()` → 验证 token 有效性
3. AuthProvider 自动监控 token 过期 → 过期时自动登出
4. API 调用返回 401/403 → 自动清除认证并跳转登录
5. 用户手动登出 → 调用 `logout()` → 清除信息并跳转

这套方案提供了完整的认证管理，无需手动处理 token 过期和登出逻辑！🎉
