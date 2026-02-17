import { SearchTabType } from "./SearchTabs";

export type SearchFilterProps = {
  filterType: SearchTabType;
};

type FilterField = {
  key: string;
  label: string;
  options: { value: string; label: string }[];
};

type FilterConfig = {
  fields: FilterField[];
  gridColumns: {
    xs: string;
    sm: string;
    lg: string;
  };
};

// 统一的筛选器配置
export const searchConfig: Record<SearchTabType, FilterConfig> = {
  vehicle: {
    gridColumns: {
      xs: "1fr",
      sm: "repeat(2, 1fr)",
      lg: "repeat(6, 1fr)",
    },
    fields: [
      {
        key: "make",
        label: "MAKE",
        options: [
          { value: "toyota", label: "Toyota" },
          { value: "honda", label: "Honda" },
          { value: "ford", label: "Ford" },
        ],
      },
      {
        key: "model",
        label: "MODEL",
        options: [
          { value: "camry", label: "Camry" },
          { value: "accord", label: "Accord" },
          { value: "f150", label: "F-150" },
        ],
      },
      {
        key: "year",
        label: "YEAR",
        options: [
          { value: "2023", label: "2023" },
          { value: "2022", label: "2022" },
          { value: "2021", label: "2021" },
        ],
      },
      {
        key: "trim",
        label: "TRIM",
        options: [
          { value: "base", label: "Base" },
          { value: "sport", label: "Sport" },
          { value: "luxury", label: "Luxury" },
        ],
      },
      {
        key: "diameter",
        label: "DIAMETER",
        options: [
          { value: "16", label: '16"' },
          { value: "17", label: '17"' },
          { value: "18", label: '18"' },
        ],
      },
      {
        key: "stock",
        label: "STOCK",
        options: [
          { value: "instock", label: "In Stock" },
          { value: "outofstock", label: "Out of Stock" },
        ],
      },
    ],
  },
  wheel: {
    gridColumns: {
      xs: "1fr",
      sm: "repeat(2, 1fr)",
      lg: "repeat(4, 1fr)",
    },
    fields: [
      {
        key: "diameter",
        label: "DIAMETER",
        options: [
          { value: "17", label: '17"' },
          { value: "18", label: '18"' },
          { value: "19", label: '19"' },
          { value: "20", label: '20"' },
        ],
      },
      {
        key: "width",
        label: "WIDTH",
        options: [
          { value: "7", label: '7"' },
          { value: "7.5", label: '7.5"' },
          { value: "8", label: '8"' },
          { value: "8.5", label: '8.5"' },
        ],
      },
      {
        key: "boltPattern",
        label: "BOLT PATTERN",
        options: [
          { value: "5x114.3", label: "5x114.3" },
          { value: "5x120", label: "5x120" },
          { value: "5x112", label: "5x112" },
        ],
      },
      {
        key: "finish",
        label: "FINISH",
        options: [
          { value: "silver", label: "Silver" },
          { value: "black", label: "Black" },
          { value: "chrome", label: "Chrome" },
        ],
      },
    ],
  },
  tyre: {
    gridColumns: {
      xs: "1fr",
      sm: "repeat(2, 1fr)",
      lg: "repeat(4, 1fr)",
    },
    fields: [
      {
        key: "width",
        label: "WIDTH",
        options: [
          { value: "205", label: "205" },
          { value: "215", label: "215" },
          { value: "225", label: "225" },
          { value: "235", label: "235" },
        ],
      },
      {
        key: "aspectRatio",
        label: "ASPECT RATIO",
        options: [
          { value: "45", label: "45" },
          { value: "50", label: "50" },
          { value: "55", label: "55" },
          { value: "60", label: "60" },
        ],
      },
      {
        key: "rimDiameter",
        label: "RIM DIAMETER",
        options: [
          { value: "16", label: '16"' },
          { value: "17", label: '17"' },
          { value: "18", label: '18"' },
        ],
      },
      {
        key: "brand",
        label: "BRAND",
        options: [
          { value: "michelin", label: "Michelin" },
          { value: "bridgestone", label: "Bridgestone" },
          { value: "goodyear", label: "Goodyear" },
        ],
      },
    ],
  },
  brand: {
    gridColumns: {
      xs: "1fr",
      sm: "repeat(2, 1fr)",
      lg: "repeat(2, 1fr)",
    },
    fields: [
      {
        key: "name",
        label: "NAME",
        options: [
          { value: "michelin", label: "Michelin" },
          { value: "bridgestone", label: "Bridgestone" },
          { value: "goodyear", label: "Goodyear" },
        ],
      },
      {
        key: "category",
        label: "CATEGORY",
        options: [
          { value: "wheel", label: "Wheel" },
          { value: "tyre", label: "Tyre" },
          { value: "accessory", label: "Accessory" },
        ],
      },
    ],
  },
  accessories: {
    gridColumns: {
      xs: "1fr",
      sm: "1fr",
      lg: "1fr",
    },
    fields: [], // accessories 没有筛选器
  },
};
