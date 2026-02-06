// 检查路径是否为活动状态
export const isActive = (pathname: string, href?: string) => {
  if (!href) return false;
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
};
