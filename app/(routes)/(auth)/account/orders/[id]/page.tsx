import { Typography } from "@mui/material";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function OrderDetailPage({ params }: PageProps) {
  const { id } = await params;
  if (!id) notFound();
  return (
    <>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Order #{id}
      </Typography>
      <Typography color="text.secondary">
        Order details will appear here.
      </Typography>
    </>
  );
}
