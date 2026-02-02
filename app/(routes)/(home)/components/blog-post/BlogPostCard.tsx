"use client";

import { Box, Typography, Card, Chip, IconButton } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React from "react";
import { BlogPost } from "./blogpost";

interface BlogPostCardProps {
  post: BlogPost;
  featured?: boolean;
}

export const BlogPostCard = ({ post, featured = false }: BlogPostCardProps) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "row",
        cursor: "pointer",
        borderRadius: 0,
        boxShadow: "none",
        transition: "all 0.3s ease",
        height: featured ? "100%" : "auto",
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
          width: featured ? "50%" : "40%",
          minHeight: featured ? 300 : 120,
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
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src =
              "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2UwZTBlMCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5CbG9nIEltYWdlPC90ZXh0Pjwvc3ZnPg==";
          }}
        />
      </Box>

      {/* Content Section */}
      <Box
        sx={{
          flex: 1,
          p: featured ? 4 : 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          {/* Category and Date */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
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
              mb: featured ? 2 : 1,
              fontSize: featured ? "1.25rem" : "1rem",
              lineHeight: 1.4,
            }}
          >
            {post.title}
          </Typography>

          {/* Description (only for featured) */}
          {featured && post.description && (
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
