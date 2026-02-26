"use client";

import React from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ReceiptIcon from "@mui/icons-material/Receipt";
import SummarizeIcon from "@mui/icons-material/Summarize";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

type IconComponent = React.ComponentType<{ sx?: React.CSSProperties | object }>;

const ICON_COMPONENTS: Record<string, IconComponent> = {
  PersonOutline: PersonOutlineIcon,
  LockOutlined: LockOutlinedIcon,
  SettingsOutlined: SettingsOutlinedIcon,
  InfoOutlined: InfoOutlinedIcon,
  Receipt: ReceiptIcon,
  Summarize: SummarizeIcon,
  CreditCard: CreditCardIcon,
  LocalShipping: LocalShippingIcon,
  ShoppingBagOutlined: ShoppingBagOutlinedIcon,
  DownloadOutlined: DownloadOutlinedIcon,
  LocationOnOutlined: LocationOnOutlinedIcon,
};

/** 根据 accountTabs 中的 icon 名渲染图标，size 为数字时表示 fontSize (px) */
export function getAccountNavIcon(name: string | undefined, size?: number): React.ReactNode {
  if (!name || !ICON_COMPONENTS[name]) return null;
  const Icon = ICON_COMPONENTS[name];
  return <Icon sx={size != null ? { fontSize: size } : undefined} />;
}
