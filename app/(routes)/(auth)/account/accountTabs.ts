/**
 * Account 侧边栏菜单与路由配置
 * 结构：Dashboard | Orders(+Order) | Downloads(Invoice,Statement) | Address(Billing,Shipping) | Account details
 */
export const DEFAULT_ACCOUNT_PATH = "/account/dashboard";

/** 子项用于侧栏导航 + 父页入口卡片，icon 为 MUI 图标名，仅部分页面使用 */
export interface AccountNavChild {
  label: string;
  path: string;
  description?: string;
  icon?: string;
}

export interface AccountNavItem {
  label: string;
  path: string;
  description?: string;
  icon?: string;
  children?: AccountNavChild[];
}

export const ACCOUNT_NAV: AccountNavItem[] = [
  { label: "Dashboard", path: "/account/dashboard" },
  {
    label: "Orders",
    path: "/account/orders",
    description: "View your order history",
    icon: "ShoppingBagOutlined",
  },
  {
    label: "Downloads",
    path: "/account/downloads",
    description: "Invoices and statements",
    icon: "DownloadOutlined",
    children: [
      { label: "Invoice", path: "/account/downloads/invoice", description: "View and download your invoices", icon: "Receipt" },
      { label: "Statement", path: "/account/downloads/statement", description: "View and download your statements", icon: "Summarize" },
    ],
  },
  {
    label: "Address",
    path: "/account/address",
    description: "Billing and shipping addresses",
    icon: "LocationOnOutlined",
    children: [
      { label: "Billing address", path: "/account/address/billing", description: "Manage your billing address", icon: "CreditCard" },
      { label: "Shipping address", path: "/account/address/shipping", description: "Manage your shipping address", icon: "LocalShipping" },
    ],
  },
  {
    label: "Account details",
    path: "/account/account-details",
    description: "Profile, security and preferences",
    icon: "PersonOutline",
    children: [
      { label: "Basic info", path: "/account/account-details/profile", description: "Name, email and basic profile", icon: "PersonOutline" },
      { label: "Login & security", path: "/account/account-details/security", description: "Password, 2FA and sessions", icon: "LockOutlined" },
      { label: "Preferences", path: "/account/account-details/preferences", description: "Language, timezone and notifications", icon: "SettingsOutlined" },
      { label: "Account status", path: "/account/account-details/account-status", description: "Account status and delete account", icon: "InfoOutlined" },
    ],
  },
];

/** pathname 是否匹配 path（精确或子路径） */
export function isPathActive(pathname: string, path: string): boolean {
  if (pathname === path) return true;
  return pathname.startsWith(path + "/");
}

/** 根据父级 path 取入口卡片用子项（唯一数据源：来自 ACCOUNT_NAV） */
export function getAccountCardItems(parentPath: string): AccountNavChild[] {
  const item = ACCOUNT_NAV.find((i) => i.path === parentPath);
  return item?.children ?? [];
}

/** Dashboard 入口卡片：排除 Dashboard 自身，返回其余四项（Orders, Downloads, Address, Account details） */
export function getDashboardCardItems(): AccountNavChild[] {
  return ACCOUNT_NAV.filter((i) => i.path !== "/account/dashboard").map((i) => ({
    label: i.label,
    path: i.path,
    description: i.description,
    icon: i.icon,
  }));
}
