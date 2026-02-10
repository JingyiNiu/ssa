# API 使用示例

## 🚀 快速开始

### 1. 用户登录示例

```typescript
// app/login/page.tsx
'use client';

import { useState } from 'react';
import { loginUser, getCurrentUser, handleAPIError } from '@/app/lib/api';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // 登录获取 Token
      const { token } = await loginUser({ username, password });
      
      // 保存 Token
      localStorage.setItem('authToken', token);
      
      // 获取用户信息
      const user = await getCurrentUser(token);
      localStorage.setItem('user', JSON.stringify(user));
      
      alert(`Login successful! Welcome ${user.name}`);
      
      // 跳转到首页
      window.location.href = '/';
      
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
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
}
```

### 2. 产品列表页面示例

```typescript
// app/products/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { getProducts, getPublicProducts, handleAPIError } from '@/app/lib/api';
import type { WCProduct } from '@/app/lib/api';

export default function ProductsPage() {
  const [products, setProducts] = useState<WCProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadProducts() {
      try {
        const token = localStorage.getItem('authToken');
        
        let data: WCProduct[];
        if (token) {
          // 已登录：获取含用户价格的产品
          data = await getProducts(token, { per_page: 20 });
        } else {
          // 未登录：获取公开产品
          data = await getPublicProducts({ per_page: 20 });
        }
        
        setProducts(data);
      } catch (err) {
        setError(handleAPIError(err));
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Products</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ddd', padding: '10px' }}>
            {product.images[0] && (
              <img 
                src={product.images[0].src} 
                alt={product.name}
                style={{ width: '100%' }}
              />
            )}
            <h3>{product.name}</h3>
            <p>SKU: {product.sku}</p>
            <p>
              Price: ${product.calculated_price || product.price}
              {product.calculated_price && (
                <span style={{ color: 'green' }}> (Member Price)</span>
              )}
            </p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
```

### 3. 购物车页面示例

```typescript
// app/cart/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { 
  getCart, 
  updateCartItem, 
  removeCartItem, 
  clearCart,
  handleAPIError 
} from '@/app/lib/api';
import type { Cart } from '@/app/lib/api';

export default function CartPage() {
  const [cart, setCart] = useState<Cart | null>(null);
  const [loading, setLoading] = useState(true);

  const loadCart = async () => {
    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        throw new Error('Please login first');
      }
      
      const data = await getCart(token);
      setCart(data);
    } catch (err) {
      console.error(handleAPIError(err));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCart();
  }, []);

  const handleUpdateQuantity = async (itemKey: string, quantity: number) => {
    try {
      const token = localStorage.getItem('authToken');
      if (!token) return;
      
      const updatedCart = await updateCartItem(token, itemKey, { quantity });
      setCart(updatedCart);
    } catch (err) {
      alert(handleAPIError(err));
    }
  };

  const handleRemoveItem = async (itemKey: string) => {
    if (!confirm('Are you sure you want to remove this item?')) return;
    
    try {
      const token = localStorage.getItem('authToken');
      if (!token) return;
      
      const updatedCart = await removeCartItem(token, itemKey);
      setCart(updatedCart);
    } catch (err) {
      alert(handleAPIError(err));
    }
  };

  const handleClearCart = async () => {
    if (!confirm('Are you sure you want to clear the cart?')) return;
    
    try {
      const token = localStorage.getItem('authToken');
      if (!token) return;
      
      await clearCart(token);
      await loadCart();
    } catch (err) {
      alert(handleAPIError(err));
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!cart || cart.item_count === 0) {
    return <div>Your cart is empty</div>;
  }

  return (
    <div>
      <h1>Shopping Cart ({cart.item_count} items)</h1>
      
      {cart.items.map((item) => (
        <div key={item.item_key} style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
          <img src={item.featured_image} alt={item.name} style={{ width: '100px' }} />
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
          <div>
            Quantity: 
            <button onClick={() => handleUpdateQuantity(item.item_key, item.quantity.value - 1)}>
              -
            </button>
            <span> {item.quantity.value} </span>
            <button onClick={() => handleUpdateQuantity(item.item_key, item.quantity.value + 1)}>
              +
            </button>
          </div>
          <p>Subtotal: ${item.totals.total}</p>
          <button onClick={() => handleRemoveItem(item.item_key)}>Remove</button>
        </div>
      ))}
      
      <div style={{ marginTop: '20px', borderTop: '2px solid #333', paddingTop: '10px' }}>
        <h2>Total: ${cart.totals.total}</h2>
        <button onClick={handleClearCart}>Clear Cart</button>
        <button>Checkout</button>
      </div>
    </div>
  );
}
```

### 4. 添加到购物车功能

