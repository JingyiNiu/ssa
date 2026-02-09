"use client";

import { Box, Typography, TextField, Select, MenuItem } from "@mui/material";
import { useState } from "react";

const CheckoutDetailsForm = () => {
  const [country, setCountry] = useState("New Zealand");

  return (
    <Box
      sx={{ flex: 1, bgcolor: "grey.50", p: 1 }}
      data-testid="checkout-details-form"
    >
      <Box sx={{ p: 3, bgcolor: "white" }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            mb: 3,
            color: "#d32f2f",
            textTransform: "uppercase",
          }}
        >
          Checkout Details
        </Typography>

        {/* First name & Last name */}
        <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="body2" sx={{ mb: 0.5 }}>
              First name{" "}
              <Box component="span" sx={{ color: "#d32f2f" }}>
                *
              </Box>
            </Typography>
            <TextField fullWidth required size="small" />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography variant="body2" sx={{ mb: 0.5 }}>
              Last name{" "}
              <Box component="span" sx={{ color: "#d32f2f" }}>
                *
              </Box>
            </Typography>
            <TextField fullWidth required size="small" />
          </Box>
        </Box>

        {/* Company name */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="body2" sx={{ mb: 0.5 }}>
            Company name (optional)
          </Typography>
          <TextField fullWidth size="small" />
        </Box>

        {/* Country / Region */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="body2" sx={{ mb: 0.5 }}>
            Country / Region{" "}
            <Box component="span" sx={{ color: "#d32f2f" }}>
              *
            </Box>
          </Typography>
          <Select
            fullWidth
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            size="small"
          >
            <MenuItem value="New Zealand">New Zealand</MenuItem>
            <MenuItem value="Australia">Australia</MenuItem>
            <MenuItem value="United States">United States</MenuItem>
            <MenuItem value="Canada">Canada</MenuItem>
            <MenuItem value="United Kingdom">United Kingdom</MenuItem>
          </Select>
        </Box>

        {/* Street address */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="body2" sx={{ mb: 0.5 }}>
            Street address{" "}
            <Box component="span" sx={{ color: "#d32f2f" }}>
              *
            </Box>
          </Typography>
          <TextField
            fullWidth
            required
            size="small"
            placeholder="House number and street name"
            sx={{ mb: 1 }}
          />
          <TextField
            fullWidth
            size="small"
            placeholder="Apartment, suite, unit, etc. (optional)"
          />
        </Box>

        {/* Town / City */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="body2" sx={{ mb: 0.5 }}>
            Town / City{" "}
            <Box component="span" sx={{ color: "#d32f2f" }}>
              *
            </Box>
          </Typography>
          <TextField fullWidth required size="small" />
        </Box>

        {/* Region */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="body2" sx={{ mb: 0.5 }}>
            Region (optional)
          </Typography>
          <Select fullWidth size="small" displayEmpty defaultValue="">
            <MenuItem value="">Select an option...</MenuItem>
            <MenuItem value="Auckland">Auckland</MenuItem>
            <MenuItem value="Wellington">Wellington</MenuItem>
            <MenuItem value="Canterbury">Canterbury</MenuItem>
          </Select>
        </Box>

        {/* Postcode */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="body2" sx={{ mb: 0.5 }}>
            Postcode{" "}
            <Box component="span" sx={{ color: "#d32f2f" }}>
              *
            </Box>
          </Typography>
          <TextField fullWidth required size="small" />
        </Box>

        {/* Phone & Email */}
        <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="body2" sx={{ mb: 0.5 }}>
              Phone{" "}
              <Box component="span" sx={{ color: "#d32f2f" }}>
                *
              </Box>
            </Typography>
            <TextField fullWidth required size="small" />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography variant="body2" sx={{ mb: 0.5 }}>
              Email address{" "}
              <Box component="span" sx={{ color: "#d32f2f" }}>
                *
              </Box>
            </Typography>
            <TextField fullWidth required type="email" size="small" />
          </Box>
        </Box>

        {/* Order notes */}
        <Box>
          <Typography variant="body2" sx={{ mb: 0.5 }}>
            Order notes (optional)
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={4}
            placeholder="Notes about your order, e.g. special notes for delivery."
            size="small"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default CheckoutDetailsForm;
