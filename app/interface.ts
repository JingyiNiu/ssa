interface Home {
  popular_products: Product[];
  // 用于主页的Popular Products区域，前端会根据每个product的rating，total_sales和uploaded_at去排序
  deal_of_the_day: Product[];
  best_sellers: Product[];
}

interface Product {
  id: string;
  slug: string;
  product_name: string;
  is_on_sale: boolean;
  rating: number;
  total_sales: number;
  uploaded_at: string;
  brand:Brand;
  price: Price; // 这里的价格是同一个产品里,价格最便宜的型号的价格
  images: Image[];
}

interface Brand {
  id: string;
  name: string;
  logo_url: string;
  // 以及其他brand相关信息
}

//无论登录与否，几级会员，都按照这个格式返回价格数据。没有的数据null就好
interface Price {
  regular_price: number;
  sale_price: number;
  calculated_price: number;
  // 以及其他price相关信息
}

interface Image {
  src: string;
  // 以及其他image相关信息
}

// 产品详情页面 /product/{slug}
interface ProductDetails {
  id: string;
  slug: string;
  product_name: string;
  is_on_sale: boolean;
  rating: number;
  images: Image[];
  variations: Variation[]; // 同一产品不同规格的数据
  description: string;
  specifications: string;
  reviews: Review[];
}

interface Variation {
  id: string;
  code: string;
  price: Price;
  stock: Stock;
}

interface Stock {
  available: number;
  sold: number;
  // 以及其他stock相关信息
}

interface Review {
  id: string;
  rating: number;
  comment: string;
  created_at: string;
  // 以及其他review相关信息
}
