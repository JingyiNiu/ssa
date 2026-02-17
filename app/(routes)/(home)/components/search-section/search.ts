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
      sm: "repeat(2, 1fr)",
      lg: "repeat(2, 1fr)",
    },
    fields: [
      {
        key: "category",
        label: "CATEGORY",
        options: [
          { value: "floor-mats", label: "Floor Mats" },
          { value: "roof-rack", label: "Roof Rack" },
          { value: "brake-pads", label: "Brake Pads" },
          { value: "lighting", label: "Lighting" },
        ],
      },
      {
        key: "priceRange",
        label: "PRICE RANGE",
        options: [
          { value: "0-100", label: "$0 – $100" },
          { value: "100-300", label: "$100 – $300" },
          { value: "300-500", label: "$300 – $500" },
          { value: ">500", label: "over $500" },
        ],
      },
    ],
  },
};
