# Auth Store 使用指南

## 概述

项目现在使用 **Zustand** 进行全局认证状态管理，提供了响应式的用户登录状态。

## 架构

```
app/
├── store/
│   ├── authStore.ts        # Zustand 认证状态管理
│   └── cartStore.ts        # 购物车状态管理（已存在）
├── lib/
│   └── auth/
│       └── index.ts        # 认证工具函数（已集成 authStore）
```

## 核心功能

### 1. authStore 状态

```typescript
interface AuthStore {
  user: User | null;           // 当前用户信息
  token: string | null;        // JWT token
  isAuthenticated: boolean;    // 是否已登录
  
  setAuth: (token, user) => void;     // 设置认证信息
  clearAuth: () => void;               // 清除认证信息
  updateUser: (user) => void;          // 更新用户信息
  initialize: () => void;              // 初始化（检查 token）
}
```

### 2. 在 React 组件中使用

```typescript
import { useAuthStore } from '@/app/lib/auth';

function MyComponent() {
  // 方式 1: 获取单个状态（推荐，性能最佳）
  const isLoggedIn = useAuthStore((state) => state.isAuthenticated);
  const user = useAuthStore((state) => state.user);
  
  // 方式 2: 获取整个 store
  const { isAuthenticated, user, token } = useAuthStore();
  
  return (
    <div>
      {isLoggedIn ? (
        <p>欢迎, {user?.username}!</p>
      ) : (
        <p>请登录</p>
      )}
    </div>
  );
}
```

### 3. 在非 React 代码中使用

```typescript
import { useAuthStore } from '@/app/store/authStore';

// 获取当前状态
const state = useAuthStore.getState();
console.log(state.isAuthenticated);

// 调用方法
useAuthStore.getState().clearAuth();
```

## 优势

### ✅ 响应式更新
- 登录/登出自动触发所有相关组件重新渲染
- 不需要手动刷新页面或触发状态更新

### ✅ 自动持久化
- 使用 Zustand persist 中间件
- 自动保存到 localStorage（key: `auth-storage`）
- 页面刷新后状态自动恢复

### ✅ 跨标签页同步
- localStorage 变化会自动同步到其他标签页
- 在一个标签页登出，其他标签页也会更新

### ✅ 类型安全
- 完整的 TypeScript 类型支持
- IDE 自动补全和类型检查

## 工作流程

### 登录流程

```typescript
// 1. 用户在 LoginPage 提交表单
await login({ username, password });

// 2. login 函数执行：
//    a. 调用 API 获取 token
//    b. 调用 API 获取用户信息
//    c. 保存到 localStorage（向后兼容）
//    d. 调用 authStore.setAuth(token, user)

// 3. authStore 更新状态
//    - isAuthenticated = true
//    - user = {...}
//    - token = "..."

// 4. 所有订阅的组件自动重新渲染
//    - HeaderActions 显示登出按钮
//    - 显示购物车图标
//    - 显示 Account 图标
```

### 登出流程

```typescript
// 1. 用户点击登出按钮
logout();

// 2. logout 函数执行：
//    a. 清除 localStorage
//    b. 调用 authStore.clearAuth()
//    c. 跳转到登录页

// 3. authStore 更新状态
//    - isAuthenticated = false
//    - user = null
//    - token = null

// 4. 所有订阅的组件自动重新渲染
//    - HeaderActions 显示登录按钮
//    - 隐藏购物车图标
//    - 隐藏登出按钮
```

## 示例：HeaderActions.tsx

**之前的方式（useState + useEffect）：**
```typescript
const [isLoggedIn, setIsLoggedIn] = useState(false);

useEffect(() => {
  setIsLoggedIn(isAuthenticated());
}, []); // ❌ 只检查一次，不会自动更新
```

**现在的方式（Zustand）：**
```typescript
const isLoggedIn = useAuthStore((state) => state.isAuthenticated);
const initializeAuth = useAuthStore((state) => state.initialize);

useEffect(() => {
  initializeAuth(); // ✅ 初始化时检查 token
}, [initializeAuth]);

// ✅ isLoggedIn 会自动响应 store 变化
```

## 向后兼容

现有的认证函数仍然可以使用，它们已经被更新为同时操作 localStorage 和 authStore：

```typescript
// 这些函数仍然可用
import { 
  login,
  logout,
  isAuthenticated,
  getUser,
  getToken,
  saveAuth,
  clearAuth 
} from '@/app/lib/auth';
```

## 调试技巧

### 1. 查看当前状态
```typescript
console.log(useAuthStore.getState());
```

### 2. 查看 localStorage
```javascript
// 在浏览器控制台
localStorage.getItem('auth-storage')
```

### 3. 订阅状态变化
```typescript
useAuthStore.subscribe((state) => {
  console.log('Auth state changed:', state);
});
```

## 性能优化

使用 **选择器模式** 避免不必要的重新渲染：

```typescript
// ✅ 好：只订阅需要的状态
const isLoggedIn = useAuthStore((state) => state.isAuthenticated);

// ❌ 不好：订阅整个 store（任何变化都会触发渲染）
const store = useAuthStore();
```

## 总结

通过使用 Zustand authStore，我们实现了：
- 🎯 全局统一的认证状态管理
- 🔄 自动响应式更新
- 💾 自动持久化
- 🔄 跨标签页同步
- 🛡️ 完整的 TypeScript 类型支持
- ⚡ 高性能的选择器订阅
