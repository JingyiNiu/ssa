"use client";

import { Typography, Link } from "@mui/material";
import { DataTable, type DataTableColumn } from "@/app/components/common/DataTable";

type InvoiceRow = {
  id: string;
  invoiceNo: string;
  date: string;
  amount: string;
};

const COLUMNS: DataTableColumn<InvoiceRow>[] = [
  { id: "invoiceNo", label: "Invoice No" },
  { id: "date", label: "Date" },
  { id: "amount", label: "Amount", align: "right" },
  { id: "action", label: "Action", align: "right", render: () => (
    <Link href="#" underline="hover">Download</Link>
  ) },
];

const MOCK_INVOICES: InvoiceRow[] = [
  { id: "1", invoiceNo: "INV-2024-001", date: "2024-01-15", amount: "$299.00" },
  { id: "2", invoiceNo: "INV-2024-002", date: "2024-02-03", amount: "$156.00" },
];

export default function InvoicePage() {
  return (
    <>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Invoice
      </Typography>
      <DataTable<InvoiceRow> columns={COLUMNS} data={MOCK_INVOICES} getRowId={(row) => row.id} />
    </>
  );
}
