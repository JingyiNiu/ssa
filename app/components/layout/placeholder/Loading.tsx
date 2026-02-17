import * as React from "react";
import {
  Backdrop,
  Box,
  CircularProgress,
  Fade,
  Typography,
} from "@mui/material";

type LoadingOverlayProps = {
  open: boolean;
  text?: string;
  /** 默认全屏；传 false 可用于局部容器（需要你自己用 position: relative 包一下） */
  fullScreen?: boolean;
  /** 背景遮罩透明度（0~1） */
  opacity?: number;
};

export function LoadingOverlay({
  open,
  text = "Loading...",
  fullScreen = true,
  opacity = 0.35,
}: LoadingOverlayProps) {
  return (
    <Fade in={open} unmountOnExit>
      <Backdrop
        open={open}
        sx={{
          zIndex: (t) => t.zIndex.modal + 1,
          position: fullScreen ? "fixed" : "absolute",
          inset: 0,
          bgcolor: `rgba(0,0,0,${opacity})`,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1.5,
            p: 2.5,
            borderRadius: 2,
            bgcolor: "rgba(255,255,255,0.9)",
            boxShadow: 3,
            minWidth: 160,
          }}
        >
          <CircularProgress />
          {text ? (
            <Typography variant="body2" color="text.secondary">
              {text}
            </Typography>
          ) : null}
        </Box>
      </Backdrop>
    </Fade>
  );
}
