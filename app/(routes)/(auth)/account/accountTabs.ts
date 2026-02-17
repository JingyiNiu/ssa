export const DEFAULT_ACCOUNT_TAB = "dashboard";

export const ACCOUNT_TAB_IDS = [
  "dashboard",
  "orders",
  "downloads",
  "addresses",
  "account-details",
] as const;

export type AccountTabId = (typeof ACCOUNT_TAB_IDS)[number];

export function isAccountTabId(value: string | null): value is AccountTabId {
  return value !== null && ACCOUNT_TAB_IDS.includes(value as AccountTabId);
}
