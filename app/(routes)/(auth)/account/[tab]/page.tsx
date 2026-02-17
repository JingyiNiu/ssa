import { redirect } from "next/navigation";
import { TabContent } from "../TabContent";
import { isAccountTabId, DEFAULT_ACCOUNT_TAB } from "../accountTabs";

type PageProps = {
  params: Promise<{ tab: string }>;
};

export default async function AccountTabPage({ params }: PageProps) {
  const { tab } = await params;
  if (!isAccountTabId(tab)) {
    redirect("/account/dashboard");
  }
  return <TabContent tab={tab} />;
}
