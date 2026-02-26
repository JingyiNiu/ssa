"use client";

import { useState } from "react";
import {
  Typography,
  Paper,
  TextField,
  Button,
  Stack,
} from "@mui/material";

const MOCK_PROFILE = {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  phone: "+1 234 567 8900",
};

export default function ProfilePage() {
  const [values, setValues] = useState(MOCK_PROFILE);

  const handleChange = (field: keyof typeof values) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues((prev) => ({ ...prev, [field]: e.target.value }));
    };

  return (
    <>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Basic info
      </Typography>
      <Paper variant="outlined" sx={{ p: 3, borderRadius: 1 }}>
        <Stack spacing={2.5} component="form" onSubmit={(e) => e.preventDefault()}>
          <TextField
            label="First name"
            value={values.firstName}
            onChange={handleChange("firstName")}
            fullWidth
            size="small"
          />
          <TextField
            label="Last name"
            value={values.lastName}
            onChange={handleChange("lastName")}
            fullWidth
            size="small"
          />
          <TextField
            label="Email"
            type="email"
            value={values.email}
            onChange={handleChange("email")}
            fullWidth
            size="small"
          />
          <TextField
            label="Phone"
            value={values.phone}
            onChange={handleChange("phone")}
            fullWidth
            size="small"
          />
          <Button type="submit" variant="contained" sx={{ alignSelf: "flex-start" }}>
            Save
          </Button>
        </Stack>
      </Paper>
    </>
  );
}
