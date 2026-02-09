# 购物车状态管理 (Cart Store)

使用 Zustand 实现的全局购物车状态管理。

## 安装依赖

如果还没有安装 Zustand，请运行：

```bash
npm install zustand
```

## Store 功能

### `cartStore.ts`

提供以下功能：

#### 状态
- `items: CartItem[]` - 购物车商品列表

#### 方法
- `addItem(product, quantity?)` - 添加商品到购物车
- `removeItem(productId)` - 从购物车移除商品
- `updateQuantity(productId, quantity)` - 更新商品数量
- `incrementQuantity(productId)` - 增加商品数量
- `decrementQuantity(productId)` - 减少商品数量
- `clearCart()` - 清空购物车
- `getTotalItems()` - 获取购物车商品总数
- `getTotalPrice()` - 获取购物车总价
- `getItemQuantity(productId)` - 获取特定商品的数量

## 使用示例

### 1. 在组件中使用 Store

```tsx
import { useCartStore } from "@/app/store/cartStore";

function MyComponent() {
  const { items, addItem, getTotalItems } = useCartStore();
  
  return (
    <div>
      <p>Cart has {getTotalItems()} items</p>
    </div>
  );
}
```

### 2. 使用 AddToCartButton 组件

```tsx
import { AddToCartButton } from "@/app/components/cart/AddToCartButton";
import { Product } from "@/app/components/layout/product-list/product";

function ProductCard({ product }: { product: Product }) {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      
      {/* 按钮样式 */}
      <AddToCartButton product={product} variant="button" />
      
      {/* 图标样式 */}
      <AddToCartButton product={product} variant="icon" />
    </div>
  );
}
```

### 3. 使用 CartIcon 组件（导航栏）

```tsx
import { CartIcon } from "@/app/components/cart/CartIcon";

function Navbar() {
  return (
    <nav>
      <CartIcon color="white" />
    </nav>
  );
}
```

### 4. 创建购物车页面

```tsx
"use client";

import { useCartStore } from "@/app/store/cartStore";
import { Box, Typography, Button } from "@mui/material";

export default function CartPage() {
  const { items, removeItem, getTotalPrice, clearCart } = useCartStore();
  
  return (
    <Box>
      <Typography variant="h4">Shopping Cart</Typography>
      
      {items.map((item) => (
        <Box key={item.product.id}>
          <Typography>{item.product.name}</Typography>
          <Typography>Quantity: {item.quantity}</Typography>
          <Typography>${item.product.price * item.quantity}</Typography>
          <Button onClick={() => removeItem(item.product.id)}>
            Remove
          </Button>
        </Box>
      ))}
      
      <Typography variant="h6">
        Total: ${getTotalPrice().toFixed(2)}
      </Typography>
      
      <Button onClick={clearCart}>Clear Cart</Button>
    </Box>
  );
}
```

## 数据持久化

购物车数据会自动保存到 `localStorage`，刷新页面后数据不会丢失。

存储键名：`cart-storage`

## TypeScript 类型

```typescript
interface CartItem {
  product: Product;
  quantity: number;
}
```

## 特性

- ✅ 自动数据持久化（localStorage）
- ✅ TypeScript 类型安全
- ✅ 简单易用的 API
- ✅ 实时响应式更新
- ✅ 防止重复添加（自动合并数量）
- ✅ 自动清理（数量为0时移除）
