import { PublicProduct } from "./public-product";

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
export const allProducts: PublicProduct[] = [
  {
    id: 1489,
    name: "285/45R22 BLACKHAWK HS01 114WXL 2854522",
    slug: "custom-wheels-gold-rts",
    parent: 0,
    type: "simple",
    variation: "",
    permalink:
      "https://darkred-goldfish-510640.hostingersite.com/product/custom-wheels-gold-rts/",
    sku: "4128",
    short_description:
      "<p>Painstakingly developed to enhance driving comfort and safety, these top-of-the-range Radar tires provide optimum balance between peak performance and comfort.</p>",
    description:
      '<p>[vc_row][vc_column width=&#8221;1/2&#8243;][vc_column_text]</p>\n<div class="row">\n<div class="large-12 columns margin-bottom-10" style="font-weight: 300">\n<p>Painstakingly developed to enhance driving comfort and safety, these top-of-the-range Radar tires provide optimum balance between peak performance and comfort.</p>\n<p>Breakthrough technologies and industry-leading materials allow Radar Tires to guarantee the highest level of dependability. The solid-state construction of the tires ensures long-lasting wear and high durability.</p>\n<p>Offering extraordinary safety and handling ability at an incredible value, they ensure to provide a seamless and quite ride for many years ahead. If you place a high value on solidity, credibility, and efficiency, you can’t beat Radar Tires. They are the most powerful option you can choose. more details on</p>\n</div>\n</div>\n<p>[/vc_column_text][/vc_column][vc_column width=&#8221;1/2&#8243;][vc_column_text]<div class="nasa-inner-wrap nasa-pin-wrap nasa-pin-material-banner-wrap nasa-plus-style" data-pin="{&quot;nasa_pin_2&quot;:{&quot;0&quot;:{&quot;marker_pin&quot;:&quot;&lt;i class=\\&quot;nasa-icon icon-nasa-icons-plus\\&quot;&gt;&lt;\\/i&gt;&quot;,&quot;position&quot;:&quot;nasa-top&quot;,&quot;content_material&quot;:&quot;Gold Plated Steel&quot;,&quot;coords&quot;:{&quot;lat&quot;:&quot;462.5&quot;,&quot;long&quot;:&quot;158.438&quot;}},&quot;1&quot;:{&quot;marker_pin&quot;:&quot;&lt;i class=\\&quot;nasa-icon icon-nasa-icons-plus\\&quot;&gt;&lt;\\/i&gt;&quot;,&quot;position&quot;:&quot;nasa-top&quot;,&quot;content_material&quot;:&quot;Tread compound&quot;,&quot;coords&quot;:{&quot;lat&quot;:&quot;513.5&quot;,&quot;long&quot;:&quot;399&quot;}},&quot;canvas&quot;:{&quot;src&quot;:&quot;https:\\/\\/darkred-goldfish-510640.hostingersite.com\\/wp-content\\/uploads\\/2019\\/12\\/1024x550.jpg&quot;,&quot;width&quot;:&quot;1024&quot;,&quot;height&quot;:&quot;550&quot;}}}"><span class="nasa-wrap-relative-image"><img class="nasa_pin_mb_image" src="https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/12/1024x550.jpg" data-easypin_id="nasa_pin_2" alt="Material 1024x550" /></span><div id="tpl-nasa_pin_2" class="nasa-easypin-tpl"><div class="nasa-popover-clone"><div class="exPopoverContainer popove-plus-wrap {[position]}"><div class="popBg borderRadius"></div><div class="popBody"><div class="nasa-material-pin text-center"><div class="row"><div class="large-12 columns"><div class="content-wrap">{[content_material]}</div></div></div></div></div></div></div><div class="nasa-marker-clone"><div style="width:35px;height:35px"><span class="nasa-marker-icon-wrap">{[marker_pin]}<span class="nasa-action-effect"></span></span></div></div></div></div>[/vc_column_text][/vc_column][/vc_row]</p>',
    on_sale: false,
    prices: {
      price: "17300",
      regular_price: "17300",
      sale_price: "17300",
      price_range: null,
      currency_code: "NZD",
      currency_symbol: "$",
      currency_minor_unit: 2,
      currency_decimal_separator: ".",
      currency_thousand_separator: ",",
      currency_prefix: "$",
      currency_suffix: "",
    },
    price_html:
      '<span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>173.00</span>',
    average_rating: "5.00",
    review_count: 1,
    images: [
      {
        id: 2155,
        src: "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/05/h4-slider-1-tire-1.png",
        thumbnail:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/05/h4-slider-1-tire-1-300x300.png",
        srcset:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/05/h4-slider-1-tire-1.png 555w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/05/h4-slider-1-tire-1-300x224.png 300w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/05/h4-slider-1-tire-1-450x336.png 450w",
        sizes: "(max-width: 555px) 100vw, 555px",
        name: "h4-slider-1-tire-1",
        alt: "",
      },
      {
        id: 1925,
        src: "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3.png",
        thumbnail:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-300x300.png",
        srcset:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3.png 600w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-300x300.png 300w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-100x100.png 100w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-150x150.png 150w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-380x380.png 380w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-450x450.png 450w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-595x595.png 595w",
        sizes: "(max-width: 600px) 100vw, 600px",
        name: "gallery-image-product-3",
        alt: "",
      },
      {
        id: 1924,
        src: "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2.png",
        thumbnail:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-300x300.png",
        srcset:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2.png 600w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-300x300.png 300w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-100x100.png 100w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-150x150.png 150w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-380x380.png 380w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-450x450.png 450w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-595x595.png 595w",
        sizes: "(max-width: 600px) 100vw, 600px",
        name: "gallery-image-product-2",
        alt: "",
      },
      {
        id: 1923,
        src: "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1.png",
        thumbnail:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-300x300.png",
        srcset:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1.png 600w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-300x300.png 300w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-100x100.png 100w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-150x150.png 150w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-380x380.png 380w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-450x450.png 450w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-595x595.png 595w",
        sizes: "(max-width: 600px) 100vw, 600px",
        name: "gallery-image-product-1",
        alt: "",
      },
    ],
    categories: [
      {
        id: 128,
        name: "Custom Wheels",
        slug: "custom-wheels",
        link: "https://darkred-goldfish-510640.hostingersite.com/product-category/car-accessories/wheels-tires/custom-wheels/",
      },
    ],
    tags: [
      {
        id: 22,
        name: "Accessories",
        slug: "accessories",
        link: "https://darkred-goldfish-510640.hostingersite.com/product-tag/accessories/",
      },
      {
        id: 52,
        name: "Cart",
        slug: "cart",
        link: "https://darkred-goldfish-510640.hostingersite.com/product-tag/cart/",
      },
      {
        id: 116,
        name: "Wheel",
        slug: "wheel",
        link: "https://darkred-goldfish-510640.hostingersite.com/product-tag/wheel/",
      },
    ],
    brands: [],
    attributes: [],
    variations: [],
    grouped_products: [],
    has_options: false,
    is_purchasable: true,
    is_in_stock: true,
    is_on_backorder: false,
    low_stock_remaining: null,
    stock_availability: {
      text: "30 in stock",
      class: "in-stock",
    },
    sold_individually: false,
    add_to_cart: {
      text: "Add to cart",
      description:
        "Add to cart: &ldquo;285/45R22 BLACKHAWK HS01 114WXL 2854522&rdquo;",
      url: "/wp-json/wc/store/v1/products?per_page=50&#038;add-to-cart=1489",
      single_text: "Add to cart",
      minimum: 1,
      maximum: 30,
      multiple_of: 1,
    },
    extensions: {},
  },
  {
    id: 1488,
    name: "KONG 22X9.5 5X112|120 74.1 ET30 BLACK",
    slug: "crystal-blue-with-machined-face",
    parent: 0,
    type: "simple",
    variation: "",
    permalink:
      "https://darkred-goldfish-510640.hostingersite.com/product/crystal-blue-with-machined-face/",
    sku: "2664",
    short_description:
      "<p>Painstakingly developed to enhance driving comfort and safety, these top-of-the-range Radar tires provide optimum balance between peak performance and comfort.</p>",
    description:
      '<p>[vc_row][vc_column width=&#8221;1/2&#8243;][vc_column_text]</p>\n<div class="row">\n<div class="large-12 columns margin-bottom-10" style="font-weight: 300">\n<p>Painstakingly developed to enhance driving comfort and safety, these top-of-the-range Radar tires provide optimum balance between peak performance and comfort.</p>\n<p>Breakthrough technologies and industry-leading materials allow Radar Tires to guarantee the highest level of dependability. The solid-state construction of the tires ensures long-lasting wear and high durability.</p>\n<p>Offering extraordinary safety and handling ability at an incredible value, they ensure to provide a seamless and quite ride for many years ahead. If you place a high value on solidity, credibility, and efficiency, you can’t beat Radar Tires. They are the most powerful option you can choose. more details on</p>\n</div>\n</div>\n<p>[/vc_column_text][/vc_column][vc_column width=&#8221;1/2&#8243;][vc_column_text]<div class="nasa-inner-wrap nasa-pin-wrap nasa-pin-material-banner-wrap nasa-plus-style" data-pin="{&quot;nasa_pin_3&quot;:{&quot;0&quot;:{&quot;marker_pin&quot;:&quot;&lt;i class=\\&quot;nasa-icon icon-nasa-icons-plus\\&quot;&gt;&lt;\\/i&gt;&quot;,&quot;position&quot;:&quot;nasa-top&quot;,&quot;content_material&quot;:&quot;Gold Plated Steel&quot;,&quot;coords&quot;:{&quot;lat&quot;:&quot;462.5&quot;,&quot;long&quot;:&quot;158.438&quot;}},&quot;1&quot;:{&quot;marker_pin&quot;:&quot;&lt;i class=\\&quot;nasa-icon icon-nasa-icons-plus\\&quot;&gt;&lt;\\/i&gt;&quot;,&quot;position&quot;:&quot;nasa-top&quot;,&quot;content_material&quot;:&quot;Tread compound&quot;,&quot;coords&quot;:{&quot;lat&quot;:&quot;513.5&quot;,&quot;long&quot;:&quot;399&quot;}},&quot;canvas&quot;:{&quot;src&quot;:&quot;https:\\/\\/darkred-goldfish-510640.hostingersite.com\\/wp-content\\/uploads\\/2019\\/12\\/1024x550.jpg&quot;,&quot;width&quot;:&quot;1024&quot;,&quot;height&quot;:&quot;550&quot;}}}"><span class="nasa-wrap-relative-image"><img class="nasa_pin_mb_image" src="https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/12/1024x550.jpg" data-easypin_id="nasa_pin_3" alt="Material 1024x550" /></span><div id="tpl-nasa_pin_3" class="nasa-easypin-tpl"><div class="nasa-popover-clone"><div class="exPopoverContainer popove-plus-wrap {[position]}"><div class="popBg borderRadius"></div><div class="popBody"><div class="nasa-material-pin text-center"><div class="row"><div class="large-12 columns"><div class="content-wrap">{[content_material]}</div></div></div></div></div></div></div><div class="nasa-marker-clone"><div style="width:35px;height:35px"><span class="nasa-marker-icon-wrap">{[marker_pin]}<span class="nasa-action-effect"></span></span></div></div></div></div>[/vc_column_text][/vc_column][/vc_row]</p>',
    on_sale: false,
    prices: {
      price: "60000",
      regular_price: "60000",
      sale_price: "60000",
      price_range: null,
      currency_code: "NZD",
      currency_symbol: "$",
      currency_minor_unit: 2,
      currency_decimal_separator: ".",
      currency_thousand_separator: ",",
      currency_prefix: "$",
      currency_suffix: "",
    },
    price_html:
      '<span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>600.00</span>',
    average_rating: "5.00",
    review_count: 2,
    images: [
      {
        id: 2154,
        src: "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/05/rtx-ink-gold-barrel_1-1-300x300-1.jpg",
        thumbnail:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/05/rtx-ink-gold-barrel_1-1-300x300-1.jpg",
        srcset:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/05/rtx-ink-gold-barrel_1-1-300x300-1.jpg 300w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/05/rtx-ink-gold-barrel_1-1-300x300-1-150x150.jpg 150w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/05/rtx-ink-gold-barrel_1-1-300x300-1-100x100.jpg 100w",
        sizes: "(max-width: 300px) 100vw, 300px",
        name: "rtx-ink-gold-barrel_1-1-300&#215;300",
        alt: "",
      },
      {
        id: 1924,
        src: "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2.png",
        thumbnail:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-300x300.png",
        srcset:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2.png 600w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-300x300.png 300w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-100x100.png 100w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-150x150.png 150w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-380x380.png 380w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-450x450.png 450w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-595x595.png 595w",
        sizes: "(max-width: 600px) 100vw, 600px",
        name: "gallery-image-product-2",
        alt: "",
      },
      {
        id: 1923,
        src: "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1.png",
        thumbnail:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-300x300.png",
        srcset:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1.png 600w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-300x300.png 300w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-100x100.png 100w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-150x150.png 150w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-380x380.png 380w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-450x450.png 450w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-595x595.png 595w",
        sizes: "(max-width: 600px) 100vw, 600px",
        name: "gallery-image-product-1",
        alt: "",
      },
      {
        id: 1925,
        src: "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3.png",
        thumbnail:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-300x300.png",
        srcset:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3.png 600w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-300x300.png 300w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-100x100.png 100w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-150x150.png 150w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-380x380.png 380w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-450x450.png 450w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-595x595.png 595w",
        sizes: "(max-width: 600px) 100vw, 600px",
        name: "gallery-image-product-3",
        alt: "",
      },
    ],
    categories: [
      {
        id: 117,
        name: "Wheels &amp; Tires",
        slug: "wheels-tires",
        link: "https://darkred-goldfish-510640.hostingersite.com/product-category/car-accessories/wheels-tires/",
      },
    ],
    tags: [
      {
        id: 22,
        name: "Accessories",
        slug: "accessories",
        link: "https://darkred-goldfish-510640.hostingersite.com/product-tag/accessories/",
      },
      {
        id: 52,
        name: "Cart",
        slug: "cart",
        link: "https://darkred-goldfish-510640.hostingersite.com/product-tag/cart/",
      },
      {
        id: 116,
        name: "Wheel",
        slug: "wheel",
        link: "https://darkred-goldfish-510640.hostingersite.com/product-tag/wheel/",
      },
    ],
    brands: [],
    attributes: [],
    variations: [],
    grouped_products: [],
    has_options: false,
    is_purchasable: true,
    is_in_stock: true,
    is_on_backorder: false,
    low_stock_remaining: null,
    stock_availability: {
      text: "140 in stock",
      class: "in-stock",
    },
    sold_individually: false,
    add_to_cart: {
      text: "Add to cart",
      description:
        "Add to cart: &ldquo;KONG 22X9.5 5X112|120 74.1 ET30 BLACK&rdquo;",
      url: "/wp-json/wc/store/v1/products?per_page=50&#038;add-to-cart=1488",
      single_text: "Add to cart",
      minimum: 1,
      maximum: 140,
      multiple_of: 1,
    },
    extensions: {},
  },
  {
    id: 1484,
    name: "Cooper Zeon TIres",
    slug: "cooper-zeon-tires",
    parent: 0,
    type: "simple",
    variation: "",
    permalink:
      "https://darkred-goldfish-510640.hostingersite.com/product/cooper-zeon-tires/",
    sku: "",
    short_description:
      "<p>Painstakingly developed to enhance driving comfort and safety, these top-of-the-range Radar tires provide optimum balance between peak performance and comfort.</p>",
    description:
      '<p>[vc_row][vc_column width=&#8221;1/2&#8243;][vc_column_text]</p>\n<div class="row">\n<div class="large-12 columns margin-bottom-10" style="font-weight: 300">\n<p>Painstakingly developed to enhance driving comfort and safety, these top-of-the-range Radar tires provide optimum balance between peak performance and comfort.</p>\n<p>Breakthrough technologies and industry-leading materials allow Radar Tires to guarantee the highest level of dependability. The solid-state construction of the tires ensures long-lasting wear and high durability.</p>\n<p>Offering extraordinary safety and handling ability at an incredible value, they ensure to provide a seamless and quite ride for many years ahead. If you place a high value on solidity, credibility, and efficiency, you can’t beat Radar Tires. They are the most powerful option you can choose. more details on</p>\n</div>\n</div>\n<p>[/vc_column_text][/vc_column][vc_column width=&#8221;1/2&#8243;][vc_column_text]<div class="nasa-inner-wrap nasa-pin-wrap nasa-pin-material-banner-wrap nasa-plus-style" data-pin="{&quot;nasa_pin_4&quot;:{&quot;0&quot;:{&quot;marker_pin&quot;:&quot;&lt;i class=\\&quot;nasa-icon icon-nasa-icons-plus\\&quot;&gt;&lt;\\/i&gt;&quot;,&quot;position&quot;:&quot;nasa-top&quot;,&quot;content_material&quot;:&quot;Gold Plated Steel&quot;,&quot;coords&quot;:{&quot;lat&quot;:&quot;462.5&quot;,&quot;long&quot;:&quot;158.438&quot;}},&quot;1&quot;:{&quot;marker_pin&quot;:&quot;&lt;i class=\\&quot;nasa-icon icon-nasa-icons-plus\\&quot;&gt;&lt;\\/i&gt;&quot;,&quot;position&quot;:&quot;nasa-top&quot;,&quot;content_material&quot;:&quot;Tread compound&quot;,&quot;coords&quot;:{&quot;lat&quot;:&quot;513.5&quot;,&quot;long&quot;:&quot;399&quot;}},&quot;canvas&quot;:{&quot;src&quot;:&quot;https:\\/\\/darkred-goldfish-510640.hostingersite.com\\/wp-content\\/uploads\\/2019\\/12\\/1024x550.jpg&quot;,&quot;width&quot;:&quot;1024&quot;,&quot;height&quot;:&quot;550&quot;}}}"><span class="nasa-wrap-relative-image"><img class="nasa_pin_mb_image" src="https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/12/1024x550.jpg" data-easypin_id="nasa_pin_4" alt="Material 1024x550" /></span><div id="tpl-nasa_pin_4" class="nasa-easypin-tpl"><div class="nasa-popover-clone"><div class="exPopoverContainer popove-plus-wrap {[position]}"><div class="popBg borderRadius"></div><div class="popBody"><div class="nasa-material-pin text-center"><div class="row"><div class="large-12 columns"><div class="content-wrap">{[content_material]}</div></div></div></div></div></div></div><div class="nasa-marker-clone"><div style="width:35px;height:35px"><span class="nasa-marker-icon-wrap">{[marker_pin]}<span class="nasa-action-effect"></span></span></div></div></div></div>[/vc_column_text][/vc_column][/vc_row]</p>',
    on_sale: false,
    prices: {
      price: "10000",
      regular_price: "10000",
      sale_price: "10000",
      price_range: null,
      currency_code: "NZD",
      currency_symbol: "$",
      currency_minor_unit: 2,
      currency_decimal_separator: ".",
      currency_thousand_separator: ",",
      currency_prefix: "$",
      currency_suffix: "",
    },
    price_html:
      '<span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>100.00</span>',
    average_rating: "5.00",
    review_count: 1,
    images: [
      {
        id: 1926,
        src: "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product.png",
        thumbnail:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-300x300.png",
        srcset:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product.png 600w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-300x300.png 300w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-100x100.png 100w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-150x150.png 150w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-380x380.png 380w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-450x450.png 450w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-595x595.png 595w",
        sizes: "(max-width: 600px) 100vw, 600px",
        name: "main-image-product",
        alt: "",
      },
      {
        id: 1925,
        src: "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3.png",
        thumbnail:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-300x300.png",
        srcset:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3.png 600w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-300x300.png 300w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-100x100.png 100w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-150x150.png 150w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-380x380.png 380w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-450x450.png 450w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-595x595.png 595w",
        sizes: "(max-width: 600px) 100vw, 600px",
        name: "gallery-image-product-3",
        alt: "",
      },
      {
        id: 1924,
        src: "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2.png",
        thumbnail:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-300x300.png",
        srcset:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2.png 600w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-300x300.png 300w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-100x100.png 100w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-150x150.png 150w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-380x380.png 380w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-450x450.png 450w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-595x595.png 595w",
        sizes: "(max-width: 600px) 100vw, 600px",
        name: "gallery-image-product-2",
        alt: "",
      },
      {
        id: 1923,
        src: "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1.png",
        thumbnail:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-300x300.png",
        srcset:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1.png 600w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-300x300.png 300w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-100x100.png 100w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-150x150.png 150w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-380x380.png 380w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-450x450.png 450w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-595x595.png 595w",
        sizes: "(max-width: 600px) 100vw, 600px",
        name: "gallery-image-product-1",
        alt: "",
      },
    ],
    categories: [
      {
        id: 117,
        name: "Wheels &amp; Tires",
        slug: "wheels-tires",
        link: "https://darkred-goldfish-510640.hostingersite.com/product-category/car-accessories/wheels-tires/",
      },
    ],
    tags: [
      {
        id: 22,
        name: "Accessories",
        slug: "accessories",
        link: "https://darkred-goldfish-510640.hostingersite.com/product-tag/accessories/",
      },
      {
        id: 52,
        name: "Cart",
        slug: "cart",
        link: "https://darkred-goldfish-510640.hostingersite.com/product-tag/cart/",
      },
      {
        id: 116,
        name: "Wheel",
        slug: "wheel",
        link: "https://darkred-goldfish-510640.hostingersite.com/product-tag/wheel/",
      },
    ],
    brands: [],
    attributes: [],
    variations: [],
    grouped_products: [],
    has_options: false,
    is_purchasable: true,
    is_in_stock: true,
    is_on_backorder: false,
    low_stock_remaining: null,
    stock_availability: {
      text: "40 in stock",
      class: "in-stock",
    },
    sold_individually: false,
    add_to_cart: {
      text: "Add to cart",
      description: "Add to cart: &ldquo;Cooper Zeon TIres&rdquo;",
      url: "/wp-json/wc/store/v1/products?per_page=50&#038;add-to-cart=1484",
      single_text: "Add to cart",
      minimum: 1,
      maximum: 40,
      multiple_of: 1,
    },
    extensions: {},
  },
  {
    id: 1472,
    name: "Lowering Kits",
    slug: "lowering-kits",
    parent: 0,
    type: "simple",
    variation: "",
    permalink:
      "https://darkred-goldfish-510640.hostingersite.com/product/lowering-kits/",
    sku: "",
    short_description:
      "<p>Painstakingly developed to enhance driving comfort and safety, these top-of-the-range Radar tires provide optimum balance between peak performance and comfort.</p>",
    description:
      '<p>[vc_row][vc_column width=&#8221;1/2&#8243;][vc_column_text]</p>\n<div class="row">\n<div class="large-12 columns margin-bottom-10" style="font-weight: 300">\n<p>Painstakingly developed to enhance driving comfort and safety, these top-of-the-range Radar tires provide optimum balance between peak performance and comfort.</p>\n<p>Breakthrough technologies and industry-leading materials allow Radar Tires to guarantee the highest level of dependability. The solid-state construction of the tires ensures long-lasting wear and high durability.</p>\n<p>Offering extraordinary safety and handling ability at an incredible value, they ensure to provide a seamless and quite ride for many years ahead. If you place a high value on solidity, credibility, and efficiency, you can’t beat Radar Tires. They are the most powerful option you can choose. more details on</p>\n</div>\n</div>\n<p>[/vc_column_text][/vc_column][vc_column width=&#8221;1/2&#8243;][vc_column_text]<div class="nasa-inner-wrap nasa-pin-wrap nasa-pin-material-banner-wrap nasa-plus-style" data-pin="{&quot;nasa_pin_5&quot;:{&quot;0&quot;:{&quot;marker_pin&quot;:&quot;&lt;i class=\\&quot;nasa-icon icon-nasa-icons-plus\\&quot;&gt;&lt;\\/i&gt;&quot;,&quot;position&quot;:&quot;nasa-top&quot;,&quot;content_material&quot;:&quot;Gold Plated Steel&quot;,&quot;coords&quot;:{&quot;lat&quot;:&quot;462.5&quot;,&quot;long&quot;:&quot;158.438&quot;}},&quot;1&quot;:{&quot;marker_pin&quot;:&quot;&lt;i class=\\&quot;nasa-icon icon-nasa-icons-plus\\&quot;&gt;&lt;\\/i&gt;&quot;,&quot;position&quot;:&quot;nasa-top&quot;,&quot;content_material&quot;:&quot;Tread compound&quot;,&quot;coords&quot;:{&quot;lat&quot;:&quot;513.5&quot;,&quot;long&quot;:&quot;399&quot;}},&quot;canvas&quot;:{&quot;src&quot;:&quot;https:\\/\\/darkred-goldfish-510640.hostingersite.com\\/wp-content\\/uploads\\/2019\\/12\\/1024x550.jpg&quot;,&quot;width&quot;:&quot;1024&quot;,&quot;height&quot;:&quot;550&quot;}}}"><span class="nasa-wrap-relative-image"><img class="nasa_pin_mb_image" src="https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/12/1024x550.jpg" data-easypin_id="nasa_pin_5" alt="Material 1024x550" /></span><div id="tpl-nasa_pin_5" class="nasa-easypin-tpl"><div class="nasa-popover-clone"><div class="exPopoverContainer popove-plus-wrap {[position]}"><div class="popBg borderRadius"></div><div class="popBody"><div class="nasa-material-pin text-center"><div class="row"><div class="large-12 columns"><div class="content-wrap">{[content_material]}</div></div></div></div></div></div></div><div class="nasa-marker-clone"><div style="width:35px;height:35px"><span class="nasa-marker-icon-wrap">{[marker_pin]}<span class="nasa-action-effect"></span></span></div></div></div></div>[/vc_column_text][/vc_column][/vc_row]</p>',
    on_sale: false,
    prices: {
      price: "7500",
      regular_price: "7500",
      sale_price: "7500",
      price_range: null,
      currency_code: "NZD",
      currency_symbol: "$",
      currency_minor_unit: 2,
      currency_decimal_separator: ".",
      currency_thousand_separator: ",",
      currency_prefix: "$",
      currency_suffix: "",
    },
    price_html:
      '<span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>75.00</span>',
    average_rating: "5.00",
    review_count: 1,
    images: [
      {
        id: 1926,
        src: "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product.png",
        thumbnail:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-300x300.png",
        srcset:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product.png 600w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-300x300.png 300w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-100x100.png 100w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-150x150.png 150w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-380x380.png 380w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-450x450.png 450w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-595x595.png 595w",
        sizes: "(max-width: 600px) 100vw, 600px",
        name: "main-image-product",
        alt: "",
      },
      {
        id: 1925,
        src: "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3.png",
        thumbnail:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-300x300.png",
        srcset:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3.png 600w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-300x300.png 300w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-100x100.png 100w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-150x150.png 150w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-380x380.png 380w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-450x450.png 450w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-595x595.png 595w",
        sizes: "(max-width: 600px) 100vw, 600px",
        name: "gallery-image-product-3",
        alt: "",
      },
      {
        id: 1924,
        src: "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2.png",
        thumbnail:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-300x300.png",
        srcset:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2.png 600w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-300x300.png 300w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-100x100.png 100w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-150x150.png 150w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-380x380.png 380w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-450x450.png 450w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-595x595.png 595w",
        sizes: "(max-width: 600px) 100vw, 600px",
        name: "gallery-image-product-2",
        alt: "",
      },
      {
        id: 1923,
        src: "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1.png",
        thumbnail:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-300x300.png",
        srcset:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1.png 600w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-300x300.png 300w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-100x100.png 100w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-150x150.png 150w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-380x380.png 380w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-450x450.png 450w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-595x595.png 595w",
        sizes: "(max-width: 600px) 100vw, 600px",
        name: "gallery-image-product-1",
        alt: "",
      },
    ],
    categories: [
      {
        id: 135,
        name: "Lowering Kits",
        slug: "lowering-kits",
        link: "https://darkred-goldfish-510640.hostingersite.com/product-category/car-accessories/performance/lowering-kits/",
      },
    ],
    tags: [
      {
        id: 22,
        name: "Accessories",
        slug: "accessories",
        link: "https://darkred-goldfish-510640.hostingersite.com/product-tag/accessories/",
      },
      {
        id: 52,
        name: "Cart",
        slug: "cart",
        link: "https://darkred-goldfish-510640.hostingersite.com/product-tag/cart/",
      },
    ],
    brands: [],
    attributes: [],
    variations: [],
    grouped_products: [],
    has_options: false,
    is_purchasable: true,
    is_in_stock: true,
    is_on_backorder: false,
    low_stock_remaining: null,
    stock_availability: {
      text: "40 in stock",
      class: "in-stock",
    },
    sold_individually: false,
    add_to_cart: {
      text: "Add to cart",
      description: "Add to cart: &ldquo;Lowering Kits&rdquo;",
      url: "/wp-json/wc/store/v1/products?per_page=50&#038;add-to-cart=1472",
      single_text: "Add to cart",
      minimum: 1,
      maximum: 40,
      multiple_of: 1,
    },
    extensions: {},
  },
  {
    id: 1443,
    name: "Speed Custom Mirrors",
    slug: "speed-custom-mirrors",
    parent: 0,
    type: "simple",
    variation: "",
    permalink:
      "https://darkred-goldfish-510640.hostingersite.com/product/speed-custom-mirrors/",
    sku: "",
    short_description:
      "<p>Painstakingly developed to enhance driving comfort and safety, these top-of-the-range Radar tires provide optimum balance between peak performance and comfort.</p>",
    description:
      '<p>[vc_row][vc_column width=&#8221;1/2&#8243;][vc_column_text]</p>\n<div class="row">\n<div class="large-12 columns margin-bottom-10" style="font-weight: 300">\n<p>Painstakingly developed to enhance driving comfort and safety, these top-of-the-range Radar tires provide optimum balance between peak performance and comfort.</p>\n<p>Breakthrough technologies and industry-leading materials allow Radar Tires to guarantee the highest level of dependability. The solid-state construction of the tires ensures long-lasting wear and high durability.</p>\n<p>Offering extraordinary safety and handling ability at an incredible value, they ensure to provide a seamless and quite ride for many years ahead. If you place a high value on solidity, credibility, and efficiency, you can’t beat Radar Tires. They are the most powerful option you can choose. more details on</p>\n</div>\n</div>\n<p>[/vc_column_text][/vc_column][vc_column width=&#8221;1/2&#8243;][vc_column_text]<div class="nasa-inner-wrap nasa-pin-wrap nasa-pin-material-banner-wrap nasa-plus-style" data-pin="{&quot;nasa_pin_6&quot;:{&quot;0&quot;:{&quot;marker_pin&quot;:&quot;&lt;i class=\\&quot;nasa-icon icon-nasa-icons-plus\\&quot;&gt;&lt;\\/i&gt;&quot;,&quot;position&quot;:&quot;nasa-top&quot;,&quot;content_material&quot;:&quot;Gold Plated Steel&quot;,&quot;coords&quot;:{&quot;lat&quot;:&quot;462.5&quot;,&quot;long&quot;:&quot;158.438&quot;}},&quot;1&quot;:{&quot;marker_pin&quot;:&quot;&lt;i class=\\&quot;nasa-icon icon-nasa-icons-plus\\&quot;&gt;&lt;\\/i&gt;&quot;,&quot;position&quot;:&quot;nasa-top&quot;,&quot;content_material&quot;:&quot;Tread compound&quot;,&quot;coords&quot;:{&quot;lat&quot;:&quot;513.5&quot;,&quot;long&quot;:&quot;399&quot;}},&quot;canvas&quot;:{&quot;src&quot;:&quot;https:\\/\\/darkred-goldfish-510640.hostingersite.com\\/wp-content\\/uploads\\/2019\\/12\\/1024x550.jpg&quot;,&quot;width&quot;:&quot;1024&quot;,&quot;height&quot;:&quot;550&quot;}}}"><span class="nasa-wrap-relative-image"><img class="nasa_pin_mb_image" src="https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/12/1024x550.jpg" data-easypin_id="nasa_pin_6" alt="Material 1024x550" /></span><div id="tpl-nasa_pin_6" class="nasa-easypin-tpl"><div class="nasa-popover-clone"><div class="exPopoverContainer popove-plus-wrap {[position]}"><div class="popBg borderRadius"></div><div class="popBody"><div class="nasa-material-pin text-center"><div class="row"><div class="large-12 columns"><div class="content-wrap">{[content_material]}</div></div></div></div></div></div></div><div class="nasa-marker-clone"><div style="width:35px;height:35px"><span class="nasa-marker-icon-wrap">{[marker_pin]}<span class="nasa-action-effect"></span></span></div></div></div></div>[/vc_column_text][/vc_column][/vc_row]</p>',
    on_sale: false,
    prices: {
      price: "8000",
      regular_price: "8000",
      sale_price: "8000",
      price_range: null,
      currency_code: "NZD",
      currency_symbol: "$",
      currency_minor_unit: 2,
      currency_decimal_separator: ".",
      currency_thousand_separator: ",",
      currency_prefix: "$",
      currency_suffix: "",
    },
    price_html:
      '<span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>80.00</span>',
    average_rating: "5.00",
    review_count: 1,
    images: [
      {
        id: 1926,
        src: "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product.png",
        thumbnail:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-300x300.png",
        srcset:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product.png 600w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-300x300.png 300w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-100x100.png 100w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-150x150.png 150w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-380x380.png 380w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-450x450.png 450w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-595x595.png 595w",
        sizes: "(max-width: 600px) 100vw, 600px",
        name: "main-image-product",
        alt: "",
      },
      {
        id: 1925,
        src: "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3.png",
        thumbnail:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-300x300.png",
        srcset:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3.png 600w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-300x300.png 300w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-100x100.png 100w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-150x150.png 150w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-380x380.png 380w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-450x450.png 450w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-595x595.png 595w",
        sizes: "(max-width: 600px) 100vw, 600px",
        name: "gallery-image-product-3",
        alt: "",
      },
      {
        id: 1924,
        src: "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2.png",
        thumbnail:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-300x300.png",
        srcset:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2.png 600w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-300x300.png 300w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-100x100.png 100w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-150x150.png 150w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-380x380.png 380w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-450x450.png 450w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-595x595.png 595w",
        sizes: "(max-width: 600px) 100vw, 600px",
        name: "gallery-image-product-2",
        alt: "",
      },
      {
        id: 1923,
        src: "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1.png",
        thumbnail:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-300x300.png",
        srcset:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1.png 600w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-300x300.png 300w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-100x100.png 100w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-150x150.png 150w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-380x380.png 380w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-450x450.png 450w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-595x595.png 595w",
        sizes: "(max-width: 600px) 100vw, 600px",
        name: "gallery-image-product-1",
        alt: "",
      },
    ],
    categories: [
      {
        id: 77,
        name: "Mirrors",
        slug: "mirrors",
        link: "https://darkred-goldfish-510640.hostingersite.com/product-category/car-accessories/exterior/mirrors/",
      },
    ],
    tags: [
      {
        id: 22,
        name: "Accessories",
        slug: "accessories",
        link: "https://darkred-goldfish-510640.hostingersite.com/product-tag/accessories/",
      },
      {
        id: 78,
        name: "Mirrors",
        slug: "mirrors",
        link: "https://darkred-goldfish-510640.hostingersite.com/product-tag/mirrors/",
      },
    ],
    brands: [],
    attributes: [],
    variations: [],
    grouped_products: [],
    has_options: false,
    is_purchasable: true,
    is_in_stock: true,
    is_on_backorder: false,
    low_stock_remaining: null,
    stock_availability: {
      text: "40 in stock",
      class: "in-stock",
    },
    sold_individually: false,
    add_to_cart: {
      text: "Add to cart",
      description: "Add to cart: &ldquo;Speed Custom Mirrors&rdquo;",
      url: "/wp-json/wc/store/v1/products?per_page=50&#038;add-to-cart=1443",
      single_text: "Add to cart",
      minimum: 1,
      maximum: 40,
      multiple_of: 1,
    },
    extensions: {},
  },
  {
    id: 1432,
    name: "Duraflex Fiberglass Hood",
    slug: "duraflex-fiberglass-hood-2",
    parent: 0,
    type: "simple",
    variation: "",
    permalink:
      "https://darkred-goldfish-510640.hostingersite.com/product/duraflex-fiberglass-hood-2/",
    sku: "",
    short_description:
      "<p>Painstakingly developed to enhance driving comfort and safety, these top-of-the-range Radar tires provide optimum balance between peak performance and comfort.</p>",
    description:
      '<p>[vc_row][vc_column width=&#8221;1/2&#8243;][vc_column_text]</p>\n<div class="row">\n<div class="large-12 columns margin-bottom-10" style="font-weight: 300">\n<p>Painstakingly developed to enhance driving comfort and safety, these top-of-the-range Radar tires provide optimum balance between peak performance and comfort.</p>\n<p>Breakthrough technologies and industry-leading materials allow Radar Tires to guarantee the highest level of dependability. The solid-state construction of the tires ensures long-lasting wear and high durability.</p>\n<p>Offering extraordinary safety and handling ability at an incredible value, they ensure to provide a seamless and quite ride for many years ahead. If you place a high value on solidity, credibility, and efficiency, you can’t beat Radar Tires. They are the most powerful option you can choose. more details on</p>\n</div>\n</div>\n<p>[/vc_column_text][/vc_column][vc_column width=&#8221;1/2&#8243;][vc_column_text]<div class="nasa-inner-wrap nasa-pin-wrap nasa-pin-material-banner-wrap nasa-plus-style" data-pin="{&quot;nasa_pin_7&quot;:{&quot;0&quot;:{&quot;marker_pin&quot;:&quot;&lt;i class=\\&quot;nasa-icon icon-nasa-icons-plus\\&quot;&gt;&lt;\\/i&gt;&quot;,&quot;position&quot;:&quot;nasa-top&quot;,&quot;content_material&quot;:&quot;Gold Plated Steel&quot;,&quot;coords&quot;:{&quot;lat&quot;:&quot;462.5&quot;,&quot;long&quot;:&quot;158.438&quot;}},&quot;1&quot;:{&quot;marker_pin&quot;:&quot;&lt;i class=\\&quot;nasa-icon icon-nasa-icons-plus\\&quot;&gt;&lt;\\/i&gt;&quot;,&quot;position&quot;:&quot;nasa-top&quot;,&quot;content_material&quot;:&quot;Tread compound&quot;,&quot;coords&quot;:{&quot;lat&quot;:&quot;513.5&quot;,&quot;long&quot;:&quot;399&quot;}},&quot;canvas&quot;:{&quot;src&quot;:&quot;https:\\/\\/darkred-goldfish-510640.hostingersite.com\\/wp-content\\/uploads\\/2019\\/12\\/1024x550.jpg&quot;,&quot;width&quot;:&quot;1024&quot;,&quot;height&quot;:&quot;550&quot;}}}"><span class="nasa-wrap-relative-image"><img class="nasa_pin_mb_image" src="https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/12/1024x550.jpg" data-easypin_id="nasa_pin_7" alt="Material 1024x550" /></span><div id="tpl-nasa_pin_7" class="nasa-easypin-tpl"><div class="nasa-popover-clone"><div class="exPopoverContainer popove-plus-wrap {[position]}"><div class="popBg borderRadius"></div><div class="popBody"><div class="nasa-material-pin text-center"><div class="row"><div class="large-12 columns"><div class="content-wrap">{[content_material]}</div></div></div></div></div></div></div><div class="nasa-marker-clone"><div style="width:35px;height:35px"><span class="nasa-marker-icon-wrap">{[marker_pin]}<span class="nasa-action-effect"></span></span></div></div></div></div>[/vc_column_text][/vc_column][/vc_row]</p>',
    on_sale: false,
    prices: {
      price: "5000",
      regular_price: "5000",
      sale_price: "5000",
      price_range: null,
      currency_code: "NZD",
      currency_symbol: "$",
      currency_minor_unit: 2,
      currency_decimal_separator: ".",
      currency_thousand_separator: ",",
      currency_prefix: "$",
      currency_suffix: "",
    },
    price_html:
      '<span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>50.00</span>',
    average_rating: "5.00",
    review_count: 1,
    images: [
      {
        id: 1926,
        src: "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product.png",
        thumbnail:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-300x300.png",
        srcset:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product.png 600w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-300x300.png 300w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-100x100.png 100w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-150x150.png 150w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-380x380.png 380w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-450x450.png 450w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-595x595.png 595w",
        sizes: "(max-width: 600px) 100vw, 600px",
        name: "main-image-product",
        alt: "",
      },
      {
        id: 1925,
        src: "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3.png",
        thumbnail:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-300x300.png",
        srcset:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3.png 600w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-300x300.png 300w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-100x100.png 100w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-150x150.png 150w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-380x380.png 380w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-450x450.png 450w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-595x595.png 595w",
        sizes: "(max-width: 600px) 100vw, 600px",
        name: "gallery-image-product-3",
        alt: "",
      },
      {
        id: 1924,
        src: "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2.png",
        thumbnail:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-300x300.png",
        srcset:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2.png 600w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-300x300.png 300w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-100x100.png 100w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-150x150.png 150w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-380x380.png 380w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-450x450.png 450w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-595x595.png 595w",
        sizes: "(max-width: 600px) 100vw, 600px",
        name: "gallery-image-product-2",
        alt: "",
      },
      {
        id: 1923,
        src: "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1.png",
        thumbnail:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-300x300.png",
        srcset:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1.png 600w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-300x300.png 300w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-100x100.png 100w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-150x150.png 150w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-380x380.png 380w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-450x450.png 450w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-595x595.png 595w",
        sizes: "(max-width: 600px) 100vw, 600px",
        name: "gallery-image-product-1",
        alt: "",
      },
    ],
    categories: [
      {
        id: 127,
        name: "Custom Hoods",
        slug: "custom-hoods",
        link: "https://darkred-goldfish-510640.hostingersite.com/product-category/car-accessories/exterior/custom-hoods/",
      },
    ],
    tags: [
      {
        id: 52,
        name: "Cart",
        slug: "cart",
        link: "https://darkred-goldfish-510640.hostingersite.com/product-tag/cart/",
      },
      {
        id: 64,
        name: "Hoods",
        slug: "hoods",
        link: "https://darkred-goldfish-510640.hostingersite.com/product-tag/hoods/",
      },
    ],
    brands: [],
    attributes: [],
    variations: [],
    grouped_products: [],
    has_options: false,
    is_purchasable: true,
    is_in_stock: true,
    is_on_backorder: false,
    low_stock_remaining: null,
    stock_availability: {
      text: "35 in stock",
      class: "in-stock",
    },
    sold_individually: false,
    add_to_cart: {
      text: "Add to cart",
      description: "Add to cart: &ldquo;Duraflex Fiberglass Hood&rdquo;",
      url: "/wp-json/wc/store/v1/products?per_page=50&#038;add-to-cart=1432",
      single_text: "Add to cart",
      minimum: 1,
      maximum: 35,
      multiple_of: 1,
    },
    extensions: {},
  },
  {
    id: 1313,
    name: "Steam/Vacuum Cleaner",
    slug: "steam-vacuum-cleaner",
    parent: 0,
    type: "simple",
    variation: "",
    permalink:
      "https://darkred-goldfish-510640.hostingersite.com/product/steam-vacuum-cleaner/",
    sku: "",
    short_description:
      "<p>Painstakingly developed to enhance driving comfort and safety, these top-of-the-range Radar tires provide optimum balance between peak performance and comfort.</p>",
    description:
      '<p>[vc_row][vc_column width=&#8221;1/2&#8243;][vc_column_text]</p>\n<div class="row">\n<div class="large-12 columns margin-bottom-10" style="font-weight: 300">\n<p>Painstakingly developed to enhance driving comfort and safety, these top-of-the-range Radar tires provide optimum balance between peak performance and comfort.</p>\n<p>Breakthrough technologies and industry-leading materials allow Radar Tires to guarantee the highest level of dependability. The solid-state construction of the tires ensures long-lasting wear and high durability.</p>\n<p>Offering extraordinary safety and handling ability at an incredible value, they ensure to provide a seamless and quite ride for many years ahead. If you place a high value on solidity, credibility, and efficiency, you can’t beat Radar Tires. They are the most powerful option you can choose. more details on</p>\n</div>\n</div>\n<p>[/vc_column_text][/vc_column][vc_column width=&#8221;1/2&#8243;][vc_column_text]<div class="nasa-inner-wrap nasa-pin-wrap nasa-pin-material-banner-wrap nasa-plus-style" data-pin="{&quot;nasa_pin_8&quot;:{&quot;0&quot;:{&quot;marker_pin&quot;:&quot;&lt;i class=\\&quot;nasa-icon icon-nasa-icons-plus\\&quot;&gt;&lt;\\/i&gt;&quot;,&quot;position&quot;:&quot;nasa-top&quot;,&quot;content_material&quot;:&quot;Gold Plated Steel&quot;,&quot;coords&quot;:{&quot;lat&quot;:&quot;462.5&quot;,&quot;long&quot;:&quot;158.438&quot;}},&quot;1&quot;:{&quot;marker_pin&quot;:&quot;&lt;i class=\\&quot;nasa-icon icon-nasa-icons-plus\\&quot;&gt;&lt;\\/i&gt;&quot;,&quot;position&quot;:&quot;nasa-top&quot;,&quot;content_material&quot;:&quot;Tread compound&quot;,&quot;coords&quot;:{&quot;lat&quot;:&quot;513.5&quot;,&quot;long&quot;:&quot;399&quot;}},&quot;canvas&quot;:{&quot;src&quot;:&quot;https:\\/\\/darkred-goldfish-510640.hostingersite.com\\/wp-content\\/uploads\\/2019\\/12\\/1024x550.jpg&quot;,&quot;width&quot;:&quot;1024&quot;,&quot;height&quot;:&quot;550&quot;}}}"><span class="nasa-wrap-relative-image"><img class="nasa_pin_mb_image" src="https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/12/1024x550.jpg" data-easypin_id="nasa_pin_8" alt="Material 1024x550" /></span><div id="tpl-nasa_pin_8" class="nasa-easypin-tpl"><div class="nasa-popover-clone"><div class="exPopoverContainer popove-plus-wrap {[position]}"><div class="popBg borderRadius"></div><div class="popBody"><div class="nasa-material-pin text-center"><div class="row"><div class="large-12 columns"><div class="content-wrap">{[content_material]}</div></div></div></div></div></div></div><div class="nasa-marker-clone"><div style="width:35px;height:35px"><span class="nasa-marker-icon-wrap">{[marker_pin]}<span class="nasa-action-effect"></span></span></div></div></div></div>[/vc_column_text][/vc_column][/vc_row]</p>',
    on_sale: false,
    prices: {
      price: "19900",
      regular_price: "19900",
      sale_price: "19900",
      price_range: null,
      currency_code: "NZD",
      currency_symbol: "$",
      currency_minor_unit: 2,
      currency_decimal_separator: ".",
      currency_thousand_separator: ",",
      currency_prefix: "$",
      currency_suffix: "",
    },
    price_html:
      '<span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>199.00</span>',
    average_rating: "5.00",
    review_count: 2,
    images: [
      {
        id: 1926,
        src: "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product.png",
        thumbnail:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-300x300.png",
        srcset:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product.png 600w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-300x300.png 300w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-100x100.png 100w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-150x150.png 150w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-380x380.png 380w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-450x450.png 450w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-595x595.png 595w",
        sizes: "(max-width: 600px) 100vw, 600px",
        name: "main-image-product",
        alt: "",
      },
      {
        id: 1925,
        src: "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3.png",
        thumbnail:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-300x300.png",
        srcset:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3.png 600w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-300x300.png 300w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-100x100.png 100w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-150x150.png 150w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-380x380.png 380w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-450x450.png 450w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-595x595.png 595w",
        sizes: "(max-width: 600px) 100vw, 600px",
        name: "gallery-image-product-3",
        alt: "",
      },
      {
        id: 1924,
        src: "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2.png",
        thumbnail:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-300x300.png",
        srcset:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2.png 600w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-300x300.png 300w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-100x100.png 100w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-150x150.png 150w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-380x380.png 380w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-450x450.png 450w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-595x595.png 595w",
        sizes: "(max-width: 600px) 100vw, 600px",
        name: "gallery-image-product-2",
        alt: "",
      },
      {
        id: 1923,
        src: "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1.png",
        thumbnail:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-300x300.png",
        srcset:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1.png 600w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-300x300.png 300w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-100x100.png 100w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-150x150.png 150w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-380x380.png 380w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-450x450.png 450w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-595x595.png 595w",
        sizes: "(max-width: 600px) 100vw, 600px",
        name: "gallery-image-product-1",
        alt: "",
      },
    ],
    categories: [
      {
        id: 129,
        name: "Detailing &amp; Care",
        slug: "detailing-care",
        link: "https://darkred-goldfish-510640.hostingersite.com/product-category/car-accessories/exterior/detailing-care/",
      },
    ],
    tags: [
      {
        id: 110,
        name: "Tags",
        slug: "tags",
        link: "https://darkred-goldfish-510640.hostingersite.com/product-tag/tags/",
      },
    ],
    brands: [],
    attributes: [],
    variations: [],
    grouped_products: [],
    has_options: false,
    is_purchasable: true,
    is_in_stock: true,
    is_on_backorder: false,
    low_stock_remaining: null,
    stock_availability: {
      text: "",
      class: "in-stock",
    },
    sold_individually: false,
    add_to_cart: {
      text: "Add to cart",
      description: "Add to cart: &ldquo;Steam/Vacuum Cleaner&rdquo;",
      url: "/wp-json/wc/store/v1/products?per_page=50&#038;add-to-cart=1313",
      single_text: "Add to cart",
      minimum: 1,
      maximum: 9999,
      multiple_of: 1,
    },
    extensions: {},
  },
  {
    id: 401,
    name: "Logi BASE Charging Stand with Smart Connector",
    slug: "logi-base-charging-stand-with-smart-connector",
    parent: 0,
    type: "simple",
    variation: "",
    permalink:
      "https://darkred-goldfish-510640.hostingersite.com/product/logi-base-charging-stand-with-smart-connector/",
    sku: "",
    short_description:
      "<ul>\n<li>Automatically connected</li>\n<li>Easy setup for all devices</li>\n<li>Charges quickly in the case</li>\n<li>Rich, high-quality audio and voice</li>\n</ul>",
    description:
      '<p>[vc_row][vc_column width=&#8221;1/2&#8243;][vc_column_text]</p>\n<div class="row">\n<div class="large-12 columns margin-bottom-10" style="font-weight: 300">\n<p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire.</p>\n<p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n</div>\n</div>\n<p>[/vc_column_text][/vc_column][vc_column width=&#8221;1/2&#8243;][vc_column_text]<div class="nasa-inner-wrap nasa-pin-wrap nasa-pin-material-banner-wrap nasa-plus-style" data-pin="{&quot;nasa_pin_9&quot;:{&quot;0&quot;:{&quot;marker_pin&quot;:&quot;&lt;i class=\\&quot;nasa-icon icon-nasa-icons-plus\\&quot;&gt;&lt;\\/i&gt;&quot;,&quot;position&quot;:&quot;nasa-top&quot;,&quot;content_material&quot;:&quot;Gold Plated Steel&quot;,&quot;coords&quot;:{&quot;lat&quot;:&quot;462.5&quot;,&quot;long&quot;:&quot;158.438&quot;}},&quot;1&quot;:{&quot;marker_pin&quot;:&quot;&lt;i class=\\&quot;nasa-icon icon-nasa-icons-plus\\&quot;&gt;&lt;\\/i&gt;&quot;,&quot;position&quot;:&quot;nasa-top&quot;,&quot;content_material&quot;:&quot;Tread compound&quot;,&quot;coords&quot;:{&quot;lat&quot;:&quot;513.5&quot;,&quot;long&quot;:&quot;399&quot;}},&quot;canvas&quot;:{&quot;src&quot;:&quot;https:\\/\\/darkred-goldfish-510640.hostingersite.com\\/wp-content\\/uploads\\/2019\\/12\\/1024x550.jpg&quot;,&quot;width&quot;:&quot;1024&quot;,&quot;height&quot;:&quot;550&quot;}}}"><span class="nasa-wrap-relative-image"><img class="nasa_pin_mb_image" src="https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/12/1024x550.jpg" data-easypin_id="nasa_pin_9" alt="Material 1024x550" /></span><div id="tpl-nasa_pin_9" class="nasa-easypin-tpl"><div class="nasa-popover-clone"><div class="exPopoverContainer popove-plus-wrap {[position]}"><div class="popBg borderRadius"></div><div class="popBody"><div class="nasa-material-pin text-center"><div class="row"><div class="large-12 columns"><div class="content-wrap">{[content_material]}</div></div></div></div></div></div></div><div class="nasa-marker-clone"><div style="width:35px;height:35px"><span class="nasa-marker-icon-wrap">{[marker_pin]}<span class="nasa-action-effect"></span></span></div></div></div></div>[/vc_column_text][/vc_column][/vc_row]</p>',
    on_sale: true,
    prices: {
      price: "3500",
      regular_price: "4500",
      sale_price: "3500",
      price_range: null,
      currency_code: "NZD",
      currency_symbol: "$",
      currency_minor_unit: 2,
      currency_decimal_separator: ".",
      currency_thousand_separator: ",",
      currency_prefix: "$",
      currency_suffix: "",
    },
    price_html:
      '<del aria-hidden="true"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>45.00</span></del> <span class="screen-reader-text">Original price was: &#036;45.00.</span><ins aria-hidden="true"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>35.00</span></ins><span class="screen-reader-text">Current price is: &#036;35.00.</span>',
    average_rating: "5.00",
    review_count: 1,
    images: [
      {
        id: 1926,
        src: "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product.png",
        thumbnail:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-300x300.png",
        srcset:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product.png 600w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-300x300.png 300w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-100x100.png 100w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-150x150.png 150w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-380x380.png 380w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-450x450.png 450w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-595x595.png 595w",
        sizes: "(max-width: 600px) 100vw, 600px",
        name: "main-image-product",
        alt: "",
      },
      {
        id: 1925,
        src: "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3.png",
        thumbnail:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-300x300.png",
        srcset:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3.png 600w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-300x300.png 300w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-100x100.png 100w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-150x150.png 150w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-380x380.png 380w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-450x450.png 450w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-595x595.png 595w",
        sizes: "(max-width: 600px) 100vw, 600px",
        name: "gallery-image-product-3",
        alt: "",
      },
      {
        id: 1924,
        src: "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2.png",
        thumbnail:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-300x300.png",
        srcset:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2.png 600w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-300x300.png 300w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-100x100.png 100w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-150x150.png 150w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-380x380.png 380w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-450x450.png 450w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-595x595.png 595w",
        sizes: "(max-width: 600px) 100vw, 600px",
        name: "gallery-image-product-2",
        alt: "",
      },
      {
        id: 1923,
        src: "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1.png",
        thumbnail:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-300x300.png",
        srcset:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1.png 600w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-300x300.png 300w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-100x100.png 100w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-150x150.png 150w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-380x380.png 380w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-450x450.png 450w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-595x595.png 595w",
        sizes: "(max-width: 600px) 100vw, 600px",
        name: "gallery-image-product-1",
        alt: "",
      },
    ],
    categories: [
      {
        id: 147,
        name: "Docks",
        slug: "docks",
        link: "https://darkred-goldfish-510640.hostingersite.com/product-category/tech-accessories/power-cables/docks/",
      },
    ],
    tags: [
      {
        id: 22,
        name: "Accessories",
        slug: "accessories",
        link: "https://darkred-goldfish-510640.hostingersite.com/product-tag/accessories/",
      },
      {
        id: 54,
        name: "cover",
        slug: "cover",
        link: "https://darkred-goldfish-510640.hostingersite.com/product-tag/cover/",
      },
    ],
    brands: [],
    attributes: [],
    variations: [],
    grouped_products: [],
    has_options: false,
    is_purchasable: true,
    is_in_stock: true,
    is_on_backorder: false,
    low_stock_remaining: null,
    stock_availability: {
      text: "",
      class: "in-stock",
    },
    sold_individually: false,
    add_to_cart: {
      text: "Add to cart",
      description:
        "Add to cart: &ldquo;Logi BASE Charging Stand with Smart Connector&rdquo;",
      url: "/wp-json/wc/store/v1/products?per_page=50&#038;add-to-cart=401",
      single_text: "Add to cart",
      minimum: 1,
      maximum: 9999,
      multiple_of: 1,
    },
    extensions: {},
  },
  {
    id: 396,
    name: "Magnetic Charging Dock",
    slug: "magnetic-charging-dock",
    parent: 0,
    type: "simple",
    variation: "",
    permalink:
      "https://darkred-goldfish-510640.hostingersite.com/product/magnetic-charging-dock/",
    sku: "",
    short_description:
      "<ul>\n<li>Automatically connected</li>\n<li>Easy setup for all devices</li>\n<li>Charges quickly in the case</li>\n<li>Rich, high-quality audio and voice</li>\n</ul>",
    description:
      '<p>[vc_row][vc_column width=&#8221;1/2&#8243;][vc_column_text]</p>\n<div class="row">\n<div class="large-12 columns margin-bottom-10" style="font-weight: 300">\n<p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire.</p>\n<p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n</div>\n</div>\n<p>[/vc_column_text][/vc_column][vc_column width=&#8221;1/2&#8243;][vc_column_text]<div class="nasa-inner-wrap nasa-pin-wrap nasa-pin-material-banner-wrap nasa-plus-style" data-pin="{&quot;nasa_pin_10&quot;:{&quot;0&quot;:{&quot;marker_pin&quot;:&quot;&lt;i class=\\&quot;nasa-icon icon-nasa-icons-plus\\&quot;&gt;&lt;\\/i&gt;&quot;,&quot;position&quot;:&quot;nasa-top&quot;,&quot;content_material&quot;:&quot;Gold Plated Steel&quot;,&quot;coords&quot;:{&quot;lat&quot;:&quot;462.5&quot;,&quot;long&quot;:&quot;158.438&quot;}},&quot;1&quot;:{&quot;marker_pin&quot;:&quot;&lt;i class=\\&quot;nasa-icon icon-nasa-icons-plus\\&quot;&gt;&lt;\\/i&gt;&quot;,&quot;position&quot;:&quot;nasa-top&quot;,&quot;content_material&quot;:&quot;Tread compound&quot;,&quot;coords&quot;:{&quot;lat&quot;:&quot;513.5&quot;,&quot;long&quot;:&quot;399&quot;}},&quot;canvas&quot;:{&quot;src&quot;:&quot;https:\\/\\/darkred-goldfish-510640.hostingersite.com\\/wp-content\\/uploads\\/2019\\/12\\/1024x550.jpg&quot;,&quot;width&quot;:&quot;1024&quot;,&quot;height&quot;:&quot;550&quot;}}}"><span class="nasa-wrap-relative-image"><img class="nasa_pin_mb_image" src="https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/12/1024x550.jpg" data-easypin_id="nasa_pin_10" alt="Material 1024x550" /></span><div id="tpl-nasa_pin_10" class="nasa-easypin-tpl"><div class="nasa-popover-clone"><div class="exPopoverContainer popove-plus-wrap {[position]}"><div class="popBg borderRadius"></div><div class="popBody"><div class="nasa-material-pin text-center"><div class="row"><div class="large-12 columns"><div class="content-wrap">{[content_material]}</div></div></div></div></div></div></div><div class="nasa-marker-clone"><div style="width:35px;height:35px"><span class="nasa-marker-icon-wrap">{[marker_pin]}<span class="nasa-action-effect"></span></span></div></div></div></div>[/vc_column_text][/vc_column][/vc_row]</p>',
    on_sale: true,
    prices: {
      price: "2000",
      regular_price: "3500",
      sale_price: "2000",
      price_range: null,
      currency_code: "NZD",
      currency_symbol: "$",
      currency_minor_unit: 2,
      currency_decimal_separator: ".",
      currency_thousand_separator: ",",
      currency_prefix: "$",
      currency_suffix: "",
    },
    price_html:
      '<del aria-hidden="true"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>35.00</span></del> <span class="screen-reader-text">Original price was: &#036;35.00.</span><ins aria-hidden="true"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>20.00</span></ins><span class="screen-reader-text">Current price is: &#036;20.00.</span>',
    average_rating: "5.00",
    review_count: 1,
    images: [
      {
        id: 1926,
        src: "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product.png",
        thumbnail:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-300x300.png",
        srcset:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product.png 600w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-300x300.png 300w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-100x100.png 100w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-150x150.png 150w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-380x380.png 380w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-450x450.png 450w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-595x595.png 595w",
        sizes: "(max-width: 600px) 100vw, 600px",
        name: "main-image-product",
        alt: "",
      },
      {
        id: 1925,
        src: "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3.png",
        thumbnail:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-300x300.png",
        srcset:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3.png 600w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-300x300.png 300w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-100x100.png 100w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-150x150.png 150w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-380x380.png 380w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-450x450.png 450w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-595x595.png 595w",
        sizes: "(max-width: 600px) 100vw, 600px",
        name: "gallery-image-product-3",
        alt: "",
      },
      {
        id: 1924,
        src: "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2.png",
        thumbnail:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-300x300.png",
        srcset:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2.png 600w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-300x300.png 300w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-100x100.png 100w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-150x150.png 150w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-380x380.png 380w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-450x450.png 450w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-595x595.png 595w",
        sizes: "(max-width: 600px) 100vw, 600px",
        name: "gallery-image-product-2",
        alt: "",
      },
      {
        id: 1923,
        src: "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1.png",
        thumbnail:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-300x300.png",
        srcset:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1.png 600w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-300x300.png 300w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-100x100.png 100w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-150x150.png 150w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-380x380.png 380w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-450x450.png 450w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-595x595.png 595w",
        sizes: "(max-width: 600px) 100vw, 600px",
        name: "gallery-image-product-1",
        alt: "",
      },
    ],
    categories: [
      {
        id: 145,
        name: "Chargers",
        slug: "chargers",
        link: "https://darkred-goldfish-510640.hostingersite.com/product-category/tech-accessories/power-cables/chargers/",
      },
    ],
    tags: [
      {
        id: 22,
        name: "Accessories",
        slug: "accessories",
        link: "https://darkred-goldfish-510640.hostingersite.com/product-tag/accessories/",
      },
      {
        id: 27,
        name: "Battery",
        slug: "battery",
        link: "https://darkred-goldfish-510640.hostingersite.com/product-tag/battery/",
      },
    ],
    brands: [],
    attributes: [],
    variations: [],
    grouped_products: [],
    has_options: false,
    is_purchasable: true,
    is_in_stock: true,
    is_on_backorder: false,
    low_stock_remaining: null,
    stock_availability: {
      text: "",
      class: "in-stock",
    },
    sold_individually: false,
    add_to_cart: {
      text: "Add to cart",
      description: "Add to cart: &ldquo;Magnetic Charging Dock&rdquo;",
      url: "/wp-json/wc/store/v1/products?per_page=50&#038;add-to-cart=396",
      single_text: "Add to cart",
      minimum: 1,
      maximum: 9999,
      multiple_of: 1,
    },
    extensions: {},
  },
  {
    id: 388,
    name: "Thermo Smart Temporal Thermometer",
    slug: "thermo-smart-temporal-thermometer",
    parent: 0,
    type: "simple",
    variation: "",
    permalink:
      "https://darkred-goldfish-510640.hostingersite.com/product/thermo-smart-temporal-thermometer/",
    sku: "",
    short_description:
      "<ul>\n<li>Automatically connected</li>\n<li>Easy setup for all devices</li>\n<li>Charges quickly in the case</li>\n<li>Rich, high-quality audio and voice</li>\n</ul>",
    description:
      '<p>[vc_row][vc_column width=&#8221;1/2&#8243;][vc_column_text]</p>\n<div class="row">\n<div class="large-12 columns margin-bottom-10" style="font-weight: 300">\n<p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire.</p>\n<p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n</div>\n</div>\n<p>[/vc_column_text][/vc_column][vc_column width=&#8221;1/2&#8243;][vc_column_text]<div class="nasa-inner-wrap nasa-pin-wrap nasa-pin-material-banner-wrap nasa-plus-style" data-pin="{&quot;nasa_pin_11&quot;:{&quot;0&quot;:{&quot;marker_pin&quot;:&quot;&lt;i class=\\&quot;nasa-icon icon-nasa-icons-plus\\&quot;&gt;&lt;\\/i&gt;&quot;,&quot;position&quot;:&quot;nasa-top&quot;,&quot;content_material&quot;:&quot;Gold Plated Steel&quot;,&quot;coords&quot;:{&quot;lat&quot;:&quot;462.5&quot;,&quot;long&quot;:&quot;158.438&quot;}},&quot;1&quot;:{&quot;marker_pin&quot;:&quot;&lt;i class=\\&quot;nasa-icon icon-nasa-icons-plus\\&quot;&gt;&lt;\\/i&gt;&quot;,&quot;position&quot;:&quot;nasa-top&quot;,&quot;content_material&quot;:&quot;Tread compound&quot;,&quot;coords&quot;:{&quot;lat&quot;:&quot;513.5&quot;,&quot;long&quot;:&quot;399&quot;}},&quot;canvas&quot;:{&quot;src&quot;:&quot;https:\\/\\/darkred-goldfish-510640.hostingersite.com\\/wp-content\\/uploads\\/2019\\/12\\/1024x550.jpg&quot;,&quot;width&quot;:&quot;1024&quot;,&quot;height&quot;:&quot;550&quot;}}}"><span class="nasa-wrap-relative-image"><img class="nasa_pin_mb_image" src="https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/12/1024x550.jpg" data-easypin_id="nasa_pin_11" alt="Material 1024x550" /></span><div id="tpl-nasa_pin_11" class="nasa-easypin-tpl"><div class="nasa-popover-clone"><div class="exPopoverContainer popove-plus-wrap {[position]}"><div class="popBg borderRadius"></div><div class="popBody"><div class="nasa-material-pin text-center"><div class="row"><div class="large-12 columns"><div class="content-wrap">{[content_material]}</div></div></div></div></div></div></div><div class="nasa-marker-clone"><div style="width:35px;height:35px"><span class="nasa-marker-icon-wrap">{[marker_pin]}<span class="nasa-action-effect"></span></span></div></div></div></div>[/vc_column_text][/vc_column][/vc_row]</p>',
    on_sale: true,
    prices: {
      price: "2000",
      regular_price: "2500",
      sale_price: "2000",
      price_range: null,
      currency_code: "NZD",
      currency_symbol: "$",
      currency_minor_unit: 2,
      currency_decimal_separator: ".",
      currency_thousand_separator: ",",
      currency_prefix: "$",
      currency_suffix: "",
    },
    price_html:
      '<del aria-hidden="true"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>25.00</span></del> <span class="screen-reader-text">Original price was: &#036;25.00.</span><ins aria-hidden="true"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>20.00</span></ins><span class="screen-reader-text">Current price is: &#036;20.00.</span>',
    average_rating: "0",
    review_count: 0,
    images: [
      {
        id: 1926,
        src: "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product.png",
        thumbnail:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-300x300.png",
        srcset:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product.png 600w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-300x300.png 300w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-100x100.png 100w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-150x150.png 150w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-380x380.png 380w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-450x450.png 450w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-595x595.png 595w",
        sizes: "(max-width: 600px) 100vw, 600px",
        name: "main-image-product",
        alt: "",
      },
      {
        id: 1925,
        src: "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3.png",
        thumbnail:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-300x300.png",
        srcset:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3.png 600w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-300x300.png 300w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-100x100.png 100w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-150x150.png 150w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-380x380.png 380w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-450x450.png 450w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-595x595.png 595w",
        sizes: "(max-width: 600px) 100vw, 600px",
        name: "gallery-image-product-3",
        alt: "",
      },
      {
        id: 1924,
        src: "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2.png",
        thumbnail:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-300x300.png",
        srcset:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2.png 600w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-300x300.png 300w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-100x100.png 100w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-150x150.png 150w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-380x380.png 380w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-450x450.png 450w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-595x595.png 595w",
        sizes: "(max-width: 600px) 100vw, 600px",
        name: "gallery-image-product-2",
        alt: "",
      },
      {
        id: 1923,
        src: "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1.png",
        thumbnail:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-300x300.png",
        srcset:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1.png 600w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-300x300.png 300w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-100x100.png 100w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-150x150.png 150w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-380x380.png 380w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-450x450.png 450w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-595x595.png 595w",
        sizes: "(max-width: 600px) 100vw, 600px",
        name: "gallery-image-product-1",
        alt: "",
      },
    ],
    categories: [
      {
        id: 153,
        name: "Health &amp; Fitness",
        slug: "health-fitness",
        link: "https://darkred-goldfish-510640.hostingersite.com/product-category/tech-accessories/others/health-fitness/",
      },
    ],
    tags: [
      {
        id: 22,
        name: "Accessories",
        slug: "accessories",
        link: "https://darkred-goldfish-510640.hostingersite.com/product-tag/accessories/",
      },
    ],
    brands: [],
    attributes: [],
    variations: [],
    grouped_products: [],
    has_options: false,
    is_purchasable: true,
    is_in_stock: true,
    is_on_backorder: false,
    low_stock_remaining: null,
    stock_availability: {
      text: "",
      class: "in-stock",
    },
    sold_individually: false,
    add_to_cart: {
      text: "Add to cart",
      description:
        "Add to cart: &ldquo;Thermo Smart Temporal Thermometer&rdquo;",
      url: "/wp-json/wc/store/v1/products?per_page=50&#038;add-to-cart=388",
      single_text: "Add to cart",
      minimum: 1,
      maximum: 9999,
      multiple_of: 1,
    },
    extensions: {},
  },
  {
    id: 380,
    name: "Magic Mouse 2",
    slug: "magic-mouse-2",
    parent: 0,
    type: "simple",
    variation: "",
    permalink:
      "https://darkred-goldfish-510640.hostingersite.com/product/magic-mouse-2/",
    sku: "",
    short_description:
      "<ul>\n<li>Automatically connected</li>\n<li>Easy setup for all devices</li>\n<li>Charges quickly in the case</li>\n<li>Rich, high-quality audio and voice</li>\n</ul>",
    description:
      '<p>[vc_row][vc_column width=&#8221;1/2&#8243;][vc_column_text]</p>\n<div class="row">\n<div class="large-12 columns margin-bottom-10" style="font-weight: 300">\n<p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire.</p>\n<p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n</div>\n</div>\n<p>[/vc_column_text][/vc_column][vc_column width=&#8221;1/2&#8243;][vc_column_text]<div class="nasa-inner-wrap nasa-pin-wrap nasa-pin-material-banner-wrap nasa-plus-style" data-pin="{&quot;nasa_pin_12&quot;:{&quot;0&quot;:{&quot;marker_pin&quot;:&quot;&lt;i class=\\&quot;nasa-icon icon-nasa-icons-plus\\&quot;&gt;&lt;\\/i&gt;&quot;,&quot;position&quot;:&quot;nasa-top&quot;,&quot;content_material&quot;:&quot;Gold Plated Steel&quot;,&quot;coords&quot;:{&quot;lat&quot;:&quot;462.5&quot;,&quot;long&quot;:&quot;158.438&quot;}},&quot;1&quot;:{&quot;marker_pin&quot;:&quot;&lt;i class=\\&quot;nasa-icon icon-nasa-icons-plus\\&quot;&gt;&lt;\\/i&gt;&quot;,&quot;position&quot;:&quot;nasa-top&quot;,&quot;content_material&quot;:&quot;Tread compound&quot;,&quot;coords&quot;:{&quot;lat&quot;:&quot;513.5&quot;,&quot;long&quot;:&quot;399&quot;}},&quot;canvas&quot;:{&quot;src&quot;:&quot;https:\\/\\/darkred-goldfish-510640.hostingersite.com\\/wp-content\\/uploads\\/2019\\/12\\/1024x550.jpg&quot;,&quot;width&quot;:&quot;1024&quot;,&quot;height&quot;:&quot;550&quot;}}}"><span class="nasa-wrap-relative-image"><img class="nasa_pin_mb_image" src="https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/12/1024x550.jpg" data-easypin_id="nasa_pin_12" alt="Material 1024x550" /></span><div id="tpl-nasa_pin_12" class="nasa-easypin-tpl"><div class="nasa-popover-clone"><div class="exPopoverContainer popove-plus-wrap {[position]}"><div class="popBg borderRadius"></div><div class="popBody"><div class="nasa-material-pin text-center"><div class="row"><div class="large-12 columns"><div class="content-wrap">{[content_material]}</div></div></div></div></div></div></div><div class="nasa-marker-clone"><div style="width:35px;height:35px"><span class="nasa-marker-icon-wrap">{[marker_pin]}<span class="nasa-action-effect"></span></span></div></div></div></div>[/vc_column_text][/vc_column][/vc_row]</p>',
    on_sale: false,
    prices: {
      price: "2500",
      regular_price: "2500",
      sale_price: "2500",
      price_range: null,
      currency_code: "NZD",
      currency_symbol: "$",
      currency_minor_unit: 2,
      currency_decimal_separator: ".",
      currency_thousand_separator: ",",
      currency_prefix: "$",
      currency_suffix: "",
    },
    price_html:
      '<span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>25.00</span>',
    average_rating: "0",
    review_count: 0,
    images: [
      {
        id: 1926,
        src: "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product.png",
        thumbnail:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-300x300.png",
        srcset:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product.png 600w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-300x300.png 300w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-100x100.png 100w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-150x150.png 150w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-380x380.png 380w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-450x450.png 450w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-595x595.png 595w",
        sizes: "(max-width: 600px) 100vw, 600px",
        name: "main-image-product",
        alt: "",
      },
      {
        id: 1925,
        src: "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3.png",
        thumbnail:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-300x300.png",
        srcset:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3.png 600w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-300x300.png 300w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-100x100.png 100w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-150x150.png 150w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-380x380.png 380w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-450x450.png 450w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-595x595.png 595w",
        sizes: "(max-width: 600px) 100vw, 600px",
        name: "gallery-image-product-3",
        alt: "",
      },
      {
        id: 1924,
        src: "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2.png",
        thumbnail:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-300x300.png",
        srcset:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2.png 600w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-300x300.png 300w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-100x100.png 100w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-150x150.png 150w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-380x380.png 380w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-450x450.png 450w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-595x595.png 595w",
        sizes: "(max-width: 600px) 100vw, 600px",
        name: "gallery-image-product-2",
        alt: "",
      },
      {
        id: 1923,
        src: "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1.png",
        thumbnail:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-300x300.png",
        srcset:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1.png 600w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-300x300.png 300w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-100x100.png 100w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-150x150.png 150w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-380x380.png 380w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-450x450.png 450w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-595x595.png 595w",
        sizes: "(max-width: 600px) 100vw, 600px",
        name: "gallery-image-product-1",
        alt: "",
      },
    ],
    categories: [
      {
        id: 156,
        name: "Mice",
        slug: "mice",
        link: "https://darkred-goldfish-510640.hostingersite.com/product-category/tech-accessories/mice-keyboards/mice/",
      },
    ],
    tags: [
      {
        id: 22,
        name: "Accessories",
        slug: "accessories",
        link: "https://darkred-goldfish-510640.hostingersite.com/product-tag/accessories/",
      },
      {
        id: 79,
        name: "Mouse",
        slug: "mouse",
        link: "https://darkred-goldfish-510640.hostingersite.com/product-tag/mouse/",
      },
    ],
    brands: [],
    attributes: [],
    variations: [],
    grouped_products: [],
    has_options: false,
    is_purchasable: true,
    is_in_stock: true,
    is_on_backorder: false,
    low_stock_remaining: null,
    stock_availability: {
      text: "",
      class: "in-stock",
    },
    sold_individually: false,
    add_to_cart: {
      text: "Add to cart",
      description: "Add to cart: &ldquo;Magic Mouse 2&rdquo;",
      url: "/wp-json/wc/store/v1/products?per_page=50&#038;add-to-cart=380",
      single_text: "Add to cart",
      minimum: 1,
      maximum: 9999,
      multiple_of: 1,
    },
    extensions: {},
  },
  {
    id: 377,
    name: "Wacom Intuos Pro Pen",
    slug: "wacom-intuos-pro-pen",
    parent: 0,
    type: "simple",
    variation: "",
    permalink:
      "https://darkred-goldfish-510640.hostingersite.com/product/wacom-intuos-pro-pen/",
    sku: "",
    short_description:
      "<ul>\n<li>Automatically connected</li>\n<li>Easy setup for all devices</li>\n<li>Charges quickly in the case</li>\n<li>Rich, high-quality audio and voice</li>\n</ul>",
    description:
      '<p>[vc_row][vc_column width=&#8221;1/2&#8243;][vc_column_text]</p>\n<div class="row">\n<div class="large-12 columns margin-bottom-10" style="font-weight: 300">\n<p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire.</p>\n<p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n</div>\n</div>\n<p>[/vc_column_text][/vc_column][vc_column width=&#8221;1/2&#8243;][vc_column_text]<div class="nasa-inner-wrap nasa-pin-wrap nasa-pin-material-banner-wrap nasa-plus-style" data-pin="{&quot;nasa_pin_13&quot;:{&quot;0&quot;:{&quot;marker_pin&quot;:&quot;&lt;i class=\\&quot;nasa-icon icon-nasa-icons-plus\\&quot;&gt;&lt;\\/i&gt;&quot;,&quot;position&quot;:&quot;nasa-top&quot;,&quot;content_material&quot;:&quot;Gold Plated Steel&quot;,&quot;coords&quot;:{&quot;lat&quot;:&quot;462.5&quot;,&quot;long&quot;:&quot;158.438&quot;}},&quot;1&quot;:{&quot;marker_pin&quot;:&quot;&lt;i class=\\&quot;nasa-icon icon-nasa-icons-plus\\&quot;&gt;&lt;\\/i&gt;&quot;,&quot;position&quot;:&quot;nasa-top&quot;,&quot;content_material&quot;:&quot;Tread compound&quot;,&quot;coords&quot;:{&quot;lat&quot;:&quot;513.5&quot;,&quot;long&quot;:&quot;399&quot;}},&quot;canvas&quot;:{&quot;src&quot;:&quot;https:\\/\\/darkred-goldfish-510640.hostingersite.com\\/wp-content\\/uploads\\/2019\\/12\\/1024x550.jpg&quot;,&quot;width&quot;:&quot;1024&quot;,&quot;height&quot;:&quot;550&quot;}}}"><span class="nasa-wrap-relative-image"><img class="nasa_pin_mb_image" src="https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/12/1024x550.jpg" data-easypin_id="nasa_pin_13" alt="Material 1024x550" /></span><div id="tpl-nasa_pin_13" class="nasa-easypin-tpl"><div class="nasa-popover-clone"><div class="exPopoverContainer popove-plus-wrap {[position]}"><div class="popBg borderRadius"></div><div class="popBody"><div class="nasa-material-pin text-center"><div class="row"><div class="large-12 columns"><div class="content-wrap">{[content_material]}</div></div></div></div></div></div></div><div class="nasa-marker-clone"><div style="width:35px;height:35px"><span class="nasa-marker-icon-wrap">{[marker_pin]}<span class="nasa-action-effect"></span></span></div></div></div></div>[/vc_column_text][/vc_column][/vc_row]</p>',
    on_sale: false,
    prices: {
      price: "4500",
      regular_price: "4500",
      sale_price: "4500",
      price_range: null,
      currency_code: "NZD",
      currency_symbol: "$",
      currency_minor_unit: 2,
      currency_decimal_separator: ".",
      currency_thousand_separator: ",",
      currency_prefix: "$",
      currency_suffix: "",
    },
    price_html:
      '<span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>45.00</span>',
    average_rating: "5.00",
    review_count: 1,
    images: [
      {
        id: 1926,
        src: "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product.png",
        thumbnail:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-300x300.png",
        srcset:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product.png 600w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-300x300.png 300w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-100x100.png 100w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-150x150.png 150w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-380x380.png 380w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-450x450.png 450w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-595x595.png 595w",
        sizes: "(max-width: 600px) 100vw, 600px",
        name: "main-image-product",
        alt: "",
      },
      {
        id: 1925,
        src: "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3.png",
        thumbnail:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-300x300.png",
        srcset:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3.png 600w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-300x300.png 300w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-100x100.png 100w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-150x150.png 150w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-380x380.png 380w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-450x450.png 450w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-595x595.png 595w",
        sizes: "(max-width: 600px) 100vw, 600px",
        name: "gallery-image-product-3",
        alt: "",
      },
      {
        id: 1924,
        src: "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2.png",
        thumbnail:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-300x300.png",
        srcset:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2.png 600w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-300x300.png 300w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-100x100.png 100w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-150x150.png 150w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-380x380.png 380w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-450x450.png 450w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-595x595.png 595w",
        sizes: "(max-width: 600px) 100vw, 600px",
        name: "gallery-image-product-2",
        alt: "",
      },
      {
        id: 1923,
        src: "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1.png",
        thumbnail:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-300x300.png",
        srcset:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1.png 600w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-300x300.png 300w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-100x100.png 100w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-150x150.png 150w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-380x380.png 380w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-450x450.png 450w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-595x595.png 595w",
        sizes: "(max-width: 600px) 100vw, 600px",
        name: "gallery-image-product-1",
        alt: "",
      },
    ],
    categories: [
      {
        id: 156,
        name: "Mice",
        slug: "mice",
        link: "https://darkred-goldfish-510640.hostingersite.com/product-category/tech-accessories/mice-keyboards/mice/",
      },
    ],
    tags: [
      {
        id: 22,
        name: "Accessories",
        slug: "accessories",
        link: "https://darkred-goldfish-510640.hostingersite.com/product-tag/accessories/",
      },
      {
        id: 76,
        name: "Mice",
        slug: "mice",
        link: "https://darkred-goldfish-510640.hostingersite.com/product-tag/mice/",
      },
    ],
    brands: [],
    attributes: [],
    variations: [],
    grouped_products: [],
    has_options: false,
    is_purchasable: true,
    is_in_stock: true,
    is_on_backorder: false,
    low_stock_remaining: null,
    stock_availability: {
      text: "",
      class: "in-stock",
    },
    sold_individually: false,
    add_to_cart: {
      text: "Add to cart",
      description: "Add to cart: &ldquo;Wacom Intuos Pro Pen&rdquo;",
      url: "/wp-json/wc/store/v1/products?per_page=50&#038;add-to-cart=377",
      single_text: "Add to cart",
      minimum: 1,
      maximum: 9999,
      multiple_of: 1,
    },
    extensions: {},
  },
  {
    id: 356,
    name: "Wireless Charging Case",
    slug: "wireless-charging-case",
    parent: 0,
    type: "simple",
    variation: "",
    permalink:
      "https://darkred-goldfish-510640.hostingersite.com/product/wireless-charging-case/",
    sku: "",
    short_description:
      "<ul>\n<li>Automatically connected</li>\n<li>Easy setup for all devices</li>\n<li>Charges quickly in the case</li>\n<li>Rich, high-quality audio and voice</li>\n</ul>",
    description:
      '<p>[vc_row][vc_column width=&#8221;1/2&#8243;][vc_column_text]</p>\n<div class="row">\n<div class="large-12 columns margin-bottom-10" style="font-weight: 300">\n<p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire.</p>\n<p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n</div>\n</div>\n<p>[/vc_column_text][/vc_column][vc_column width=&#8221;1/2&#8243;][vc_column_text]<div class="nasa-inner-wrap nasa-pin-wrap nasa-pin-material-banner-wrap nasa-plus-style" data-pin="{&quot;nasa_pin_14&quot;:{&quot;0&quot;:{&quot;marker_pin&quot;:&quot;&lt;i class=\\&quot;nasa-icon icon-nasa-icons-plus\\&quot;&gt;&lt;\\/i&gt;&quot;,&quot;position&quot;:&quot;nasa-top&quot;,&quot;content_material&quot;:&quot;Gold Plated Steel&quot;,&quot;coords&quot;:{&quot;lat&quot;:&quot;462.5&quot;,&quot;long&quot;:&quot;158.438&quot;}},&quot;1&quot;:{&quot;marker_pin&quot;:&quot;&lt;i class=\\&quot;nasa-icon icon-nasa-icons-plus\\&quot;&gt;&lt;\\/i&gt;&quot;,&quot;position&quot;:&quot;nasa-top&quot;,&quot;content_material&quot;:&quot;Tread compound&quot;,&quot;coords&quot;:{&quot;lat&quot;:&quot;513.5&quot;,&quot;long&quot;:&quot;399&quot;}},&quot;canvas&quot;:{&quot;src&quot;:&quot;https:\\/\\/darkred-goldfish-510640.hostingersite.com\\/wp-content\\/uploads\\/2019\\/12\\/1024x550.jpg&quot;,&quot;width&quot;:&quot;1024&quot;,&quot;height&quot;:&quot;550&quot;}}}"><span class="nasa-wrap-relative-image"><img class="nasa_pin_mb_image" src="https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/12/1024x550.jpg" data-easypin_id="nasa_pin_14" alt="Material 1024x550" /></span><div id="tpl-nasa_pin_14" class="nasa-easypin-tpl"><div class="nasa-popover-clone"><div class="exPopoverContainer popove-plus-wrap {[position]}"><div class="popBg borderRadius"></div><div class="popBody"><div class="nasa-material-pin text-center"><div class="row"><div class="large-12 columns"><div class="content-wrap">{[content_material]}</div></div></div></div></div></div></div><div class="nasa-marker-clone"><div style="width:35px;height:35px"><span class="nasa-marker-icon-wrap">{[marker_pin]}<span class="nasa-action-effect"></span></span></div></div></div></div>[/vc_column_text][/vc_column][/vc_row]</p>',
    on_sale: false,
    prices: {
      price: "3500",
      regular_price: "3500",
      sale_price: "3500",
      price_range: null,
      currency_code: "NZD",
      currency_symbol: "$",
      currency_minor_unit: 2,
      currency_decimal_separator: ".",
      currency_thousand_separator: ",",
      currency_prefix: "$",
      currency_suffix: "",
    },
    price_html:
      '<span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>35.00</span>',
    average_rating: "5.00",
    review_count: 1,
    images: [
      {
        id: 1926,
        src: "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product.png",
        thumbnail:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-300x300.png",
        srcset:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product.png 600w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-300x300.png 300w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-100x100.png 100w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-150x150.png 150w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-380x380.png 380w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-450x450.png 450w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-595x595.png 595w",
        sizes: "(max-width: 600px) 100vw, 600px",
        name: "main-image-product",
        alt: "",
      },
      {
        id: 1925,
        src: "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3.png",
        thumbnail:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-300x300.png",
        srcset:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3.png 600w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-300x300.png 300w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-100x100.png 100w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-150x150.png 150w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-380x380.png 380w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-450x450.png 450w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-595x595.png 595w",
        sizes: "(max-width: 600px) 100vw, 600px",
        name: "gallery-image-product-3",
        alt: "",
      },
      {
        id: 1924,
        src: "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2.png",
        thumbnail:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-300x300.png",
        srcset:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2.png 600w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-300x300.png 300w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-100x100.png 100w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-150x150.png 150w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-380x380.png 380w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-450x450.png 450w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-595x595.png 595w",
        sizes: "(max-width: 600px) 100vw, 600px",
        name: "gallery-image-product-2",
        alt: "",
      },
      {
        id: 1923,
        src: "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1.png",
        thumbnail:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-300x300.png",
        srcset:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1.png 600w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-300x300.png 300w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-100x100.png 100w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-150x150.png 150w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-380x380.png 380w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-450x450.png 450w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-595x595.png 595w",
        sizes: "(max-width: 600px) 100vw, 600px",
        name: "gallery-image-product-1",
        alt: "",
      },
    ],
    categories: [
      {
        id: 151,
        name: "Headphone Cases",
        slug: "headphone-cases",
        link: "https://darkred-goldfish-510640.hostingersite.com/product-category/tech-accessories/headphones-speakers/headphone-cases/",
      },
    ],
    tags: [
      {
        id: 22,
        name: "Accessories",
        slug: "accessories",
        link: "https://darkred-goldfish-510640.hostingersite.com/product-tag/accessories/",
      },
      {
        id: 53,
        name: "case",
        slug: "case",
        link: "https://darkred-goldfish-510640.hostingersite.com/product-tag/case/",
      },
    ],
    brands: [],
    attributes: [],
    variations: [],
    grouped_products: [],
    has_options: false,
    is_purchasable: true,
    is_in_stock: true,
    is_on_backorder: false,
    low_stock_remaining: null,
    stock_availability: {
      text: "",
      class: "in-stock",
    },
    sold_individually: false,
    add_to_cart: {
      text: "Add to cart",
      description: "Add to cart: &ldquo;Wireless Charging Case&rdquo;",
      url: "/wp-json/wc/store/v1/products?per_page=50&#038;add-to-cart=356",
      single_text: "Add to cart",
      minimum: 1,
      maximum: 9999,
      multiple_of: 1,
    },
    extensions: {},
  },
  {
    id: 346,
    name: "Gamevice Controller",
    slug: "gamevice-controller",
    parent: 0,
    type: "simple",
    variation: "",
    permalink:
      "https://darkred-goldfish-510640.hostingersite.com/product/gamevice-controller/",
    sku: "",
    short_description:
      "<ul>\n<li>Automatically connected</li>\n<li>Easy setup for all devices</li>\n<li>Charges quickly in the case</li>\n<li>Rich, high-quality audio and voice</li>\n</ul>",
    description:
      '<p>[vc_row][vc_column width=&#8221;1/2&#8243;][vc_column_text]</p>\n<div class="row">\n<div class="large-12 columns margin-bottom-10" style="font-weight: 300">\n<p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire.</p>\n<p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n</div>\n</div>\n<p>[/vc_column_text][/vc_column][vc_column width=&#8221;1/2&#8243;][vc_column_text]<div class="nasa-inner-wrap nasa-pin-wrap nasa-pin-material-banner-wrap nasa-plus-style" data-pin="{&quot;nasa_pin_15&quot;:{&quot;0&quot;:{&quot;marker_pin&quot;:&quot;&lt;i class=\\&quot;nasa-icon icon-nasa-icons-plus\\&quot;&gt;&lt;\\/i&gt;&quot;,&quot;position&quot;:&quot;nasa-top&quot;,&quot;content_material&quot;:&quot;Gold Plated Steel&quot;,&quot;coords&quot;:{&quot;lat&quot;:&quot;462.5&quot;,&quot;long&quot;:&quot;158.438&quot;}},&quot;1&quot;:{&quot;marker_pin&quot;:&quot;&lt;i class=\\&quot;nasa-icon icon-nasa-icons-plus\\&quot;&gt;&lt;\\/i&gt;&quot;,&quot;position&quot;:&quot;nasa-top&quot;,&quot;content_material&quot;:&quot;Tread compound&quot;,&quot;coords&quot;:{&quot;lat&quot;:&quot;513.5&quot;,&quot;long&quot;:&quot;399&quot;}},&quot;canvas&quot;:{&quot;src&quot;:&quot;https:\\/\\/darkred-goldfish-510640.hostingersite.com\\/wp-content\\/uploads\\/2019\\/12\\/1024x550.jpg&quot;,&quot;width&quot;:&quot;1024&quot;,&quot;height&quot;:&quot;550&quot;}}}"><span class="nasa-wrap-relative-image"><img class="nasa_pin_mb_image" src="https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/12/1024x550.jpg" data-easypin_id="nasa_pin_15" alt="Material 1024x550" /></span><div id="tpl-nasa_pin_15" class="nasa-easypin-tpl"><div class="nasa-popover-clone"><div class="exPopoverContainer popove-plus-wrap {[position]}"><div class="popBg borderRadius"></div><div class="popBody"><div class="nasa-material-pin text-center"><div class="row"><div class="large-12 columns"><div class="content-wrap">{[content_material]}</div></div></div></div></div></div></div><div class="nasa-marker-clone"><div style="width:35px;height:35px"><span class="nasa-marker-icon-wrap">{[marker_pin]}<span class="nasa-action-effect"></span></span></div></div></div></div>[/vc_column_text][/vc_column][/vc_row]</p>',
    on_sale: false,
    prices: {
      price: "5000",
      regular_price: "5000",
      sale_price: "5000",
      price_range: null,
      currency_code: "NZD",
      currency_symbol: "$",
      currency_minor_unit: 2,
      currency_decimal_separator: ".",
      currency_thousand_separator: ",",
      currency_prefix: "$",
      currency_suffix: "",
    },
    price_html:
      '<span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>50.00</span>',
    average_rating: "0",
    review_count: 0,
    images: [
      {
        id: 1926,
        src: "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product.png",
        thumbnail:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-300x300.png",
        srcset:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product.png 600w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-300x300.png 300w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-100x100.png 100w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-150x150.png 150w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-380x380.png 380w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-450x450.png 450w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-595x595.png 595w",
        sizes: "(max-width: 600px) 100vw, 600px",
        name: "main-image-product",
        alt: "",
      },
      {
        id: 1924,
        src: "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2.png",
        thumbnail:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-300x300.png",
        srcset:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2.png 600w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-300x300.png 300w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-100x100.png 100w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-150x150.png 150w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-380x380.png 380w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-450x450.png 450w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-595x595.png 595w",
        sizes: "(max-width: 600px) 100vw, 600px",
        name: "gallery-image-product-2",
        alt: "",
      },
      {
        id: 1923,
        src: "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1.png",
        thumbnail:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-300x300.png",
        srcset:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1.png 600w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-300x300.png 300w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-100x100.png 100w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-150x150.png 150w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-380x380.png 380w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-450x450.png 450w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-595x595.png 595w",
        sizes: "(max-width: 600px) 100vw, 600px",
        name: "gallery-image-product-1",
        alt: "",
      },
      {
        id: 1925,
        src: "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3.png",
        thumbnail:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-300x300.png",
        srcset:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3.png 600w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-300x300.png 300w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-100x100.png 100w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-150x150.png 150w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-380x380.png 380w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-450x450.png 450w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-595x595.png 595w",
        sizes: "(max-width: 600px) 100vw, 600px",
        name: "gallery-image-product-3",
        alt: "",
      },
    ],
    categories: [
      {
        id: 149,
        name: "Game Controller",
        slug: "game-controller",
        link: "https://darkred-goldfish-510640.hostingersite.com/product-category/tech-accessories/gaming-toys/game-controller/",
      },
    ],
    tags: [
      {
        id: 22,
        name: "Accessories",
        slug: "accessories",
        link: "https://darkred-goldfish-510640.hostingersite.com/product-tag/accessories/",
      },
      {
        id: 58,
        name: "Gamevice Controller",
        slug: "gamevice-controller",
        link: "https://darkred-goldfish-510640.hostingersite.com/product-tag/gamevice-controller/",
      },
    ],
    brands: [],
    attributes: [],
    variations: [],
    grouped_products: [],
    has_options: false,
    is_purchasable: true,
    is_in_stock: false,
    is_on_backorder: false,
    low_stock_remaining: null,
    stock_availability: {
      text: "Out of stock",
      class: "out-of-stock",
    },
    sold_individually: false,
    add_to_cart: {
      text: "Read more",
      description: "Read more about &ldquo;Gamevice Controller&rdquo;",
      url: "https://darkred-goldfish-510640.hostingersite.com/product/gamevice-controller/",
      single_text: "Add to cart",
      minimum: 1,
      maximum: 9999,
      multiple_of: 1,
    },
    extensions: {},
  },
  {
    id: 317,
    name: "Macro 14x Essential Lenses",
    slug: "macro-14x-essential-lenses",
    parent: 0,
    type: "simple",
    variation: "",
    permalink:
      "https://darkred-goldfish-510640.hostingersite.com/product/macro-14x-essential-lenses/",
    sku: "",
    short_description:
      "<ul>\n<li>Automatically connected</li>\n<li>Easy setup for all devices</li>\n<li>Charges quickly in the case</li>\n<li>Rich, high-quality audio and voice</li>\n</ul>",
    description:
      '<p>[vc_row][vc_column width=&#8221;1/2&#8243;][vc_column_text]</p>\n<div class="row">\n<div class="large-12 columns margin-bottom-10" style="font-weight: 300">\n<p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire.</p>\n<p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n</div>\n</div>\n<p>[/vc_column_text][/vc_column][vc_column width=&#8221;1/2&#8243;][vc_column_text]<div class="nasa-inner-wrap nasa-pin-wrap nasa-pin-material-banner-wrap nasa-plus-style" data-pin="{&quot;nasa_pin_16&quot;:{&quot;0&quot;:{&quot;marker_pin&quot;:&quot;&lt;i class=\\&quot;nasa-icon icon-nasa-icons-plus\\&quot;&gt;&lt;\\/i&gt;&quot;,&quot;position&quot;:&quot;nasa-top&quot;,&quot;content_material&quot;:&quot;Gold Plated Steel&quot;,&quot;coords&quot;:{&quot;lat&quot;:&quot;462.5&quot;,&quot;long&quot;:&quot;158.438&quot;}},&quot;1&quot;:{&quot;marker_pin&quot;:&quot;&lt;i class=\\&quot;nasa-icon icon-nasa-icons-plus\\&quot;&gt;&lt;\\/i&gt;&quot;,&quot;position&quot;:&quot;nasa-top&quot;,&quot;content_material&quot;:&quot;Tread compound&quot;,&quot;coords&quot;:{&quot;lat&quot;:&quot;513.5&quot;,&quot;long&quot;:&quot;399&quot;}},&quot;canvas&quot;:{&quot;src&quot;:&quot;https:\\/\\/darkred-goldfish-510640.hostingersite.com\\/wp-content\\/uploads\\/2019\\/12\\/1024x550.jpg&quot;,&quot;width&quot;:&quot;1024&quot;,&quot;height&quot;:&quot;550&quot;}}}"><span class="nasa-wrap-relative-image"><img class="nasa_pin_mb_image" src="https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/12/1024x550.jpg" data-easypin_id="nasa_pin_16" alt="Material 1024x550" /></span><div id="tpl-nasa_pin_16" class="nasa-easypin-tpl"><div class="nasa-popover-clone"><div class="exPopoverContainer popove-plus-wrap {[position]}"><div class="popBg borderRadius"></div><div class="popBody"><div class="nasa-material-pin text-center"><div class="row"><div class="large-12 columns"><div class="content-wrap">{[content_material]}</div></div></div></div></div></div></div><div class="nasa-marker-clone"><div style="width:35px;height:35px"><span class="nasa-marker-icon-wrap">{[marker_pin]}<span class="nasa-action-effect"></span></span></div></div></div></div>[/vc_column_text][/vc_column][/vc_row]</p>',
    on_sale: true,
    prices: {
      price: "3500",
      regular_price: "5000",
      sale_price: "3500",
      price_range: null,
      currency_code: "NZD",
      currency_symbol: "$",
      currency_minor_unit: 2,
      currency_decimal_separator: ".",
      currency_thousand_separator: ",",
      currency_prefix: "$",
      currency_suffix: "",
    },
    price_html:
      '<del aria-hidden="true"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>50.00</span></del> <span class="screen-reader-text">Original price was: &#036;50.00.</span><ins aria-hidden="true"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>35.00</span></ins><span class="screen-reader-text">Current price is: &#036;35.00.</span>',
    average_rating: "0",
    review_count: 0,
    images: [
      {
        id: 1926,
        src: "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product.png",
        thumbnail:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-300x300.png",
        srcset:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product.png 600w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-300x300.png 300w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-100x100.png 100w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-150x150.png 150w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-380x380.png 380w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-450x450.png 450w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-595x595.png 595w",
        sizes: "(max-width: 600px) 100vw, 600px",
        name: "main-image-product",
        alt: "",
      },
      {
        id: 1925,
        src: "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3.png",
        thumbnail:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-300x300.png",
        srcset:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3.png 600w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-300x300.png 300w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-100x100.png 100w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-150x150.png 150w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-380x380.png 380w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-450x450.png 450w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-595x595.png 595w",
        sizes: "(max-width: 600px) 100vw, 600px",
        name: "gallery-image-product-3",
        alt: "",
      },
      {
        id: 1924,
        src: "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2.png",
        thumbnail:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-300x300.png",
        srcset:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2.png 600w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-300x300.png 300w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-100x100.png 100w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-150x150.png 150w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-380x380.png 380w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-450x450.png 450w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-595x595.png 595w",
        sizes: "(max-width: 600px) 100vw, 600px",
        name: "gallery-image-product-2",
        alt: "",
      },
      {
        id: 1923,
        src: "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1.png",
        thumbnail:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-300x300.png",
        srcset:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1.png 600w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-300x300.png 300w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-100x100.png 100w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-150x150.png 150w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-380x380.png 380w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-450x450.png 450w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-595x595.png 595w",
        sizes: "(max-width: 600px) 100vw, 600px",
        name: "gallery-image-product-1",
        alt: "",
      },
    ],
    categories: [
      {
        id: 125,
        name: "Cases &amp; Covers",
        slug: "cases-covers",
        link: "https://darkred-goldfish-510640.hostingersite.com/product-category/tech-accessories/case-protection/cases-covers/",
      },
    ],
    tags: [
      {
        id: 22,
        name: "Accessories",
        slug: "accessories",
        link: "https://darkred-goldfish-510640.hostingersite.com/product-tag/accessories/",
      },
    ],
    brands: [],
    attributes: [],
    variations: [],
    grouped_products: [],
    has_options: false,
    is_purchasable: true,
    is_in_stock: true,
    is_on_backorder: false,
    low_stock_remaining: null,
    stock_availability: {
      text: "100 in stock",
      class: "in-stock",
    },
    sold_individually: false,
    add_to_cart: {
      text: "Add to cart",
      description: "Add to cart: &ldquo;Macro 14x Essential Lenses&rdquo;",
      url: "/wp-json/wc/store/v1/products?per_page=50&#038;add-to-cart=317",
      single_text: "Add to cart",
      minimum: 1,
      maximum: 100,
      multiple_of: 1,
    },
    extensions: {},
  },
  {
    id: 238,
    name: "Belkin Fitness Armband",
    slug: "belkin-fitness-armband",
    parent: 0,
    type: "simple",
    variation: "",
    permalink:
      "https://darkred-goldfish-510640.hostingersite.com/product/belkin-fitness-armband/",
    sku: "",
    short_description:
      "<ul>\n<li>Automatically connected</li>\n<li>Easy setup for all devices</li>\n<li>Charges quickly in the case</li>\n<li>Rich, high-quality audio and voice</li>\n</ul>",
    description:
      '<p>[vc_row][vc_column width=&#8221;1/2&#8243;][vc_column_text]</p>\n<div class="row">\n<div class="large-12 columns margin-bottom-10" style="font-weight: 300">\n<p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire.</p>\n<p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n</div>\n</div>\n<p>[/vc_column_text][/vc_column][vc_column width=&#8221;1/2&#8243;][vc_column_text]<div class="nasa-inner-wrap nasa-pin-wrap nasa-pin-material-banner-wrap nasa-plus-style" data-pin="{&quot;nasa_pin_17&quot;:{&quot;0&quot;:{&quot;marker_pin&quot;:&quot;&lt;i class=\\&quot;nasa-icon icon-nasa-icons-plus\\&quot;&gt;&lt;\\/i&gt;&quot;,&quot;position&quot;:&quot;nasa-top&quot;,&quot;content_material&quot;:&quot;Gold Plated Steel&quot;,&quot;coords&quot;:{&quot;lat&quot;:&quot;462.5&quot;,&quot;long&quot;:&quot;158.438&quot;}},&quot;1&quot;:{&quot;marker_pin&quot;:&quot;&lt;i class=\\&quot;nasa-icon icon-nasa-icons-plus\\&quot;&gt;&lt;\\/i&gt;&quot;,&quot;position&quot;:&quot;nasa-top&quot;,&quot;content_material&quot;:&quot;Tread compound&quot;,&quot;coords&quot;:{&quot;lat&quot;:&quot;513.5&quot;,&quot;long&quot;:&quot;399&quot;}},&quot;canvas&quot;:{&quot;src&quot;:&quot;https:\\/\\/darkred-goldfish-510640.hostingersite.com\\/wp-content\\/uploads\\/2019\\/12\\/1024x550.jpg&quot;,&quot;width&quot;:&quot;1024&quot;,&quot;height&quot;:&quot;550&quot;}}}"><span class="nasa-wrap-relative-image"><img class="nasa_pin_mb_image" src="https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/12/1024x550.jpg" data-easypin_id="nasa_pin_17" alt="Material 1024x550" /></span><div id="tpl-nasa_pin_17" class="nasa-easypin-tpl"><div class="nasa-popover-clone"><div class="exPopoverContainer popove-plus-wrap {[position]}"><div class="popBg borderRadius"></div><div class="popBody"><div class="nasa-material-pin text-center"><div class="row"><div class="large-12 columns"><div class="content-wrap">{[content_material]}</div></div></div></div></div></div></div><div class="nasa-marker-clone"><div style="width:35px;height:35px"><span class="nasa-marker-icon-wrap">{[marker_pin]}<span class="nasa-action-effect"></span></span></div></div></div></div>[/vc_column_text][/vc_column][/vc_row]</p>',
    on_sale: false,
    prices: {
      price: "5000",
      regular_price: "5000",
      sale_price: "5000",
      price_range: null,
      currency_code: "NZD",
      currency_symbol: "$",
      currency_minor_unit: 2,
      currency_decimal_separator: ".",
      currency_thousand_separator: ",",
      currency_prefix: "$",
      currency_suffix: "",
    },
    price_html:
      '<span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>50.00</span>',
    average_rating: "5.00",
    review_count: 1,
    images: [
      {
        id: 1926,
        src: "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product.png",
        thumbnail:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-300x300.png",
        srcset:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product.png 600w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-300x300.png 300w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-100x100.png 100w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-150x150.png 150w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-380x380.png 380w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-450x450.png 450w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/main-image-product-595x595.png 595w",
        sizes: "(max-width: 600px) 100vw, 600px",
        name: "main-image-product",
        alt: "",
      },
      {
        id: 1925,
        src: "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3.png",
        thumbnail:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-300x300.png",
        srcset:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3.png 600w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-300x300.png 300w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-100x100.png 100w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-150x150.png 150w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-380x380.png 380w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-450x450.png 450w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-3-595x595.png 595w",
        sizes: "(max-width: 600px) 100vw, 600px",
        name: "gallery-image-product-3",
        alt: "",
      },
      {
        id: 1924,
        src: "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2.png",
        thumbnail:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-300x300.png",
        srcset:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2.png 600w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-300x300.png 300w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-100x100.png 100w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-150x150.png 150w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-380x380.png 380w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-450x450.png 450w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-2-595x595.png 595w",
        sizes: "(max-width: 600px) 100vw, 600px",
        name: "gallery-image-product-2",
        alt: "",
      },
      {
        id: 1923,
        src: "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1.png",
        thumbnail:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-300x300.png",
        srcset:
          "https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1.png 600w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-300x300.png 300w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-100x100.png 100w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-150x150.png 150w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-380x380.png 380w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-450x450.png 450w, https://darkred-goldfish-510640.hostingersite.com/wp-content/uploads/2019/06/gallery-image-product-1-595x595.png 595w",
        sizes: "(max-width: 600px) 100vw, 600px",
        name: "gallery-image-product-1",
        alt: "",
      },
    ],
    categories: [
      {
        id: 142,
        name: "Armbands",
        slug: "armbands",
        link: "https://darkred-goldfish-510640.hostingersite.com/product-category/tech-accessories/case-protection/armbands/",
      },
    ],
    tags: [
      {
        id: 22,
        name: "Accessories",
        slug: "accessories",
        link: "https://darkred-goldfish-510640.hostingersite.com/product-tag/accessories/",
      },
      {
        id: 24,
        name: "Armbands",
        slug: "armbands",
        link: "https://darkred-goldfish-510640.hostingersite.com/product-tag/armbands/",
      },
      {
        id: 53,
        name: "case",
        slug: "case",
        link: "https://darkred-goldfish-510640.hostingersite.com/product-tag/case/",
      },
    ],
    brands: [],
    attributes: [],
    variations: [],
    grouped_products: [],
    has_options: false,
    is_purchasable: true,
    is_in_stock: true,
    is_on_backorder: false,
    low_stock_remaining: null,
    stock_availability: {
      text: "64 in stock",
      class: "in-stock",
    },
    sold_individually: false,
    add_to_cart: {
      text: "Add to cart",
      description: "Add to cart: &ldquo;Belkin Fitness Armband&rdquo;",
      url: "/wp-json/wc/store/v1/products?per_page=50&#038;add-to-cart=238",
      single_text: "Add to cart",
      minimum: 1,
      maximum: 64,
      multiple_of: 1,
    },
    extensions: {},
  },
];
