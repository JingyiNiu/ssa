"use client";

import { useState } from "react";
import { Typography, Paper, TextField, Stack, Box } from "@mui/material";
import { FormSubmitButton } from "@/app/components/common/FormSubmitButton";

export default function SecurityPage() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Login & security
      </Typography>
      <Paper variant="outlined" sx={{ p: 3, borderRadius: 1 }}>
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          Change password
        </Typography>
        <Stack spacing={2.5} component="form" onSubmit={(e) => e.preventDefault()} sx={{ maxWidth: 400, mt: 2 }}>
          <TextField
            label="Current password"
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            fullWidth
            size="small"
          />
          <TextField
            label="New password"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            fullWidth
            size="small"
          />
          <TextField
            label="Confirm new password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            fullWidth
            size="small"
          />
          <FormSubmitButton>Update password</FormSubmitButton>
        </Stack>
        <Box sx={{ mt: 4 }}>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            Two-factor authentication
          </Typography>
          <Typography variant="body2" color="text.secondary">
            2FA options will appear here.
          </Typography>
        </Box>
      </Paper>
    </>
  );
}
