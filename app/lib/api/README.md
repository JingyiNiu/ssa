# API 管理系统

统一管理所有后端 API 请求的模块，基于 WordPress + WooCommerce + CoCart。

## 📁 文件结构

```
app/lib/api/
├── index.ts              # 统一导出入口
├── config.ts             # API 配置（URL、端点等）
├── client.ts             # HTTP 客户端（封装 fetch）
├── errors.ts             # 错误处理
├── types.ts              # TypeScript 类型定义
├── services/             # API 服务模块
│   ├── index.ts         # 服务统一导出
│   ├── products.ts      # 产品相关 API (WooCommerce)
│   ├── users.ts         # 用户认证 API (JWT + WordPress)
│   └── cart.ts          # 购物车 API (CoCart)
└── README.md            # 本文档
```

## 🔌 API 端点说明

### 1. JWT 认证相关

**POST /jwt-auth/v1/token**
- 用途: 用户登录获取 JWT Token
- 使用位置: `loginUser()`
- 请求参数: `{ username, password }`

### 2. WordPress 核心 API

**GET /wp/v2/users/me**
- 用途: 获取当前登录用户信息(含 Price Level)
- 使用位置: `getCurrentUser()`
- 需要认证: Bearer Token

### 3. WooCommerce REST API v3 (需要 JWT 认证)

**GET /wc/v3/products**
- 用途: 获取产品列表、查询产品、验证价格
- 使用位置:
  - `getProducts()` - 获取产品列表(含用户价格)
  - `getProductBySku()` - 通过 SKU 查询产品
  - `verifyCartPrices()` - 验证购物车价格
- 查询参数: `sku`, `per_page`, `page`, `include`
- 返回: 含 `calculated_price` (用户实际价格)

### 4. WooCommerce Store API v1 (公开访问)

**GET /wc/store/v1/products**
- 用途: 公开访问产品列表(不需要认证)
- 使用位置: `getPublicProducts()` - 作为 fallback 方案
- 查询参数: `per_page`, `page`, `search`

### 5. CoCart API v2 (购物车管理)

**POST /cocart/v2/cart/add-item**
- 用途: 添加商品到购物车
- 使用位置: `addToCart()`
- 需要认证: Bearer Token
- 请求参数: `{ id, quantity }`

**GET /cocart/v2/cart**
- 用途: 获取购物车内容
- 使用位置: `getCart()`
- 需要认证: Bearer Token
- 返回: 购物车商品、总计、价格信息

**POST /cocart/v2/cart/item/{itemKey}**
- 用途: 更新购物车商品数量
- 使用位置: `updateCartItem()`
- 需要认证: Bearer Token
- 请求参数: `{ quantity }`

**DELETE /cocart/v2/cart/item/{itemKey}**
- 用途: 从购物车删除商品
- 使用位置: `removeCartItem()`
- 需要认证: Bearer Token

**POST /cocart/v2/cart/clear**
- 用途: 清空整个购物车
- 使用位置: `clearCart()`
- 需要认证: Bearer Token

## 🚀 使用方法

### 1. 用户登录

```typescript
import { loginUser, getCurrentUser } from '@/app/lib/api';

// 登录获取 Token
const { token } = await loginUser({
  username: 'user@example.com',
  password: 'password123',
});

// 保存 Token
localStorage.setItem('token', token);

// 获取用户信息
const user = await getCurrentUser(token);
console.log('Price Level:', user.price_level);
```

### 2. 获取产品列表

```typescript
import { getProducts, getProductBySku, getPublicProducts } from '@/app/lib/api';

// 需要认证 - 获取含用户价格的产品列表
const token = localStorage.getItem('token');
const products = await getProducts(token, {
  per_page: 20,
  page: 1,
  search: 'wheel',
});

// 通过 SKU 查询产品
const product = await getProductBySku(token, 'WHL-001');
console.log('User Price:', product?.calculated_price);

// 公开访问 - 不需要认证（fallback）
const publicProducts = await getPublicProducts({
  per_page: 20,
  search: 'tyre',
});
```

### 3. 购物车操作

```typescript
import { 
  getCart, 
  addToCart, 
  updateCartItem, 
  removeCartItem, 
  clearCart 
} from '@/app/lib/api';

// 获取 Token
const token = localStorage.getItem('authToken');

// 获取购物车
const cart = await getCart(token);
console.log('Total:', cart.totals.total);

// 添加商品到购物车
const updatedCart = await addToCart(token, {
  id: 123,
  quantity: 2,
});

// 更新商品数量
await updateCartItem(token, 'item-key-123', { quantity: 3 });

// 删除商品
await removeCartItem(token, 'item-key-123');

// 清空购物车
await clearCart(token);
```

### 4. 验证购物车价格

```typescript
import { verifyCartPrices } from '@/app/lib/api';

const token = localStorage.getItem('token');
const productIds = [123, 456, 789];

// 批量获取产品并验证价格
const products = await verifyCartPrices(token, productIds);
products.forEach(product => {
  console.log(`${product.name}: ${product.calculated_price}`);
});
```

## 🔐 认证流程

### 完整的认证流程示例

