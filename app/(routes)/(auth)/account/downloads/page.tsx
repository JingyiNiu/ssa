import { Typography } from "@mui/material";

export default function DownloadsPage() {
  return (
    <>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Downloads
      </Typography>
      <Typography color="text.secondary">
        Your downloadable files (invoices, statements) will appear here.
      </Typography>
    </>
  );
}
