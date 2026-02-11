export interface PublicProduct {
  id: number
  name: string
  slug: string
  parent: number
  type: string
  variation: string
  permalink: string
  sku: string
  short_description: string
  description: string
  on_sale: boolean
  prices: Prices
  price_html: string
  average_rating: string
  review_count: number
  images: Image[]
  categories: Category[]
  tags: Tag[]
  brands: any[]
  attributes: any[]
  variations: any[]
  grouped_products: any[]
  has_options: boolean
  is_purchasable: boolean
  is_in_stock: boolean
  is_on_backorder: boolean
  low_stock_remaining: any
  stock_availability: StockAvailability
  sold_individually: boolean
  add_to_cart: AddToCart
  extensions: Extensions
}

export interface Prices {
  price: string
  regular_price: string
  sale_price: string
  price_range: any
  currency_code: string
  currency_symbol: string
  currency_minor_unit: number
  currency_decimal_separator: string
  currency_thousand_separator: string
  currency_prefix: string
  currency_suffix: string
}

export interface Image {
  id: number
  src: string
  thumbnail: string
  srcset: string
  sizes: string
  name: string
  alt: string
}

export interface Category {
  id: number
  name: string
  slug: string
  link: string
}

export interface Tag {
  id: number
  name: string
  slug: string
  link: string
}

export interface StockAvailability {
  text: string
  class: string
}

export interface AddToCart {
  text: string
  description: string
  url: string
  single_text: string
  minimum: number
  maximum: number
  multiple_of: number
}

export interface Extensions {}
