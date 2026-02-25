"use client";

import "@fontsource/bebas-neue";

import { createTheme } from "@mui/material/styles";

// 扩展 MUI 类型定义以支持自定义的 accent 属性
declare module "@mui/material/styles" {
  interface PaletteColor {
    accent?: string;
  }
  interface SimplePaletteColorOptions {
    accent?: string;
  }
}

// 创建自定义主题
export const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(194,53,38)",
      light: "rgba(231, 122, 112,0.2)",
      dark: "rgb(143, 36, 26)",
      contrastText: "#fff",
    },
    secondary: {
      main: "rgb(36, 56, 194)",
      light: "rgb(247, 250, 255)",
      dark: "rgb(31, 36, 59)",
      contrastText: "#fff",
    },
    grey: {
      50: "#f9f9f9",
      100: "#f0f0f0",
      200: "#e0e0e0",
      300: "#d0d0d0",
      400: "#c0c0c0",
      500: "#b0b0b0",
      600: "#a0a0a0",
      700: "#909090",
      800: "#808080",
      900: "#707070",
    },
    text: {
      primary: "#333",
      secondary: "#777",
    },
  },
  typography: {
    fontSize: 16,
    // 与 layout 中 Google Fonts CDN 引入的字体一致，fallback 保证未加载时显示
    fontFamily: [
      "Google Sans",
      "Montserrat",
      "Poppins",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(", "),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: [
            "Google Sans",
            "Montserrat",
            "Poppins",
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
          ].join(", "),
        },
      },
    },
  },
});
