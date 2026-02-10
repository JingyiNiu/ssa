"use client";

import { Product } from "@/app/components/layout/product-list/product";
import {
  Box,
  CardContent,
  CardMedia,
  Typography,
  Modal,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ZoomInIcon from "@mui/icons-material/ZoomIn";

interface ImageCardProps {
  product: Product;
}

export const ImageCard = ({ product }: ImageCardProps) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          transition: "transform 0.2s, box-shadow 0.2s",
          border: "1px solid #e0e0e0",
          borderRadius: 2,
          overflow: "hidden",
          bgcolor: "white",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: 4,
            cursor: "pointer",
          },
        }}
        onClick={handleOpen}
      >
        {/* 固定宽高比的图片容器 */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            paddingTop: "75%", // 4:3 宽高比
            overflow: "hidden",
            "&:hover .zoom-overlay": {
              opacity: 1,
            },
          }}
        >
          <CardMedia
            component="img"
            image={product.image}
            alt={product.name}
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "contain",
              padding: 2,
            }}
          />
          
          {/* 悬停时显示的查看大图图标 */}
          <Box
            className="zoom-overlay"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "rgba(0, 0, 0, 0.5)",
              opacity: 0,
              transition: "opacity 0.3s ease",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                color: "white",
              }}
            >
              <ZoomInIcon sx={{ fontSize: 48, mb: 1 }} />
            </Box>
          </Box>
        </Box>

        <CardContent sx={{ flexGrow: 1, p: 2 }}>
          <Typography
            variant="body1"
            component="div"
            sx={{
              fontWeight: 600,
              mb: 0.5,
              fontSize: "0.95rem",
            }}
          >
            {product.name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontSize: "0.85rem",
              textTransform: "capitalize",
            }}
          >
            {product.category}
          </Typography>
        </CardContent>
      </Box>

      {/* 图片预览 Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            position: "relative",
            maxWidth: "90vw",
            maxHeight: "90vh",
            outline: "none",
            display: "flex",
            flexDirection: "column",
            bgcolor: "white",
            borderRadius: 2,
            boxShadow: 24,
          }}
        >
          {/* 关闭按钮 */}
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              bgcolor: "rgba(255, 255, 255, 0.9)",
              "&:hover": {
                bgcolor: "rgba(255, 255, 255, 1)",
              },
              zIndex: 1,
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* 大图显示 */}
          <Box
            component="img"
            src={product.image}
            alt={product.name}
            sx={{
              maxWidth: "90vw",
              maxHeight: "75vh",
              objectFit: "contain",
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
            }}
          />

          {/* 图片信息 */}
          <Box
            sx={{
              bgcolor: "white",
              color: "text.primary",
              p: 3,
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              {product.description || product.category}
            </Typography>
          </Box>
        </Box>
      </Modal>
    </>
  );
};
