'use client'

import { createTheme } from '@mui/material/styles'

// 扩展 MUI 类型定义以支持自定义的 accent 属性
declare module '@mui/material/styles' {
  interface PaletteColor {
    accent?: string
  }
  interface SimplePaletteColorOptions {
    accent?: string
  }
}

// 创建自定义主题
export const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(194,53,38)', 
      light: 'rgb(231, 122, 112)',
      dark: 'rgb(143, 36, 26)',
      contrastText: '#fff',
    },
    secondary: {
      main: 'rgb(36, 56, 194)', 
      accent: 'rgb(232, 84, 64)',
      light: 'rgb(247, 250, 255)',
      dark: 'rgb(31, 36, 59)',
      contrastText: '#fff',
    },
    grey: {
      50: '#f9f9f9',
      100: '#f0f0f0',
      200: '#e0e0e0',
      300: '#d0d0d0',
      400: '#c0c0c0',
      500: '#b0b0b0',
      600: '#a0a0a0',
      700: '#909090',
      800: '#808080',
      900: '#707070',
    },
    text: {
      primary: '#333',
      secondary: '#777',
    },
  },
  typography: {
    // 基础字体大小配置
    fontSize: 16, // 基础字体大小（像素），默认是 14
    htmlFontSize: 16, // HTML 根元素字体大小，用于 rem 计算，默认是 16
    
    fontFamily: [
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    
    // 各个文本变体的字体大小
    h1: {
      fontSize: '3rem', // 40px
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2rem', // 32px
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '1.75rem', // 28px
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: '1.5rem', // 24px
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '1.25rem', // 20px
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h6: {
      fontSize: '1rem', // 16px
      fontWeight: 600,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem', // 16px - 主要正文
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem', // 14px - 次要正文
      lineHeight: 1.43,
    },
    button: {
      fontSize: '0.875rem', // 14px
      fontWeight: 600,
      lineHeight: 1.75,
    },
    caption: {
      fontSize: '0.75rem', // 12px - 小字说明
      lineHeight: 1.66,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontSize: '14px', // 设置 body 的默认字体大小
          lineHeight: 1.5,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // 禁用按钮文字大写
          fontWeight: 600,
          fontSize: '0.875rem', // 14px
          borderRadius: 4,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        },
      },
    },
  },
})
