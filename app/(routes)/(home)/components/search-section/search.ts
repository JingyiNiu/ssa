import { SearchTabType } from "./SearchTabs";
import { brandItems } from "@/app/(routes)/(client)/(shop)/brands/brand";

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
          { value: "13", label: '13"' },
          { value: "14", label: '14"' },
          { value: "15", label: '15"' },
          { value: "16", label: '16"' },
          { value: "17", label: '17"' },
          { value: "18", label: '18"' },
          { value: "19", label: '19"' },
          { value: "20", label: '20"' },
          { value: "21", label: '21"' },
          { value: "22", label: '22"' },
        ],
      },
      {
        key: "width",
        label: "WIDTH",
        options: [
          { value: "5", label: '5"' },
          { value: "5.5", label: '5.5"' },
          { value: "6", label: '6"' },
          { value: "6.5", label: '6.5"' },
          { value: "7", label: '7"' },
          { value: "7.5", label: '7.5"' },
          { value: "8", label: '8"' },
          { value: "8.5", label: '8.5"' },
          { value: "9", label: '9"' },
          { value: "9.5", label: '9.5"' },
          { value: "10", label: '10"' },
          { value: "10.5", label: '10.5"' },
          { value: "12", label: '12"' },
        ],
      },
      {
        key: "offset",
        label: "OFFSET (ET)",
        options: [
          { value: "-10", label: "ET-10" },
          { value: "-5", label: "ET-5" },
          { value: "0", label: "ET0" },
          { value: "5", label: "ET5" },
          { value: "10", label: "ET10" },
          { value: "15", label: "ET15" },
          { value: "20", label: "ET20" },
          { value: "25", label: "ET25" },
          { value: "30", label: "ET30" },
          { value: "35", label: "ET35" },
          { value: "38", label: "ET38" },
          { value: "40", label: "ET40" },
          { value: "42", label: "ET42" },
          { value: "45", label: "ET45" },
          { value: "48", label: "ET48" },
          { value: "50", label: "ET50" },
          { value: "52", label: "ET52" },
          { value: "55", label: "ET55" },
        ],
      },
      {
        key: "pcd",
        label: "PCD",
        options: [
          { value: "4/98", label: "4/98" },
          { value: "4/100", label: "4/100" },
          { value: "4/108", label: "4/108" },
          { value: "4/114.3", label: "4/114.3" },

          { value: "5/100", label: "5/100" },
          { value: "5/108", label: "5/108" },
          { value: "5/110", label: "5/110" },
          { value: "5/112", label: "5/112" },
          { value: "5/114.3", label: "5/114.3" },
          { value: "5/115", label: "5/115" },
          { value: "5/120", label: "5/120" },
          { value: "5/120.65", label: "5/120.65" },
          { value: "5/127", label: "5/127" },
          { value: "5/130", label: "5/130" },
          { value: "5/139.7", label: "5/139.7" },

          { value: "6/114.3", label: "6/114.3" },
          { value: "6/130", label: "6/130" },
          { value: "6/135", label: "6/135" },
          { value: "6/139.7", label: "6/139.7" },
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
          { value: "175", label: "175" },
          { value: "185", label: "185" },
          { value: "195", label: "195" },
          { value: "205", label: "205" },
          { value: "215", label: "215" },
          { value: "225", label: "225" },
          { value: "235", label: "235" },
          { value: "245", label: "245" },
          { value: "255", label: "255" },
          { value: "265", label: "265" },
          { value: "275", label: "275" },
          { value: "285", label: "285" },
        ],
      },
      {
        key: "diameter",
        label: "DIAMETER",
        options: [
          { value: "14", label: '14"' },
          { value: "15", label: '15"' },
          { value: "16", label: '16"' },
          { value: "17", label: '17"' },
          { value: "18", label: '18"' },
          { value: "19", label: '19"' },
          { value: "20", label: '20"' },
          { value: "21", label: '21"' },
          { value: "22", label: '22"' },
        ],
      },
      {
        key: "profile",
        label: "PROFILE",
        options: [
          { value: "30", label: "30" },
          { value: "35", label: "35" },
          { value: "40", label: "40" },
          { value: "45", label: "45" },
          { value: "50", label: "50" },
          { value: "55", label: "55" },
          { value: "60", label: "60" },
          { value: "65", label: "65" },
          { value: "70", label: "70" },
          { value: "75", label: "75" },
        ],
      },
      {
        key: "direction",
        label: "DIRECTION",
        options: [
          { value: "directional", label: "Directional" },
          { value: "asymmetric", label: "Asymmetric" },
          { value: "symmetric", label: "Symmetric" },
          {
            value: "directional_asymmetric",
            label: "Directional + Asymmetric",
          },
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
        options: brandItems.map((b) => ({ value: b.value, label: b.label })),
      },
      {
        key: "category",
        label: "CATEGORY",
        options: [
          { value: "wheels", label: "Wheels" },
          { value: "tyres", label: "Tyres" },
          { value: "accessories", label: "Accessories" },
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
