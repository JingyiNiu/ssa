import { Typography } from "@mui/material";
import React from "react";

interface SectionTitleProps {
  title: string;
  color?: string;
}

const SectionTitle = ({ title, color = "#333" }: SectionTitleProps) => {
  return (
    <Typography
      variant="h2"
      sx={{
        my: 4,
        fontWeight: 600,
        fontSize: { xs: "1.5rem", md: "2rem" },
        color: color,
      }}
      data-testid="section-title"
    >
      {title}
    </Typography>
  );
};

export default SectionTitle;
