"use client";

import { Typography, Link } from "@mui/material";
import NextLink from "next/link";
import { DataTable, type DataTableColumn } from "@/app/components/common/DataTable";

type OrderRow = {
  id: string;
  date: string;
  status: string;
  total: string;
};

const COLUMNS: DataTableColumn<OrderRow>[] = [
  { id: "id", label: "Order ID"},
  { id: "date", label: "Date" },
  { id: "status", label: "Status" },
  { id: "total", label: "Total", align: "right" },
  { id: "action", label: "Action", align: "right", render: (row) => (
    <Link component={NextLink} href={`/account/orders/${row.id}`} underline="hover">
      View
    </Link>
  ) },
];

const MOCK_ORDERS: OrderRow[] = [
  { id: "ORD-2024-001", date: "2024-01-15", status: "Completed", total: "$299.00" },
  { id: "ORD-2024-002", date: "2024-02-03", status: "Shipped", total: "$156.00" },
  { id: "ORD-2024-003", date: "2024-02-10", status: "Processing", total: "$89.50" },
];

export default function OrdersPage() {
  return (
    <>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Orders
      </Typography>
      <DataTable<OrderRow> columns={COLUMNS} data={MOCK_ORDERS} getRowId={(row) => row.id} />
    </>
  );
}
