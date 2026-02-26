"use client";

import { useState } from "react";
import {
  Typography,
  Paper,
  TextField,
  Button,
  Stack,
  Box,
} from "@mui/material";

export interface AddressFormValues {
  name: string;
  line1: string;
  line2: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

const defaultValues: AddressFormValues = {
  name: "",
  line1: "",
  line2: "",
  city: "",
  state: "",
  zip: "",
  country: "",
};

interface AddressFormProps {
  title: string;
  initialValues?: Partial<AddressFormValues>;
}

export function AddressForm({ title, initialValues }: AddressFormProps) {
  const [values, setValues] = useState<AddressFormValues>({
    ...defaultValues,
    ...initialValues,
  });

  const handleChange = (field: keyof AddressFormValues) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: submit to API
  };

  return (
    <>
      <Typography variant="h6" sx={{ mb: 2 }}>
        {title}
      </Typography>
      <Paper variant="outlined" sx={{ p: 3, borderRadius: 1 }}>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2.5}>
            <TextField
              label="Full name"
              value={values.name}
              onChange={handleChange("name")}
              fullWidth
              size="small"
              required
            />
            <TextField
              label="Address line 1"
              value={values.line1}
              onChange={handleChange("line1")}
              fullWidth
              size="small"
              required
            />
            <TextField
              label="Address line 2 (optional)"
              value={values.line2}
              onChange={handleChange("line2")}
              fullWidth
              size="small"
            />
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <TextField
                label="City"
                value={values.city}
                onChange={handleChange("city")}
                size="small"
                sx={{ flex: 1, minWidth: 120 }}
                required
              />
              <TextField
                label="State / Province"
                value={values.state}
                onChange={handleChange("state")}
                size="small"
                sx={{ flex: 1, minWidth: 120 }}
              />
              <TextField
                label="ZIP / Postal code"
                value={values.zip}
                onChange={handleChange("zip")}
                size="small"
                sx={{ width: 140 }}
                required
              />
            </Box>
            <TextField
              label="Country"
              value={values.country}
              onChange={handleChange("country")}
              fullWidth
              size="small"
              required
            />
            <Box sx={{ pt: 1 }}>
              <Button type="submit" variant="contained">
                Save address
              </Button>
            </Box>
          </Stack>
        </form>
      </Paper>
    </>
  );
}
