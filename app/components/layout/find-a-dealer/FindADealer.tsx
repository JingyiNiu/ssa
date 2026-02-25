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
    setExpandedDealer(expandedDealer === index ? null : index);
  };

  return (
    <Box
      sx={{ bgcolor: "#000", pt: 4, pb: 8 }}
      data-testid="find-a-dealer"
    >
      <Box className="" sx={{ mb: 4, px: 4 }}>
        <SectionTitle title="Find a Dealer" color="#fff" />

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 3,
            mt: 2,
          }}
        >
          {/* 左侧：Dealer 列表 */}
          <Box
            sx={{
              flex: { xs: "1", md: "0 0 40%" },
              maxHeight: "400px",
              overflowY: "auto",
              bgcolor: "#000",
            }}
            data-testid="dealer-list"
          >
            <Box sx={{ px: 1, py: 1 }}>
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

          {/* 右侧：地图 */}
          <Box
            sx={{
              flex: { xs: "1", md: "0 0 57%" },
            }}
            data-testid="dealer-map"
          >
            <Box
              sx={{
                position: "sticky",
                top: 20,
                height: { xs: "400px", md: "400px" },
                overflow: "hidden",
              }}
            >
              {expandedDealer !== null ? (
                <DealerMap
                  address={stores[expandedDealer].address}
                  height="400px"
                />
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
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
    </Box>
  );
};

export default FindADealer;
