"use client";

import { Placeholder } from "@/app/components/layout/placeholder/Placeholder";
import { ProtectedRoute } from "@/app/lib/auth";
import { Box } from "@mui/material";

const AccountPage = () => {
  return (
    <ProtectedRoute fallback={<Box sx={{ textAlign: 'center', py: 4 }}>Loading...</Box>}>
      <Box>
        <Placeholder title="Account" />
      </Box>
    </ProtectedRoute>
  );
};

export default AccountPage;
