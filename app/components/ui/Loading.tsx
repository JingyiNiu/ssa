import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(255,255,255,0.8)",
        zIndex: 1000,
      }}
      data-testid="loading"
    >
      <CircularProgress />
      <Typography variant="body1">Loading...</Typography>
    </Box>
  );
};

export default Loading;
