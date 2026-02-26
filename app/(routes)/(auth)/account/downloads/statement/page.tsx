"use client";

import { Typography, Link } from "@mui/material";
import { DataTable, type DataTableColumn } from "@/app/components/common/DataTable";

type StatementRow = {
  id: string;
  period: string;
  date: string;
  amount: string;
};

const COLUMNS: DataTableColumn<StatementRow>[] = [
  { id: "period", label: "Period" },
  { id: "date", label: "Date" },
  { id: "amount", label: "Amount", align: "right" },
  { id: "action", label: "Action", align: "right", render: () => (
    <Link href="#" underline="hover">Download</Link>
  ) },
];

const MOCK_STATEMENTS: StatementRow[] = [
  { id: "1", period: "Jan 2024", date: "2024-02-01", amount: "$1,240.00" },
  { id: "2", period: "Dec 2023", date: "2024-01-01", amount: "$890.50" },
];

export default function StatementPage() {
  return (
    <>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Statement
      </Typography>
      <DataTable<StatementRow> columns={COLUMNS} data={MOCK_STATEMENTS} getRowId={(row) => row.id} />
    </>
  );
}
