"use client";

import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { getProductPrice } from "@/app/lib/api";
import type { WCProduct } from "@/app/components/layout/product-list/wc-product";
import type { PublicProduct } from "@/app/components/layout/product-list/public-product";

function getSizeDisplay(product: WCProduct | PublicProduct): string {
  const wc = product as WCProduct;
  if (wc.dimensions) {
    const d = wc.dimensions;
    const parts = [d.length, d.width, d.height].filter(Boolean);
    if (parts.length > 0) return parts.join(" × ");
  }
  if (Array.isArray(wc.attributes) && wc.attributes.length > 0) {
    const first = wc.attributes[0];
    const option = first?.options?.[0] ?? first?.option;
    return option ?? first?.name ?? "—";
  }
  return "—";
}

interface StockStatusProps {
  product: WCProduct | PublicProduct;
  totalStock: number;
  sold: number;
  available: number;
  soldPercentage: number;
  maxStock?: number;
  quantity: number;
  onQuantityChange: (type: "increase" | "decrease") => void;
}

export function StockStatus({
  product,
  totalStock,
  sold,
  available,
  soldPercentage,
  maxStock = 0,
  quantity,
  onQuantityChange,
}: StockStatusProps) {
  const rows = [
    {
      id: "current",
      sku: product.sku || "—",
      size: getSizeDisplay(product),
      price: `$${getProductPrice(product)}`,
      stock: available,
      isReal: true,
    },
    {
      id: "fake",
      sku: "DEMO-002",
      size: "18 × 8.5",
      price: "$199.00",
      stock: 5,
      isReal: false,
    },
  ];

  return (
    <Box
      sx={{
        bgcolor: "#f5f5f5",
        borderRadius: 2,
        mb: 3,
        overflow: "hidden",
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 600 }}>SKU</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>Size</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>Price</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>Stock</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.sku}</TableCell>
              <TableCell>{row.size}</TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell>{row.stock}</TableCell>
              <TableCell>
                {row.isReal ? (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      border: "1px solid #e0e0e0",
                      borderRadius: 1,
                      width: "fit-content",
                    }}
                  >
                    <IconButton
                      size="small"
                      onClick={() => onQuantityChange("decrease")}
                      disabled={quantity <= 1}
                    >
                      <RemoveIcon />
                    </IconButton>
                    <Typography sx={{ px: 2, minWidth: 40, textAlign: "center" }}>
                      {quantity}
                    </Typography>
                    <IconButton
                      size="small"
                      onClick={() => onQuantityChange("increase")}
                      disabled={quantity >= Number(maxStock)}
                    >
                      <AddIcon />
                    </IconButton>
                  </Box>
                ) : (
                  <Typography variant="body2" color="text.secondary">
                    0
                  </Typography>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}
