"use client";

import { Box } from "@mui/material";
import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { SelectChangeEvent } from "@mui/material";
import {
  allProducts,
  CategoryType,
} from "@/app/components/layout/product-list/mock-product";
import { SearchHero } from "./SearchHero";
import { FilterBar, SortOption, PriceRange } from "./FilterBar";
import { SearchResultsHeader } from "./SearchResultsHeader";
import { ProductGrid } from "./ProductGrid";
import { EmptySearchState } from "./EmptySearchState";
import FindADealer from "@/app/components/layout/find-a-dealer/FindADealer";
import { getProductPrice } from "@/app/lib/api";
import { Category } from "@/app/components/layout/product-list/wc-product";

const SearchContent = () => {
  const searchParams = useSearchParams();

  // 从URL读取搜索词用于显示（不用于过滤）
  const urlSearchQuery =
    searchParams.get("q") || searchParams.get("query") || "";

  const [selectedCategory, setSelectedCategory] = useState<
    Category | "all"
  >("all");
  const [sortBy, setSortBy] = useState<SortOption>("relevance");
  const [priceRange, setPriceRange] = useState<PriceRange>("all");

  // 过滤和排序产品（不使用搜索关键词）
  const filteredAndSortedProducts = useMemo(() => {
    let results = allProducts;

    // 按类别过滤
    if (selectedCategory !== "all") {
      results = results.filter(
        (product) => product.categories.some((category) => category.id === selectedCategory.id)
      );
    }

    // 按价格区间过滤
    if (priceRange !== "all") {
      results = results.filter((product) => {
        switch (priceRange) {
          case "0-50":
            return Number(getProductPrice(product)) < 50;
          case "50-100":
            return Number(getProductPrice(product)) >= 50 && Number(getProductPrice(product)) < 100;
          case "100-200":
            return Number(getProductPrice(product)) >= 100 && Number(getProductPrice(product)) < 200;
          case "200+":
            return Number(getProductPrice(product)) >= 200;
          default:
            return true;
        }
      });
    }

    // 排序
    switch (sortBy) {
      case "price-asc":
        results = [...results].sort((a, b) => Number(getProductPrice(a)) - Number(getProductPrice(b)));
        break;
      case "price-desc":
        results = [...results].sort((a, b) => Number(getProductPrice(b)) - Number(getProductPrice(a)));
        break;
      case "rating":
        results = [...results].sort(
          (a, b) => (Number(b.average_rating) || 0) - (Number(a.average_rating) || 0)
        );
        break;
      case "name":
        results = [...results].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "relevance":
      default:
        // 保持原始顺序（或按相关性排序）
        break;
    }

    return results;
  }, [selectedCategory, sortBy, priceRange]);

  const handleCategoryChange = (
    event: SelectChangeEvent<Category | "all">
  ) => {
    setSelectedCategory(event.target.value as Category | "all");
  };

  const handleSortChange = (event: SelectChangeEvent<SortOption>) => {
    setSortBy(event.target.value as SortOption);
  };

  const handlePriceRangeChange = (event: SelectChangeEvent) => {
    setPriceRange(event.target.value as PriceRange);
  };

  const clearFilters = () => {
    setSelectedCategory("all");
    setPriceRange("all");
    setSortBy("relevance");
  };

  const hasActiveFilters =
    selectedCategory !== "all" ||
    priceRange !== "all" ||
    sortBy !== "relevance";

  return (
    <>
      <SearchHero />
      <Box sx={{ my: 8 }} className="container mx-auto">
        {/* 过滤和排序栏 */}
        <FilterBar
          searchQuery={urlSearchQuery}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
          priceRange={priceRange}
          onPriceRangeChange={handlePriceRangeChange}
          sortBy={sortBy}
          onSortChange={handleSortChange}
          hasActiveFilters={hasActiveFilters}
          onClearFilters={clearFilters}
        />

        {/* 结果统计 */}
        <SearchResultsHeader
          resultCount={filteredAndSortedProducts.length}
          searchQuery=""
          selectedCategory={selectedCategory}
          onCategoryRemove={() => setSelectedCategory("all")}
          priceRange={priceRange}
          onPriceRangeRemove={() => setPriceRange("all")}
        />

        {/* 产品列表或空状态 */}
        {filteredAndSortedProducts.length > 0 ? (
          <ProductGrid products={filteredAndSortedProducts} />
        ) : (
          <EmptySearchState
            searchQuery=""
            hasActiveFilters={hasActiveFilters}
            onClearFilters={clearFilters}
          />
        )}
      </Box>

      <FindADealer />
    </>
  );
};

const SearchPage = () => {
  return (
    <Box data-testid="search-page">
      <Suspense fallback={<Box sx={{ minHeight: "50vh" }} />}>
        <SearchContent />
      </Suspense>
    </Box>
  );
};

export default SearchPage;
