"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { getProductsAuto, useAuthToken } from "@/app/lib/api";
import { useAuthStore } from "@/app/lib/auth";
import { WCProduct } from "@/app/components/layout/product-list/wc-product";
import { PublicProduct } from "@/app/components/layout/product-list/public-product";

// 创建 Context
interface ProductsContextType {
  products: WCProduct[] | PublicProduct[];
  isLoading: boolean;
  isUserPrices: boolean; // 是否显示用户价格
}

const ProductsContext = createContext<ProductsContextType | null>(null);

interface ProductsProviderProps {
  initialProducts: any[];
  serverToken?: string | null; // 服务端使用的 token
  children: ReactNode;
}

/**
 * 产品数据 Provider
 * - 接收服务端预加载的产品
 * - 接收服务端使用的 token（用于判断是否需要重新加载）
 * - 检测用户登录状态
 * - 只在 token 真正变化时重新加载
 * - 通过 Context 分发产品数据
 */
export function ProductsProvider({
  initialProducts,
  serverToken = null,
  children,
}: ProductsProviderProps) {
  const [products, setProducts] = useState(initialProducts);
  const [isLoading, setIsLoading] = useState(false);
  const [isUserPrices, setIsUserPrices] = useState(!!serverToken);

  const token = useAuthToken();
  const isHydrated = useAuthStore((state) => state.isHydrated);

  // 记录上一次的 token，初始值为服务端的 token
  const [previousToken, setPreviousToken] = useState<string | null>(serverToken);

  useEffect(() => {
    // 等待 hydration 完成
    if (!isHydrated) return;

    // 🎯 关键优化：只在 token 真正变化时重新加载
    // 如果客户端 token 和上一次（服务端）的 token 相同，跳过重新加载
    if (token === previousToken) {
      console.log("[ProductsProvider] Token unchanged (server and client match), skipping reload", {
        token: token ? `${token.substring(0, 20)}...` : null,
        previousToken: previousToken ? `${previousToken.substring(0, 20)}...` : null,
      });
      return;
    }

    console.log("[ProductsProvider] Token changed, need to reload", {
      oldToken: previousToken ? `${previousToken.substring(0, 20)}...` : null,
      newToken: token ? `${token.substring(0, 20)}...` : null,
    });

    setPreviousToken(token);

    // 如果已登录，重新加载用户价格
    if (token) {
      console.log("[ProductsProvider] Reloading user prices...");
      setIsLoading(true);

      getProductsAuto(token, { per_page: 50 })
        .then((data) => {
          setProducts(data);
          setIsUserPrices(true);
          console.log("[ProductsProvider] Updated user prices", data);
        })
        .catch((error) => {
          console.error("[ProductsProvider] Failed to load user prices:", error);
          // 失败时保持使用初始的公开价格
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      console.log("[ProductsProvider] Not logged in, using public prices");
      setIsUserPrices(false);
      setIsLoading(false);
    }
  }, [isHydrated, token, previousToken]);

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
    throw new Error("useProducts must be used within ProductsProvider");
  }

  return context;
}
