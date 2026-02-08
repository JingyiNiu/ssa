import { Product } from "@/app/components/layout/product-list/product";

export interface ProductDetails extends Product {
  images: string[];
}
