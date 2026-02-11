import { create } from "zustand";
import { persist } from "zustand/middleware";
import { WCProduct } from "@/app/components/layout/product-list/wc-product";
import { PublicProduct } from "@/app/components/layout/product-list/public-product";
import { getProductPrice } from "../lib/api";

export interface CartItem {
  product: WCProduct | PublicProduct;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  
  // === 配置项 ===
  taxRate: number; // GST 税率
  shippingFee: number; // 固定运费
  freeShippingThreshold: number; // 满额免运费的门槛
  
  // === 商品操作方法 ===
  // 添加商品到购物车
  addItem: (product: WCProduct | PublicProduct, quantity?: number) => void;
  // 移除商品
  removeItem: (productId: number) => void;
  // 更新商品数量
  updateQuantity: (productId: number, quantity: number) => void;
  // 增加数量
  incrementQuantity: (productId: number) => void;
  // 减少数量
  decrementQuantity: (productId: number) => void;
  // 清空购物车
  clearCart: () => void;
  
  // === 查询方法 ===
  // 获取购物车商品总数
  getTotalItems: () => number;
  // 获取特定商品的数量
  getItemQuantity: (productId: string) => number;
  
  // === 价格计算方法 ===
  // 获取商品小计（不含税和运费）
  getSubtotal: () => number;
  // 获取 GST 税额
  getTax: () => number;
  // 获取运费（根据小计判断是否免费）
  getShipping: () => number;
  // 获取总计（小计 + 税 + 运费）
  getTotal: () => number;
  // 向后兼容：getTotalPrice 等同于 getSubtotal
  getTotalPrice: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      
      // === 配置项 ===
      taxRate: 0.15, // 15% GST
      shippingFee: 10.0, // $10 固定运费
      freeShippingThreshold: 100.0, // 满 $100 免运费

      addItem: (product, quantity = 1) => {
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.product.id === product.id
          );

          if (existingItem) {
            // 如果商品已存在，增加数量
            return {
              items: state.items.map((item) =>
                item.product.id === product.id
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              ),
            };
          } else {
            // 如果商品不存在，添加新商品
            return {
              items: [...state.items, { product, quantity }],
            };
          }
        });
      },

      removeItem: (productId) => {
        set((state) => ({
          items: state.items.filter((item) => item.product.id !== productId),
        }));
      },

      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productId);
          return;
        }

        set((state) => ({
          items: state.items.map((item) =>
            item.product.id === productId ? { ...item, quantity } : item
          ),
        }));
      },

      incrementQuantity: (productId) => {
        set((state) => ({
          items: state.items.map((item) =>
            item.product.id === productId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        }));
      },

      decrementQuantity: (productId) => {
        set((state) => {
          const item = state.items.find((i) => i.product.id === productId);
          if (item && item.quantity <= 1) {
            return {
              items: state.items.filter((i) => i.product.id !== productId),
            };
          }

          return {
            items: state.items.map((item) =>
              item.product.id === productId
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          };
        });
      },

      clearCart: () => {
        set({ items: [] });
      },

      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },

      getItemQuantity: (productId) => {
        const item = get().items.find((item) => item.product.id === Number(productId));
        return item ? item.quantity : 0;
      },

      // === 价格计算方法 ===
      getSubtotal: () => {
        return get().items.reduce(
          (total, item) => total + parseFloat(getProductPrice(item.product)) * Number(item.quantity),
          0
        );
      },

      getTax: () => {
        const subtotal = get().getSubtotal();
        return subtotal * get().taxRate;
      },

      getShipping: () => {
        const subtotal = get().getSubtotal();
        // 如果小计达到免运费门槛，运费为 0，否则收取固定运费
        return subtotal >= get().freeShippingThreshold ? 0 : get().shippingFee;
      },

      getTotal: () => {
        const subtotal = get().getSubtotal();
        const tax = get().getTax();
        const shipping = get().getShipping();
        return subtotal + tax + shipping;
      },

      // 向后兼容：getTotalPrice 等同于 getSubtotal
      getTotalPrice: () => {
        return get().getSubtotal();
      },
    }),
    {
      name: "cart-storage", // localStorage key
    }
  )
);
