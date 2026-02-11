import { Product } from "@/app/components/layout/product-list/mock-product";

export interface ProductDetails extends Product {
  images: string[];
  reviews: Review[];
  features?: string[];
}

export interface Review {
  id: string;
  rating: number;
  comment: string;
  createdAt: string;
}
