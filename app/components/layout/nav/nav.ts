export type SubItem = {
  label: string;
  href: string;
};

export type MenuItemType = {
  label: string;
  hasDropdown: boolean;
  href: string;
  subItems?: SubItem[];
};

export const menuItems: MenuItemType[] = [
  {
    label: "Home",
    hasDropdown: false,
    href: "/",
  },
  {
    label: "Wheels",
    hasDropdown: false,
    href: "/wheels",
    subItems: [
      { label: "Steel Wheels", href: "/wheel?type=steel" },
      { label: "Alloy Wheels", href: "/wheel?type=alloy" },
    ],
  },
  {
    label: "Tyres",
    hasDropdown: false,
    href: "/tyres",
    subItems: [
      { label: "BLACKLION", href: "/tyres?brand=blacklion" },
      { label: "JINYU", href: "/tyres?brand=jinyu" },
      { label: "AOTELI", href: "/tyres?brand=aoteli" },
      { label: "FARROAD", href: "/tyres?brand=farroad" },
      { label: "GRENLANDER", href: "/tyres?brand=grenlander" },
      { label: "SAILUN", href: "/tyres?brand=sailun" },
      { label: "ROVELO", href: "/tyres?brand=rovelo" },
      { label: "ROADX", href: "/tyres?brand=roadx" },
      { label: "FORTUNE", href: "/tyres?brand=fortune" },
      { label: "BLACKHAWK", href: "/tyres?brand=blackhawk" },
      { label: "ROADCLAW", href: "/tyres?brand=roadclaw" },
      { label: "Winrun", href: "/tyres?brand=winrun" },
      { label: "Genco", href: "/tyres?brand=genco" },
    ],
  },
  {
    label: "Accessories",
    hasDropdown: false,
    href: "/accessories",
  },
  {
    label: "Gallery",
    hasDropdown: false,
    href: "/gallery",
  },
  {
    label: "About",
    hasDropdown: false,
    href: "/about",
  },
];