```typescript
// components/AddToCartButton.tsx
'use client';

import { useState } from 'react';
import { addToCart, handleAPIError } from '@/app/lib/api';

interface AddToCartButtonProps {
  productId: number;
  productName: string;
}

export default function AddToCartButton({ productId, productName }: AddToCartButtonProps) {
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = async () => {
    setLoading(true);
    
    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        alert('Please login first');
        return;
      }
      
      const cart = await addToCart(token, {
        id: productId,
        quantity: quantity,
      });
      
      alert(`${productName} has been added to cart!\nCart now has ${cart.item_count} items`);
      
      // 更新购物车图标数量
      window.dispatchEvent(new CustomEvent('cartUpdated', { detail: cart }));
      
    } catch (err) {
      alert(handleAPIError(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        style={{ width: '60px', marginRight: '10px' }}
      />
      <button onClick={handleAddToCart} disabled={loading}>
        {loading ? 'Adding...' : 'Add to Cart'}
      </button>
    </div>
  );
}
```

### 5. 搜索产品示例

```typescript
// app/search/page.tsx
'use client';

import { useState } from 'react';
import { getProducts, getPublicProducts, handleAPIError } from '@/app/lib/api';
import type { WCProduct } from '@/app/lib/api';

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState<WCProduct[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    
    setLoading(true);
    
    try {
      const token = localStorage.getItem('authToken');
      
      let data: WCProduct[];
      if (token) {
        data = await getProducts(token, { 
          search: searchTerm,
          per_page: 20 
        });
      } else {
        data = await getPublicProducts({ 
          search: searchTerm,
          per_page: 20 
        });
      }
      
      setProducts(data);
    } catch (err) {
      alert(handleAPIError(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Search Products</h1>
      
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search product name, SKU..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: '300px', padding: '10px' }}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>
      
      {products.length > 0 && (
        <div>
          <h2>Found {products.length} products</h2>
          {/* 显示产品列表 */}
        </div>
      )}
      
      {!loading && products.length === 0 && searchTerm && (
        <p>No products found</p>
      )}
    </div>
  );
}
```

### 6. 通过 SKU 查找产品

```typescript
// app/product/[sku]/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { getProductBySku, handleAPIError } from '@/app/lib/api';
import type { WCProduct } from '@/app/lib/api';

export default function ProductBySKUPage({ params }: { params: { sku: string } }) {
  const [product, setProduct] = useState<WCProduct | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProduct() {
      try {
        const token = localStorage.getItem('authToken');
        
        if (!token) {
          alert('Please login first');
          return;
        }
        
        const data = await getProductBySku(token, params.sku);
        setProduct(data);
        
      } catch (err) {
        alert(handleAPIError(err));
      } finally {
        setLoading(false);
      }
    }

    loadProduct();
  }, [params.sku]);

  if (loading) return <div>Loading...</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>SKU: {product.sku}</p>
      <p>Price: ${product.calculated_price || product.price}</p>
      {/* 产品详情 */}
    </div>
  );
}
```

### 7. 价格验证示例

```typescript
// utils/priceVerification.ts
import { verifyCartPrices } from '@/app/lib/api';

export async function verifyAndUpdateCart(token: string, cartItems: any[]) {
  // 获取所有产品 ID
  const productIds = cartItems.map(item => item.id);
  
  // 从服务器获取最新价格
  const products = await verifyCartPrices(token, productIds);
  
  // 验证价格是否匹配
  const pricesMismatch = cartItems.some(cartItem => {
    const serverProduct = products.find(p => p.id === cartItem.id);
    if (!serverProduct) return true;
    
    const serverPrice = parseFloat(serverProduct.calculated_price || serverProduct.price);
    const cartPrice = parseFloat(cartItem.price);
    
    return Math.abs(serverPrice - cartPrice) > 0.01;
  });
  
  if (pricesMismatch) {
    console.warn('Prices have been updated. Please refresh your cart.');
    return { valid: false, products };
  }
  
  return { valid: true, products };
}
```

## 💡 实用工具函数

### Token 管理

```typescript
// utils/auth.ts
export const auth = {
  getToken(): string | null {
    return localStorage.getItem('authToken');
  },
  
  setToken(token: string): void {
    localStorage.setItem('authToken', token);
  },
  
  clearToken(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
  },
  
  isAuthenticated(): boolean {
    return !!this.getToken();
  },
  
  getUser(): any | null {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  },
};
```

### API 请求 Hook

```typescript
// hooks/useAPI.ts
import { useState, useCallback } from 'react';
import { handleAPIError } from '@/app/lib/api';

export function useAPI<T>(apiFunc: (...args: any[]) => Promise<T>) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const execute = useCallback(async (...args: any[]) => {
    setLoading(true);
    setError('');
    
    try {
      const result = await apiFunc(...args);
      setData(result);
      return result;
    } catch (err) {
      const errorMessage = handleAPIError(err);
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [apiFunc]);

  return { data, loading, error, execute };
}

// 使用示例
import { getProducts } from '@/app/lib/api';

function ProductList() {
  const { data: products, loading, error, execute } = useAPI(getProducts);
  
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      execute(token, { per_page: 20 });
    }
  }, [execute]);
  
  // ...
}
```

这些示例涵盖了所有主要的 API 使用场景！🎉
