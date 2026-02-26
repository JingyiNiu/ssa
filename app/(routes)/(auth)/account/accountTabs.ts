/**
 * Account 侧边栏菜单与路由配置
 * 结构：Dashboard | Orders(+Order) | Downloads(Invoice,Statement) | Address(Billing,Shipping) | Account details
 */
export const DEFAULT_ACCOUNT_PATH = "/account/dashboard";

export interface AccountNavChild {
  label: string;
  path: string;
}

export interface AccountNavItem {
  label: string;
  path: string;
  children?: AccountNavChild[];
}

export const ACCOUNT_NAV: AccountNavItem[] = [
  { label: "Dashboard", path: "/account/dashboard" },
  {
    label: "Orders",
    path: "/account/orders",
  },
  {
    label: "Downloads",
    path: "/account/downloads",
    children: [
      { label: "Invoice", path: "/account/downloads/invoice" },
      { label: "Statement", path: "/account/downloads/statement" },
    ],
  },
  {
    label: "Address",
    path: "/account/address",
    children: [
      { label: "Billing address", path: "/account/address/billing" },
      { label: "Shipping address", path: "/account/address/shipping" },
    ],
  },
  { label: "Account details", path: "/account/account-details" },
];

/** pathname 是否匹配 path（精确或子路径） */
export function isPathActive(pathname: string, path: string): boolean {
  if (pathname === path) return true;
  return pathname.startsWith(path + "/");
}
