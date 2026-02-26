"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

export interface DataTableColumn<T = Record<string, unknown>> {
  id: string;
  label: string;
  align?: "left" | "right" | "center";
  render?: (row: T) => React.ReactNode;
}

export interface DataTableProps<T = Record<string, unknown>> {
  columns: DataTableColumn<T>[];
  data: T[];
  getRowId?: (row: T) => string;
  size?: "small" | "medium";
}

export function DataTable<T extends Record<string, unknown>>({
  columns,
  data,
  getRowId,
  size = "small",
}: DataTableProps<T>) {
  const getKey = (row: T, index: number) => {
    if (getRowId) return getRowId(row);
    if ("id" in row && typeof row.id === "string") return row.id;
    return String(index);
  };

  return (
    <TableContainer component={Paper} variant="outlined" sx={{ borderRadius: 1 }}>
      <Table size={size}>
        <TableHead>
          <TableRow sx={{ bgcolor: "grey.100" }}>
            {columns.map((col) => (
              <TableCell
                key={col.id}
                sx={{ fontWeight: 600 }}
                align={col.align}
              >
                {col.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={getKey(row, index)} hover>
              {columns.map((col) => (
                <TableCell key={col.id} align={col.align}>
                  {col.render ? col.render(row) : (row[col.id] as React.ReactNode)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
