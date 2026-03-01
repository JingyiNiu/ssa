"use client";

import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import SectionTitle from "@/app/components/ui/SectionTitle";
import { stores } from "./dealers";
import DealerCard from "./DealerCard";
import { DealerMap } from "./DealerMap";

const FindADealer = () => {
  const [expandedDealer, setExpandedDealer] = useState<number | null>(0);

  const handleDealerClick = (index: number) => {
    // 永远保持至少一个卡片展开，点击当前展开项时不收起
    if (expandedDealer === index) return;
    setExpandedDealer(index);
  };

  return (
    <Box
      sx={{
        bgcolor: "#000",
      }}
      data-testid="find-a-dealer"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 3,
        }}
      >
        <Box sx={{ py: 4, pl: 4 }}>
          <Typography
            variant="h2"
            sx={{
              my: 2,
              fontWeight: 600,
              fontSize: { xs: "1.5rem", md: "2rem" },
              color: "#fff",
            }}
            data-testid="section-title"
          >
            Find a Dealer
          </Typography>
          {/* 左侧：Dealer 列表 */}
          <Box
            sx={{
              flex: { xs: "1", md: "0 0 40%" },
              maxHeight: "400px",
              maxWidth: "500px",
              overflowY: "auto",
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": { display: "none" },
              bgcolor: "rgba(0, 0, 0, 0.9)",
            }}
            data-testid="dealer-list"
          >
            <Box data-testid="dealer-list-container">
              {stores.map((store, index) => {
                const isExpanded = expandedDealer === index;
                return (
                  <DealerCard
                    key={index}
                    store={store}
                    index={index}
                    isExpanded={isExpanded}
                    handleDealerClick={handleDealerClick}
                  />
                );
              })}
            </Box>
          </Box>
        </Box>

        {/* 右侧：地图 */}
        <Box
          sx={{
            flex: 1,
            minHeight: 400,
            display: "flex",
          }}
          data-testid="dealer-map"
        >
          <Box
            sx={{
              position: "sticky",
              top: 20,
              overflow: "hidden",
              width: "100%",
              height: "100%",
              minHeight: 400,
            }}
          >
            {expandedDealer !== null ? (
              <DealerMap
                address={stores[expandedDealer].address}
                height="100%"
              />
            ) : (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  minHeight: 400,
                  bgcolor: "grey.100",
                }}
              >
                <Typography variant="h6" sx={{ color: "text.secondary" }}>
                  Please select a store to view the map
                </Typography>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FindADealer;
