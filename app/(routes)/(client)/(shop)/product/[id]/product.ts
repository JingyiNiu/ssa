import { Product } from "@/app/components/layout/product-list/product";

export interface ProductDetails extends Product {
  images: string[];
  reviews: Review[];
  features?: string[];
}

export interface Review {
  id: number;
  rating: number;
  comment: string;
  createdAt: string;
}
