# Auth 模块使用指南

## 📦 可用的函数和方法

### 认证相关

```typescript
import { 
  login,           // 登录（推荐使用）
  logout,          // 登出
  saveAuth,        // 保存认证信息
  clearAuth,       // 清除认证信息
  isAuthenticated, // 检查是否已登录
} from '@/app/lib/auth';
```

### Token 管理

```typescript
import {
  getToken,              // 获取当前 token
  isTokenExpired,        // 检查 token 是否过期
  isTokenExpiringSoon,   // 检查 token 是否即将过期
  getTokenRemainingTime, // 获取 token 剩余时间
} from '@/app/lib/auth';
```

### 用户信息

```typescript
import {
  getUser,                 // 获取本地用户信息
  validateAndRefreshUser,  // 验证并刷新用户信息
} from '@/app/lib/auth';
```

## 🎯 在登录页面的使用方式

### 方式 1: 使用 `login()` 函数（✅ 推荐）

```typescript
// app/login/page.tsx
import { login } from '@/app/lib/auth';
import { handleAPIError } from '@/app/lib/api';

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    // 一行代码搞定所有事情！
    const { token, user } = await login({ username, password });
    
    // login 函数自动完成：
    // 1. 调用 loginUser 获取 token
    // 2. 调用 getCurrentUser 获取用户详细信息
    // 3. 调用 saveAuth 保存 token 和用户信息
    // 4. 保存 token 过期时间
    
    console.log('Login successful!', user);
    router.push('/');
    
  } catch (err) {
    setError(handleAPIError(err));
  }
};
```

**优点：**
- ✅ 代码最简洁
- ✅ 自动处理所有步骤
- ✅ 自动保存过期时间
- ✅ 类型安全

### 方式 2: 手动使用 `saveAuth()` （更多控制）

如果你需要更多控制，可以手动调用各个函数：

```typescript
// app/login/page.tsx
import { loginUser, getCurrentUser } from '@/app/lib/api';
import { saveAuth } from '@/app/lib/auth';

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    // 1. 获取 token
    const { token } = await loginUser({ username, password });
    
    // 2. 获取用户信息
    const user = await getCurrentUser(token);
    
    // 3. 保存认证信息（包括 token、用户信息、过期时间）
    saveAuth(token, user);
    
    console.log('Login successful!', user);
    router.push('/');
    
  } catch (err) {
    setError(handleAPIError(err));
  }
};
```

**优点：**
- ✅ 更灵活的控制
- ✅ 可以在中间插入自定义逻辑
- ✅ 仍然比完全手动好

### 方式 3: 完全手动（❌ 不推荐）

```typescript
// 不推荐！容易遗漏步骤
const handleSubmit = async (e: React.FormEvent) => {
  try {
    const { token } = await loginUser({ username, password });
    localStorage.setItem('authToken', token);
    
    const user = await getCurrentUser(token);
    localStorage.setItem('user', JSON.stringify(user));
    
    // ❌ 没有保存过期时间
    // ❌ 容易出错
    // ❌ 代码重复
    
  } catch (err) {
    setError(handleAPIError(err));
  }
};
```

## 🔧 其他常用场景

### 场景 1: 检查登录状态

```typescript
import { isAuthenticated, getUser } from '@/app/lib/auth';

// 组件中检查
if (isAuthenticated()) {
  const user = getUser();
  console.log('Logged in as:', user?.name);
} else {
  router.push('/login');
}
```

### 场景 2: 登出

```typescript
import { logout } from '@/app/lib/auth';

const handleLogout = () => {
  logout(); // 自动清除认证信息并跳转到登录页
};

// 或者只清除信息，不跳转
logout(false);
```

### 场景 3: 获取 Token 用于 API 调用

```typescript
import { getToken } from '@/app/lib/auth';
import { getCart } from '@/app/lib/api';

const loadCart = async () => {
  const token = getToken();
  if (!token) {
    router.push('/login');
    return;
  }
  
  const cart = await getCart(token);
};
```

