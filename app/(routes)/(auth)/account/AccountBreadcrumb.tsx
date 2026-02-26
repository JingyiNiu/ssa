"use client";

import { Breadcrumbs, Link, Typography } from "@mui/material";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { ACCOUNT_NAV, DEFAULT_ACCOUNT_PATH } from "./accountTabs";

interface BreadcrumbItem {
  label: string;
  path: string;
}

function getBreadcrumbItems(pathname: string): BreadcrumbItem[] {
  if (!pathname.startsWith("/account")) return [];
  const items: BreadcrumbItem[] = [{ label: "Account", path: DEFAULT_ACCOUNT_PATH }];
  if (pathname === "/account" || pathname === "/account/") return items;

  const segments = pathname.replace(/^\/account\/?/, "").split("/").filter(Boolean);
  let currentPath = "/account";

  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i];
    currentPath = `${currentPath}/${segment}`;

    const parent = ACCOUNT_NAV.find((item) => item.path === currentPath);
    if (parent) {
      items.push({ label: parent.label, path: currentPath });
      continue;
    }

    let found = false;
    for (const item of ACCOUNT_NAV) {
      if (!item.children) continue;
      const child = item.children.find((c) => c.path === currentPath);
      if (child) {
        items.push({ label: child.label, path: currentPath });
        found = true;
        break;
      }
    }
    if (!found) {
      items.push({ label: segment, path: currentPath });
    }
  }

  return items;
}

export default function AccountBreadcrumb() {
  const pathname = usePathname();
  const items = getBreadcrumbItems(pathname);

  if (items.length <= 1) return null;

  return (
    <Breadcrumbs sx={{ mb: 2 }} aria-label="breadcrumb">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return isLast ? (
          <Typography key={item.path} color="text.primary" variant="body2">
            {item.label}
          </Typography>
        ) : (
          <Link
            key={item.path}
            component={NextLink}
            href={item.path}
            underline="hover"
            color="text.secondary"
            variant="body2"
          >
            {item.label}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}
