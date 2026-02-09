// 定义品牌类型
export type BrandType = "brand-one" | "brand-two";

export interface Brand {
  name: BrandType;
  label: string;
  image?: string;
}

export const brands: Brand[] = [
  { name: "brand-one", label: "Brand One", image: "/images/logo/logo1.png" },
  { name: "brand-two", label: "Brand Two", image: "/images/logo/logo1.png" },
];

// 定义产品类别
export type CategoryType = "wheel" | "tyre" | "accessory";

export interface Category {
  value: CategoryType;
  label: string;
}

export const categories: Category[] = [
  { value: "wheel", label: "Wheels" },
  { value: "tyre", label: "Tyres" },
  { value: "accessory", label: "Accessories" },
];

export interface Product {
  id: string;
  category: CategoryType;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[]; // 多张产品图片（用于产品详情页展示）
  brand?: Brand;
  stock?: {
    available: number;
    sold: number;
  };
  description?: string;
  specifications?: string;
  rating?: number;
  createdAt?: string;
}

// 所有产品数据（添加category字段）
export const allProducts: Product[] = [
  // ===== wheel (8) =====
  {
    id: "a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d",
    category: "wheel",
    name: "All-Terrain Wheel Pro",
    description:
      "Durable all-terrain wheel designed for both city driving and off-road adventures.",
    price: 49.99,
    originalPrice: 59.99,
    image: "/images/pics/product-1.jpg",
    brand: brands[0],
    stock: { available: 20, sold: 80 },
    rating: 4.5,
    createdAt: "2025-08-15T10:30:00Z",
  },
  {
    id: "b2c3d4e5-f6a7-4b8c-9d0e-1f2a3b4c5d6e",
    category: "wheel",
    name: "Urban Performance Wheel",
    description:
      "Sleek performance wheel offering improved handling and a modern street look.",
    price: 79.99,
    image: "/images/pics/product-1.jpg",
    brand: brands[1],
    stock: { available: 15, sold: 40 },
    rating: 4.2,
    createdAt: "2025-06-22T14:20:00Z",
  },
  {
    id: "c3d4e5f6-a7b8-4c9d-0e1f-2a3b4c5d6e7f",
    category: "wheel",
    name: "Rugged Steel Wheel",
    description:
      "Heavy-duty steel wheel built for reliability in tough road conditions.",
    price: 99.99,
    originalPrice: 129.99,
    image: "/images/pics/product-1.jpg",
    brand: brands[0],
    stock: { available: 8, sold: 120 },
    rating: 4.8,
    createdAt: "2025-03-10T09:15:00Z",
  },
  {
    id: "d4e5f6a7-b8c9-4d0e-1f2a-3b4c5d6e7f8a",
    category: "wheel",
    name: "Lightweight Alloy Wheel",
    description:
      "Lightweight alloy construction improves fuel efficiency and driving comfort.",
    price: 35.0,
    image: "/images/pics/product-1.jpg",
    brand: brands[1],
    stock: { available: 30, sold: 10 },
    rating: 3.9,
    createdAt: "2025-11-05T16:45:00Z",
  },
  {
    id: "e5f6a7b8-c9d0-4e1f-2a3b-4c5d6e7f8a9b",
    category: "wheel",
    name: "Off-Road Sport Wheel",
    description:
      "Sporty off-road wheel with enhanced grip and aggressive styling.",
    price: 59.0,
    originalPrice: 69.0,
    image: "/images/pics/product-1.jpg",
    brand: brands[0],
    stock: { available: 12, sold: 55 },
    rating: 4.1,
    createdAt: "2025-07-18T11:00:00Z",
  },
  {
    id: "f6a7b8c9-d0e1-4f2a-3b4c-5d6e7f8a9b0c",
    category: "wheel",
    name: "Heavy Duty Wheel X",
    description:
      "Designed for heavy loads, perfect for trucks and utility vehicles.",
    price: 120.0,
    image: "/images/pics/product-1.jpg",
    brand: brands[1],
    stock: { available: 5, sold: 200 },
    rating: 4.9,
    createdAt: "2025-02-28T08:30:00Z",
  },
  {
    id: "a7b8c9d0-e1f2-4a3b-4c5d-6e7f8a9b0c1d",
    category: "wheel",
    name: "Classic Road Wheel",
    description:
      "Classic road wheel with timeless design and balanced performance.",
    price: 89.99,
    image: "/images/pics/product-1.jpg",
    brand: brands[0],
    stock: { available: 10, sold: 60 },
    rating: 4.3,
    createdAt: "2025-05-12T13:20:00Z",
  },
  {
    id: "b8c9d0e1-f2a3-4b4c-5d6e-7f8a9b0c1d2e",
    category: "wheel",
    name: "Premium Matte Wheel",
    description:
      "Premium matte finish wheel for a bold and refined appearance.",
    price: 45.5,
    image: "/images/pics/product-1.jpg",
    brand: brands[1],
    stock: { available: 25, sold: 30 },
    rating: 4.0,
    createdAt: "2025-09-30T15:10:00Z",
  },

  // ===== tyre (8) =====
  {
    id: "c9d0e1f2-a3b4-4c5d-6e7f-8a9b0c1d2e3f",
    category: "tyre",
    name: "High Grip Tyre",
    description:
      "High-performance tyre delivering excellent grip and braking in all conditions.",
    price: 199.0,
    originalPrice: 249.0,
    image: "/images/pics/product-2.jpg",
    brand: brands[0],
    stock: { available: 6, sold: 90 },
    rating: 4.7,
    createdAt: "2025-04-20T10:00:00Z",
  },
  {
    id: "d0e1f2a3-b4c5-4d6e-7f8a-9b0c1d2e3f4a",
    category: "tyre",
    name: "All-Season Tyre",
    description:
      "Reliable all-season tyre engineered for comfort and long-lasting wear.",
    price: 159.99,
    image: "/images/pics/product-2.jpg",
    brand: brands[1],
    stock: { available: 14, sold: 35 },
    rating: 4.4,
    createdAt: "2025-07-08T12:30:00Z",
  },
  {
    id: "e1f2a3b4-c5d6-4e7f-8a9b-0c1d2e3f4a5b",
    category: "tyre",
    name: "Performance Road Tyre",
    description:
      "Performance-focused tyre designed for precise handling and stability.",
    price: 220.0,
    image: "/images/pics/product-2.jpg",
    brand: brands[0],
    stock: { available: 4, sold: 150 },
    rating: 4.9,
    createdAt: "2025-01-15T09:45:00Z",
  },
  {
    id: "f2a3b4c5-d6e7-4f8a-9b0c-1d2e3f4a5b6c",
    category: "tyre",
    name: "Economy City Tyre",
    description: "Cost-effective tyre offering smooth and quiet city driving.",
    price: 99.99,
    image: "/images/pics/product-2.jpg",
    brand: brands[1],
    stock: { available: 18, sold: 22 },
    rating: 4.0,
    createdAt: "2025-10-25T14:00:00Z",
  },
  {
    id: "a3b4c5d6-e7f8-4a9b-0c1d-2e3f4a5b6c7d",
    category: "tyre",
    name: "Touring Comfort Tyre",
    description:
      "Touring tyre built for long-distance comfort and reduced road noise.",
    price: 139.0,
    originalPrice: 169.0,
    image: "/images/pics/product-2.jpg",
    brand: brands[0],
    stock: { available: 9, sold: 75 },
    rating: 4.2,
    createdAt: "2025-06-14T11:20:00Z",
  },
  {
    id: "b4c5d6e7-f8a9-4b0c-1d2e-3f4a5b6c7d8e",
    category: "tyre",
    name: "Sport Handling Tyre",
    description:
      "Sport tyre engineered for responsive steering and cornering control.",
    price: 180.0,
    image: "/images/pics/product-2.jpg",
    brand: brands[1],
    stock: { available: 7, sold: 110 },
    rating: 4.6,
    createdAt: "2025-03-22T08:50:00Z",
  },
  {
    id: "c5d6e7f8-a9b0-4c1d-2e3f-4a5b6c7d8e9f",
    category: "tyre",
    name: "Daily Drive Tyre",
    description:
      "Everyday tyre designed for balanced performance and durability.",
    price: 110.0,
    image: "/images/pics/product-2.jpg",
    brand: brands[0],
    stock: { available: 20, sold: 15 },
    rating: 3.8,
    createdAt: "2025-12-01T16:30:00Z",
  },
  {
    id: "d6e7f8a9-b0c1-4d2e-3f4a-5b6c7d8e9f0a",
    category: "tyre",
    name: "Premium Touring Tyre",
    description:
      "Premium touring tyre with enhanced comfort and long tread life.",
    price: 149.5,
    image: "/images/pics/product-2.jpg",
    brand: brands[1],
    stock: { available: 11, sold: 45 },
    rating: 4.1,
    createdAt: "2025-09-17T13:40:00Z",
  },

  // ===== accessory (8) =====
  {
    id: "e7f8a9b0-c1d2-4e3f-4a5b-6c7d8e9f0a1b",
    category: "accessory",
    name: "Compact Utility Kit",
    description:
      "Compact utility product designed for everyday automotive needs.",
    price: 29.99,
    image: "/images/pics/product-3.jpg",
    brand: brands[0],
    stock: { available: 50, sold: 20 },
    rating: 4.0,
    createdAt: "2025-11-12T10:15:00Z",
  },
  {
    id: "f8a9b0c1-d2e3-4f4a-5b6c-7d8e9f0a1b2c",
    category: "accessory",
    name: "Essential Auto Accessory",
    description:
      "Essential accessory that enhances convenience and vehicle functionality.",
    price: 39.99,
    originalPrice: 49.99,
    image: "/images/pics/product-3.jpg",
    brand: brands[1],
    stock: { available: 40, sold: 35 },
    rating: 4.3,
    createdAt: "2025-08-03T14:25:00Z",
  },
  {
    id: "a9b0c1d2-e3f4-4a5b-6c7d-8e9f0a1b2c3d",
    category: "accessory",
    name: "Multi-Purpose Car Tool",
    description:
      "Versatile car tool suitable for maintenance and emergency situations.",
    price: 59.0,
    image: "/images/pics/product-3.jpg",
    brand: brands[0],
    stock: { available: 22, sold: 60 },
    rating: 4.6,
    createdAt: "2025-05-28T09:40:00Z",
  },
  {
    id: "b0c1d2e3-f4a5-4b6c-7d8e-9f0a1b2c3d4e",
    category: "accessory",
    name: "Budget Vehicle Add-on",
    description: "Affordable add-on offering practical everyday value.",
    price: 25.0,
    image: "/images/pics/product-3.jpg",
    brand: brands[1],
    stock: { available: 80, sold: 10 },
    rating: 3.9,
    createdAt: "2026-01-20T11:50:00Z",
  },
  {
    id: "c1d2e3f4-a5b6-4c7d-8e9f-0a1b2c3d4e5f",
    category: "accessory",
    name: "Premium Vehicle Add-on",
    description:
      "Premium add-on designed to enhance comfort and driving experience.",
    price: 45.0,
    image: "/images/pics/product-3.jpg",
    brand: brands[0],
    stock: { available: 33, sold: 44 },
    rating: 4.1,
    createdAt: "2025-07-30T13:10:00Z",
  },
  {
    id: "d2e3f4a5-b6c7-4d8e-9f0a-1b2c3d4e5f6a",
    category: "accessory",
    name: "Advanced Car Accessory",
    description:
      "Advanced accessory offering improved usability and durability.",
    price: 75.0,
    originalPrice: 95.0,
    image: "/images/pics/product-3.jpg",
    brand: brands[1],
    stock: { available: 12, sold: 90 },
    rating: 4.7,
    createdAt: "2025-04-05T08:20:00Z",
  },
  {
    id: "e3f4a5b6-c7d8-4e9f-0a1b-2c3d4e5f6a7b",
    category: "accessory",
    name: "Everyday Car Essential",
    description: "Reliable everyday essential suitable for all vehicle types.",
    price: 34.99,
    image: "/images/pics/product-3.jpg",
    brand: brands[0],
    stock: { available: 60, sold: 18 },
    rating: 4.0,
    createdAt: "2025-10-18T15:35:00Z",
  },
  {
    id: "f4a5b6c7-d8e9-4f0a-1b2c-3d4e5f6a7b8c",
    category: "accessory",
    name: "Professional Auto Accessory",
    description:
      "Professional-grade accessory built for performance and longevity.",
    price: 89.0,
    image: "/images/pics/product-3.jpg",
    brand: brands[1],
    stock: { available: 9, sold: 120 },
    rating: 4.8,
    createdAt: "2025-02-14T07:55:00Z",
  },
];