### 场景 4: 检查 Token 是否过期

```typescript
import { isTokenExpired, isTokenExpiringSoon, logout } from '@/app/lib/auth';

// 检查是否过期
if (isTokenExpired()) {
  logout();
}

// 检查是否即将过期（< 10 分钟）
if (isTokenExpiringSoon()) {
  alert('Your session will expire soon');
}
```

### 场景 5: 页面刷新时验证 Token

```typescript
// app/layout.tsx
import { validateAndRefreshUser } from '@/app/lib/auth';

useEffect(() => {
  const initAuth = async () => {
    const user = await validateAndRefreshUser();
    
    if (user) {
      console.log('Token is valid, user:', user);
    } else {
      console.log('Token expired or invalid');
      // 自动清除了认证信息
    }
  };
  
  initAuth();
}, []);
```

### 场景 6: 获取用户信息

```typescript
import { getUser } from '@/app/lib/auth';

// 从 localStorage 快速读取（不需要 API 调用）
const user = getUser();

if (user) {
  console.log('User name:', user.name);
  console.log('Price level:', user.price_level);
}
```

## 📋 完整的函数列表

### 核心函数

| 函数 | 说明 | 参数 | 返回值 |
|------|------|------|--------|
| `login()` | 登录并保存信息 | `{ username, password }` | `{ token, user }` |
| `logout()` | 登出 | `redirectToLogin?: boolean` | `void` |
| `saveAuth()` | 保存认证信息 | `token, user` | `void` |
| `clearAuth()` | 清除认证信息 | - | `void` |

### Token 管理

| 函数 | 说明 | 返回值 |
|------|------|--------|
| `getToken()` | 获取当前 token | `string \| null` |
| `isTokenExpired()` | Token 是否过期 | `boolean` |
| `isTokenExpiringSoon()` | Token 是否即将过期 | `boolean` |
| `getTokenRemainingTime()` | Token 剩余时间（毫秒） | `number` |

### 用户信息

| 函数 | 说明 | 返回值 |
|------|------|--------|
| `getUser()` | 获取用户信息 | `User \| null` |
| `validateAndRefreshUser()` | 验证并刷新用户信息 | `Promise<User \| null>` |
| `isAuthenticated()` | 是否已登录且有效 | `boolean` |

## 💡 最佳实践

### ✅ 推荐做法

1. **登录时使用 `login()` 函数**
```typescript
const { user } = await login({ username, password });
```

2. **页面刷新时验证 token**
```typescript
await validateAndRefreshUser();
```

3. **使用 `isAuthenticated()` 检查登录状态**
```typescript
if (!isAuthenticated()) router.push('/login');
```

4. **使用 `getUser()` 读取用户信息**
```typescript
const user = getUser(); // 快速，不需要 API 调用
```

### ❌ 不推荐做法

1. ❌ 直接操作 localStorage
```typescript
// 不要这样做
const token = localStorage.getItem('authToken');
```

2. ❌ 忘记保存过期时间
```typescript
// 会导致过期检查失效
localStorage.setItem('authToken', token);
```

3. ❌ 重复调用 getCurrentUser
```typescript
// 不需要每次都调用 API
const user = await getCurrentUser(token); // 已经保存在本地了
```

## 🎯 总结

**对于登录页面，最简单的方式就是：**

```typescript
import { login } from '@/app/lib/auth';

const { token, user } = await login({ username, password });
// 完成！所有事情都自动处理了
```

**如果需要更多控制，可以使用：**

```typescript
import { loginUser, getCurrentUser } from '@/app/lib/api';
import { saveAuth } from '@/app/lib/auth';

const { token } = await loginUser({ username, password });
const user = await getCurrentUser(token);
saveAuth(token, user); // 保存认证信息
```

选择适合你的方式即可！🎉
