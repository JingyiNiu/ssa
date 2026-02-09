"use client";

import { Box, Dialog, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import { useState } from "react";

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
}

const ProductImageGallery = ({ images, productName }: ProductImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <Box>
      {/* 主图 */}
      <Box
        onClick={() => setOpenDialog(true)}
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: 300, sm: 400, md: 500 },
          border: "1px solid #e0e0e0",
          borderRadius: 2,
          overflow: "hidden",
          mb: 2,
          bgcolor: "#f5f5f5",
          cursor: "pointer",
          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            transform: "scale(1.01)",
          },
        }}
      >
        <Image
          src={selectedImage}
          alt={productName}
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </Box>

      {/* 缩略图 */}
      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
        {images.map((imageUrl, index) => (
          <Box
            key={index}
            onClick={() => setSelectedImage(imageUrl)}
            sx={{
              position: "relative",
              width: 80,
              height: 80,
              border:
                selectedImage === imageUrl
                  ? "2px solid #d32f2f"
                  : "1px solid #e0e0e0",
              borderRadius: 1,
              overflow: "hidden",
              cursor: "pointer",
              bgcolor: "#f5f5f5",
              "&:hover": {
                borderColor: "#d32f2f",
              },
            }}
          >
            <Image
              src={imageUrl}
              alt={`${productName} thumbnail ${index + 1}`}
              fill
              style={{ objectFit: "contain" }}
            />
          </Box>
        ))}
      </Box>

      {/* 大图查看对话框 */}
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        maxWidth="lg"
        fullWidth
        sx={{
          "& .MuiDialog-paper": {
            bgcolor: "rgba(0, 0, 0, 0.9)",
            boxShadow: "none",
          },
        }}
      >
        <IconButton
          onClick={() => setOpenDialog(false)}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: "white",
            bgcolor: "rgba(255, 255, 255, 0.1)",
            "&:hover": {
              bgcolor: "rgba(255, 255, 255, 0.2)",
            },
            zIndex: 1,
          }}
        >
          <CloseIcon />
        </IconButton>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "80vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            src={selectedImage}
            alt={productName}
            fill
            style={{ objectFit: "contain" }}
          />
        </Box>
      </Dialog>
    </Box>
  );
};

export default ProductImageGallery;
