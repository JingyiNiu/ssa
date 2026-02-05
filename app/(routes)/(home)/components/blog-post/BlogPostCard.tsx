"use client";

import {
  Box,
  Typography,
  Card,
  Chip,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React from "react";
import { BlogPost } from "./blogpost";

interface BlogPostCardProps {
  post: BlogPost;
  featured?: boolean;
}

export const BlogPostCard = ({ post, featured = false }: BlogPostCardProps) => {
  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));

  // lg以下时，featured和普通post显示一样
  const isFeaturedStyle = featured && isLgUp;

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "row",
        cursor: "pointer",
        borderRadius: 0,
        boxShadow: "none",
        transition: "all 0.3s ease",
        height: isFeaturedStyle ? "100%" : "auto",
        "&:hover": {
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          transform: "translateY(-2px)",
        },
      }}
      data-testid="blog-post-card"
    >
      {/* Image Section */}
      <Box
        sx={{
          width: isFeaturedStyle ? "50%" : "40%",
          minHeight: isFeaturedStyle ? 300 : 120,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={post.image}
          alt={post.title}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>

      {/* Content Section */}
      <Box
        sx={{
          flex: 1,
          p: isFeaturedStyle ? 4 : 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          {/* Category and Date */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              mb: 2,
              flexWrap: "wrap",
            }}
          >
            <Chip
              label={post.category}
              size="small"
              sx={{
                bgcolor: "#ffe8e0",
                color: "primary.main",
                fontWeight: 600,
                fontSize: "0.75rem",
                height: 24,
                borderRadius: 0,
              }}
            />
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <CalendarTodayIcon sx={{ fontSize: 14, color: "#999" }} />
              <Typography
                variant="caption"
                sx={{
                  color: "#666",
                  fontSize: "0.75rem",
                }}
              >
                {post.date}
              </Typography>
            </Box>
          </Box>

          {/* Title */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              color: "#333",
              mb: isFeaturedStyle ? 2 : 1,
              fontSize: isFeaturedStyle ? "1.25rem" : "1rem",
              lineHeight: 1.4,
            }}
          >
            {post.title}
          </Typography>

          {/* Description (only for featured on lg+) */}
          {isFeaturedStyle && post.description && (
            <Typography
              variant="body2"
              sx={{
                color: "#666",
                fontSize: "0.875rem",
                lineHeight: 1.6,
                mb: 2,
              }}
            >
              {post.description}
            </Typography>
          )}
        </Box>

        {/* View More Button */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton
            size="small"
            sx={{
              bgcolor: "#e05440",
              color: "white",
              width: 24,
              height: 24,
              "&:hover": {
                bgcolor: "#c73f2d",
              },
            }}
          >
            <ArrowForwardIcon sx={{ fontSize: 16 }} />
          </IconButton>
          <Typography
            variant="body2"
            sx={{
              color: "#e05440",
              fontWeight: 600,
              fontSize: "0.8rem",
              textTransform: "uppercase",
            }}
          >
            View More
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};
