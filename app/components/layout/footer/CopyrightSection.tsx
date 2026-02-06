import { Box, Typography, Link } from "@mui/material";

const CopyrightSection = () => {
  return (
    <Box sx={{ py: 3 }}>
      <Box
        className="container mx-auto"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: "rgba(255,255,255,0.6)",
            fontSize: "0.875rem",
          }}
        >
          © {new Date().getFullYear()} SSA Wheels & Tyres.
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "rgba(255,255,255,0.6)",
            fontSize: "0.8rem",
          }}
        >
          All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default CopyrightSection;