```typescript
'use client';

import { useState } from 'react';
import { loginUser, getCurrentUser, getProducts } from '@/app/lib/api';
import { handleAPIError } from '@/app/lib/api';

export default function LoginPage() {
  const [error, setError] = useState('');

  const handleLogin = async (username: string, password: string) => {
    try {
      // 1. 登录获取 Token
      const { token } = await loginUser({ username, password });
      
      // 2. 保存 Token
      localStorage.setItem('authToken', token);
      
      // 3. 获取用户信息
      const user = await getCurrentUser(token);
      localStorage.setItem('user', JSON.stringify(user));
      
      // 4. 获取产品列表（含用户价格）
      const products = await getProducts(token, { per_page: 10 });
      
      console.log('登录成功！用户价格等级:', user.price_level);
      
    } catch (err) {
      const errorMessage = handleAPIError(err);
      setError(errorMessage);
    }
  };

  return (
    <div>
      {/* 登录表单 */}
    </div>
  );
}
```

## 💡 最佳实践

### 1. Token 管理

```typescript
// utils/auth.ts
export function getAuthToken(): string | null {
  return localStorage.getItem('authToken');
}

export function setAuthToken(token: string): void {
  localStorage.setItem('authToken', token);
}

export function clearAuthToken(): void {
  localStorage.removeItem('authToken');
  localStorage.removeItem('user');
}

export function isAuthenticated(): boolean {
  return !!getAuthToken();
}
```

### 2. 受保护的 API 调用

```typescript
import { getProducts } from '@/app/lib/api';
import { getAuthToken } from '@/utils/auth';

async function fetchUserProducts() {
  const token = getAuthToken();
  
  if (!token) {
    throw new Error('请先登录');
  }
  
  return getProducts(token, { per_page: 20 });
}
```

### 3. 错误处理

```typescript
import { handleAPIError, APIError } from '@/app/lib/api';

try {
  const products = await getProducts(token);
} catch (error) {
  if (error instanceof APIError) {
    if (error.isAuthError()) {
      // Token 过期，跳转到登录页
      clearAuthToken();
      router.push('/login');
    }
  }
  
  // 显示友好的错误信息
  const message = handleAPIError(error);
  toast.error(message);
}
```

### 4. 在 React 组件中使用

```typescript
'use client';

import { useEffect, useState } from 'react';
import { getCart } from '@/app/lib/api';

export default function CartPage() {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCart() {
      try {
        const data = await getCart();
        setCart(data);
      } catch (error) {
        console.error('加载购物车失败:', error);
      } finally {
        setLoading(false);
      }
    }
    
    loadCart();
  }, []);

  if (loading) return <div>加载中...</div>;
  
  return (
    <div>
      <h1>购物车</h1>
      <p>商品数量: {cart?.item_count}</p>
      <p>总计: ${cart?.totals.total}</p>
    </div>
  );
}
```

## ⚙️ 配置

### 环境变量

在 `.env` 文件中配置 API URL：

```env
NEXT_PUBLIC_API_URL=https://your-domain.com/wp-json
```

## 🔧 类型定义

### 产品类型 (WCProduct)

```typescript
interface WCProduct {
  id: number;
  name: string;
  sku: string;
  price: string;
  calculated_price?: string; // 用户实际价格
  images: Array<{
    src: string;
    alt: string;
  }>;
  stock_status: 'instock' | 'outofstock';
  // ... 更多字段
}
```

### 购物车类型 (Cart)

```typescript
interface Cart {
  items: CartItem[];
  item_count: number;
  totals: {
    total: string;
    subtotal: string;
    // ... 更多字段
  };
}
```

### 用户类型 (User)

```typescript
interface User {
  id: number;
  username: string;
  email: string;
  name: string;
  price_level?: string; // 价格等级
}
```

## 📝 API 响应示例

### 登录响应

```json
{
  "token": "eyJ0eXAiOiJKV1QiLCJhbGc...",
  "user_email": "user@example.com",
  "user_nicename": "user",
  "user_display_name": "User Name"
}
```

### 产品列表响应

```json
[
  {
    "id": 123,
    "name": "Premium Wheel",
    "sku": "WHL-001",
    "price": "99.99",
    "calculated_price": "89.99",
    "images": [
      {
        "src": "https://example.com/image.jpg",
        "alt": "Premium Wheel"
      }
    ],
    "stock_status": "instock"
  }
]
```

### 购物车响应

```json
{
  "items": [
    {
      "item_key": "abc123",
      "id": 123,
      "name": "Premium Wheel",
      "quantity": {
        "value": 2
      },
      "totals": {
        "total": 179.98
      }
    }
  ],
  "item_count": 2,
  "totals": {
    "total": "179.98"
  }
}
```

## 🎯 常见场景

### 场景 1: 用户登录并查看价格

```typescript
// 1. 用户登录
const { token } = await loginUser({ username, password });

// 2. 获取用户信息和价格等级
const user = await getCurrentUser(token);

// 3. 获取产品（带用户价格）
const products = await getProducts(token);
```

### 场景 2: 未登录用户浏览产品

```typescript
// 使用公开 API（无需认证）
const products = await getPublicProducts({ per_page: 20 });
```

### 场景 3: 添加到购物车并结算

```typescript
const token = localStorage.getItem('authToken');
if (!token) {
  alert('Please login first');
  return;
}

// 1. 添加商品
await addToCart(token, { id: 123, quantity: 2 });

// 2. 获取购物车
const cart = await getCart(token);

// 3. 验证价格
const productIds = cart.items.map(item => item.id);
const products = await verifyCartPrices(token, productIds);
```

## 📚 更多信息

- WooCommerce REST API: https://woocommerce.github.io/woocommerce-rest-api-docs/
- CoCart API: https://cocart.xyz/
- JWT Authentication: https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/

## 🔄 更新日志

- v1.0.0 - 初始版本，支持 JWT 认证、产品管理、购物车操作
