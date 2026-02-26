import {
  Typography,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Stack,
  Divider,
} from "@mui/material";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ id: string }>;
};

const MOCK_ORDER = {
  id: "ORD-2024-001",
  date: "2024-01-15",
  status: "Completed",
  shippingAddress: {
    name: "John Doe",
    line1: "123 Main Street",
    line2: "Apt 4B",
    city: "New York",
    state: "NY",
    zip: "10001",
    country: "United States",
  },
  items: [
    { product: "Alloy Wheel 18\"", sku: "AW-18-BLK", qty: 2, price: "$120.00", total: "$240.00" },
    { product: "Lug Nut Set", sku: "LN-20", qty: 1, price: "$59.00", total: "$59.00" },
  ],
  subtotal: "$299.00",
  shipping: "$15.00",
  tax: "$28.14",
  total: "$342.14",
};

export default async function OrderDetailPage({ params }: PageProps) {
  const { id } = await params;
  if (!id) notFound();
  const order = { ...MOCK_ORDER, id };

  return (
    <>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Order #{order.id}
      </Typography>

      <Stack spacing={3}>
        <Paper variant="outlined" sx={{ p: 2, borderRadius: 1 }}>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            Order info
          </Typography>
          <Box sx={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
            <Typography><strong>Date:</strong> {order.date}</Typography>
            <Typography><strong>Status:</strong> {order.status}</Typography>
          </Box>
        </Paper>

        <Paper variant="outlined" sx={{ p: 2, borderRadius: 1 }}>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            Shipping address
          </Typography>
          <Typography component="address" sx={{ fontStyle: "normal" }}>
            {order.shippingAddress.name}<br />
            {order.shippingAddress.line1}<br />
            {order.shippingAddress.line2 && <>{order.shippingAddress.line2}<br /></>}
            {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zip}<br />
            {order.shippingAddress.country}
          </Typography>
        </Paper>

        <TableContainer component={Paper} variant="outlined" sx={{ borderRadius: 1 }}>
          <Table size="small">
            <TableHead>
              <TableRow sx={{ bgcolor: "grey.100" }}>
                <TableCell sx={{ fontWeight: 600 }}>Product</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>SKU</TableCell>
                <TableCell sx={{ fontWeight: 600 }} align="center">Qty</TableCell>
                <TableCell sx={{ fontWeight: 600 }} align="right">Price</TableCell>
                <TableCell sx={{ fontWeight: 600 }} align="right">Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {order.items.map((row, i) => (
                <TableRow key={i}>
                  <TableCell>{row.product}</TableCell>
                  <TableCell>{row.sku}</TableCell>
                  <TableCell align="center">{row.qty}</TableCell>
                  <TableCell align="right">{row.price}</TableCell>
                  <TableCell align="right">{row.total}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Paper variant="outlined" sx={{ p: 2, borderRadius: 1, maxWidth: 280, ml: "auto" }}>
          <Stack spacing={0.5} divider={<Divider />}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography color="text.secondary">Subtotal</Typography>
              <Typography>{order.subtotal}</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography color="text.secondary">Shipping</Typography>
              <Typography>{order.shipping}</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography color="text.secondary">Tax</Typography>
              <Typography>{order.tax}</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", pt: 0.5 }}>
              <Typography fontWeight={600}>Total</Typography>
              <Typography fontWeight={600}>{order.total}</Typography>
            </Box>
          </Stack>
        </Paper>
      </Stack>
    </>
  );
}
