'use client';

import { useState, useEffect } from 'react';
import { getProductsAuto, useAuthToken } from '@/app/lib/api';
import { WCProduct } from '@/app/components/layout/product-list/wc-product';
import { PublicProduct } from '@/app/components/layout/product-list/public-product';
import { Box, CircularProgress, Typography } from '@mui/material';

interface ProductsLoaderProps {
  children: (products: (WCProduct | PublicProduct)[], isLoading: boolean) => React.ReactNode;
  params?: {
    per_page?: number;
    page?: number;
    category?: string;
    search?: string;
  };
}

/**
 * 产品加载器组件
 * 自动根据登录状态加载产品
 * - 已登录：加载用户价格
 * - 未登录：加载公开价格
 */
export function ProductsLoader({ children, params }: ProductsLoaderProps) {
  const [products, setProducts] = useState<(WCProduct | PublicProduct)[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // 从 authStore 获取 token
  const token = useAuthToken();

  useEffect(() => {
    async function loadProducts() {
      try {
        setIsLoading(true);
        setError(null);
        
        // 🎯 核心：自动根据 token 选择 API
        const data = await getProductsAuto(token, params);
        setProducts(data);
      } catch (err) {
        console.error('Failed to load products:', err);
        setError('加载产品失败');
      } finally {
        setIsLoading(false);
      }
    }

    loadProducts();
  }, [token, params?.per_page, params?.page, params?.category, params?.search]);

  if (error) {
    return (
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  return <>{children(products, isLoading)}</>;
}
