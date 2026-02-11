'use client';

import { useEffect, useState } from 'react';
import { getProductsAuto, useAuthToken } from '@/app/lib/api';
import { WCProduct } from '@/app/components/layout/product-list/wc-product';
import { PublicProduct } from '@/app/components/layout/product-list/public-product';

interface ProductsClientWrapperProps {
  initialProducts: any[];
  children: (products: (WCProduct | PublicProduct)[]) => React.ReactNode;
}

/**
 * 客户端产品包装器
 * - 服务端传入初始产品（公开价格）
 * - 如果用户已登录，自动重新加载用户价格
 */
export function ProductsClientWrapper({ 
  initialProducts, 
  children 
}: ProductsClientWrapperProps) {
  const [products, setProducts] = useState(initialProducts);
  const token = useAuthToken();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // 如果用户已登录，重新加载以获取用户价格
    if (token) {
      setIsLoading(true);
      getProductsAuto(token, { per_page: 50 })
        .then((data) => {
          console.log('✅ 已更新为用户价格');
          setProducts(data);
        })
        .catch(console.error)
        .finally(() => setIsLoading(false));
    }
  }, [token]);

  return <>{children(products)}</>;
}
