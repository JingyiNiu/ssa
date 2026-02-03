"use client"

import { Box } from "@mui/material"
import { useRef, useState } from "react"
import { SearchTabs, SearchTabType } from "./SearchTabs"
import { SearchFilter } from "./SearchFilter"
import { SearchButtons } from "./SearchButtons"

export const SearchSection = () => {
  const [activeTab, setActiveTab] = useState<SearchTabType>("wheel")
  const searchFilterRef = useRef<{
    getFilters: () => any
    resetFilters: () => void
  }>(null)

  const handleTabChange = (tab: SearchTabType) => {
    setActiveTab(tab)
  }

  const handleSearch = () => {
    const result = searchFilterRef.current?.getFilters()
    console.log("Search:", result)
    // Implement search logic here
  }

  const handleReset = () => {
    searchFilterRef.current?.resetFilters()
  }

  return (
    <Box data-testid="search-section" sx={{ mb: 4 }}>
      <Box 
        className="container mx-auto" 
        data-testid="search-section-container"
        sx={{ position: "relative" }}
      >
        {/* 搜索切换按钮 */}
        <SearchTabs activeTab={activeTab} onTabChange={handleTabChange} />

        {/* 占位间距 */}
        <Box sx={{ py: 2 }} data-testid="search-section-spacing" />

        {/* 搜索条件 */}
        <SearchFilter key={activeTab} ref={searchFilterRef} filterType={activeTab} />

        {/* 搜索按钮 */}
        <SearchButtons handleSearch={handleSearch} handleReset={handleReset} />
      </Box>
    </Box>
  )
}
