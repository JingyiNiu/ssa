"use client";

import {
  Box,
  IconButton,
  useMediaQuery,
  useTheme,
  Tabs,
  Tab,
} from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import SectionTitle from "@/app/components/ui/SectionTitle";
import { useState } from "react";
import { PopularProductCard } from "./PopularProductCard";
import { isWCProduct, isPublicProduct } from "@/app/lib/api";
import { useProducts } from "@/app/(routes)/(home)/components/ProductsProvider";

// 定义排序类型
type SortType = "top-rated" | "sales" | "latest";

interface SortOption {
  value: SortType;
  label: string;
}

const sortOptions: SortOption[] = [
  { value: "top-rated", label: "Top Rated" },
  { value: "sales", label: "Best Sales" },
  { value: "latest", label: "Latest Products" },
];

export const PopularCategories = () => {
  const { products: allProducts } = useProducts();
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down("lg"));

  // Tab切换状态
  const [selectedSort, setSelectedSort] = useState<SortType>("top-rated");

  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  // 根据选中的排序方式处理产品，限制每个分类显示8个产品
  const products = [...allProducts]
    .sort((a, b) => {
      switch (selectedSort) {
        case "top-rated":
          // 按评分降序排序（两种类型都有 average_rating）
          return Number(b.average_rating || 0) - Number(a.average_rating || 0);

        case "sales":
          // 按销量降序排序
          const aSales = isWCProduct(a)
            ? a.total_sales || 0
            : a.review_count || 0; // PublicProduct 使用 review_count 作为近似
          const bSales = isWCProduct(b)
            ? b.total_sales || 0
            : b.review_count || 0;
          return bSales - aSales;

        case "latest":
          // 按创建时间降序排序（最新的在前）
          if (isWCProduct(a) && isWCProduct(b)) {
            // WCProduct: 按 date_created 排序
            return (
              new Date(b.date_modified).getTime() -
              new Date(a.date_modified).getTime()
            );
          } else if (isPublicProduct(a) && isPublicProduct(b)) {
            // PublicProduct: 按 id 排序（id 越大越新）
            return b.id - a.id;
          } else {
            // 混合类型：WCProduct 优先（假设是最新的用户数据）
            if (isWCProduct(a)) return -1;
            if (isWCProduct(b)) return 1;
            return 0;
          }

        default:
          return 0;
      }
    })
    .slice(0, 8); // 限制每个分类最多显示8个产品

  // 根据屏幕尺寸设置每页显示数量
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));
  const itemsPerPage = isSmDown && isMdDown ? 2 : 4; // sm: 2个，xs: 4个（单列2行）

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePrevious = () => {
    setDirection("left");
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setDirection("right");
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const displayedProducts = isMdDown
    ? products.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
      )
    : products;

  // 处理Tab切换
  const handleSortChange = (
    event: React.SyntheticEvent,
    newValue: SortType
  ) => {
    setSelectedSort(newValue);
    setCurrentPage(0); // 切换排序时重置页码
  };

  return (
    <Box sx={{ mb: 4 }} data-testid="popular-categories-section">
      <Box className="container mx-auto">
        {/* 标题和Tab容器 */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
            mb: 3,
          }}
        >
          <SectionTitle title="Popular Products" />

          {/* Tab切换组件 */}
          <Tabs
            value={selectedSort}
            onChange={handleSortChange}
            sx={{
              minHeight: "auto",
              "& .MuiTabs-flexContainer": {
                gap: 1,
              },
              "& .MuiTab-root": {
                minHeight: "auto",
                py: 1.5,
                px: 4,
                fontSize: "qrem",
                fontWeight: 600,
                textTransform: "none",
                bgcolor: "secondary.light",
                color: "text.primary",
                borderRadius: 2,
                "&.Mui-selected": {
                  bgcolor: "primary.main",
                  color: "primary.contrastText",
                },
              },
              "& .MuiTabs-indicator": {
                height: 0,
              },
            }}
          >
            {sortOptions.map((option) => (
              <Tab
                key={option.value}
                label={option.label}
                value={option.value}
              />
            ))}
          </Tabs>
        </Box>

        <Box sx={{ position: "relative" }}>
          {/* 左箭头按钮 - 仅 md 以下显示 */}
          {isMdDown && (
            <IconButton
              onClick={handlePrevious}
              sx={{
                position: "absolute",
                left: -10,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 2,
                bgcolor: "white",
                boxShadow: 2,
                "&:hover": {
                  bgcolor: "primary.main",
                  color: "white",
                },
              }}
            >
              <ChevronLeft />
            </IconButton>
          )}

          {/* 产品网格 */}
          {isMdDown ? (
            // md 以下：翻页模式
            <Box sx={{ position: "relative", overflow: "hidden" }}>
              <Box
                key={currentPage}
                sx={{
                  animation: `${direction === "right" ? "slideInRight" : "slideInLeft"} 0.5s ease-out`,
                  "@keyframes slideInRight": {
                    "0%": {
                      transform: "translateX(100%)",
                      opacity: 0,
                    },
                    "100%": {
                      transform: "translateX(0)",
                      opacity: 1,
                    },
                  },
                  "@keyframes slideInLeft": {
                    "0%": {
                      transform: "translateX(-100%)",
                      opacity: 0,
                    },
                    "100%": {
                      transform: "translateX(0)",
                      opacity: 1,
                    },
                  },
                }}
              >
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: {
                      xs: "1fr",
                      sm: "repeat(2, 1fr)",
                    },
                    gap: 2,
                  }}
                >
                  {displayedProducts.map((product) => (
                    <PopularProductCard key={product.id} product={product} />
                  ))}
                </Box>
              </Box>
            </Box>
          ) : (
            // md 及以上：显示全部
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  md: "repeat(2, 1fr)",
                  lg: "repeat(4, 1fr)",
                },
                gap: 3,
              }}
            >
              {displayedProducts.map((product) => (
                <PopularProductCard key={product.id} product={product} />
              ))}
            </Box>
          )}

          {/* 右箭头按钮 - 仅 md 以下显示 */}
          {isMdDown && (
            <IconButton
              onClick={handleNext}
              sx={{
                position: "absolute",
                right: -10,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 2,
                bgcolor: "white",
                boxShadow: 2,
                "&:hover": {
                  bgcolor: "primary.main",
                  color: "white",
                },
              }}
            >
              <ChevronRight />
            </IconButton>
          )}
        </Box>

        {/* 页面指示器 - 仅 md 以下显示 */}
        {isMdDown && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 1,
              mt: 3,
            }}
          >
            {Array.from({ length: totalPages }).map((_, index) => (
              <Box
                key={index}
                onClick={() => {
                  setDirection(index > currentPage ? "right" : "left");
                  setCurrentPage(index);
                }}
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  bgcolor: currentPage === index ? "primary.main" : "grey.300",
                  cursor: "pointer",
                  transition: "all 0.3s",
                  "&:hover": {
                    bgcolor:
                      currentPage === index ? "primary.dark" : "grey.400",
                  },
                }}
              />
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};
