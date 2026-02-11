'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { getProductsAuto, useAuthToken } from '@/app/lib/api';
import { useAuthStore } from '@/app/lib/auth';
import { WCProduct } from '@/app/components/layout/product-list/wc-product';
import { PublicProduct } from '@/app/components/layout/product-list/public-product';

// 创建 Context
interface ProductsContextType {
  products: WCProduct[] | PublicProduct[];
  isLoading: boolean;
  isUserPrices: boolean; // 是否显示用户价格
}

const ProductsContext = createContext<ProductsContextType | null>(null);

interface ProductsProviderProps {
  initialProducts: any[];
  children: ReactNode;
}

/**
 * 产品数据 Provider
 * - 接收服务端预加载的产品（公开价格）
 * - 检测用户登录状态
 * - 如果已登录，自动重新加载用户价格
 * - 通过 Context 分发产品数据
 */
export function ProductsProvider({ initialProducts, children }: ProductsProviderProps) {
  const [products, setProducts] = useState(initialProducts);
  const [isLoading, setIsLoading] = useState(false);
  const [isUserPrices, setIsUserPrices] = useState(false);
  
  const token = useAuthToken();
  const isHydrated = useAuthStore((state) => state.isHydrated);

  useEffect(() => {
    // 等待 hydration 完成
    if (!isHydrated) return;
    
    // 如果已登录，重新加载用户价格
    if (token) {
      console.log('🔄 用户已登录，重新加载用户价格...');
      setIsLoading(true);
      
      getProductsAuto(token, { per_page: 50 })
        .then((data) => {
          setProducts(data);
          setIsUserPrices(true);
          console.log('data', data);
          console.log('✅ 已更新为用户价格');
        })
        .catch((error) => {
          console.error('❌ 加载用户价格失败:', error);
          // 失败时保持使用初始的公开价格
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      console.log('🌐 用户未登录，使用公开价格');
      setIsUserPrices(false);
    }
  }, [isHydrated, token]);

  const value = {
    products,
    isLoading,
    isUserPrices,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}

/**
 * 自定义 Hook - 获取产品数据
 */
export function useProducts() {
  const context = useContext(ProductsContext);
  
  if (!context) {
    throw new Error('useProducts must be used within ProductsProvider');
  }
  
  return context;
}
