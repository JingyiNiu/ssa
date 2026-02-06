"use client";

import { Box, Typography, Paper } from "@mui/material";
import React, { useState } from "react";
import SectionTitle from "../ui/SectionTitle";
import { stores } from "./dealers";
import DealerCard from "./DealerCard";

const FindADealer = () => {
  const [expandedDealer, setExpandedDealer] = useState<number | null>(0);

  // 处理店铺点击
  const handleDealerClick = (index: number) => {
    setExpandedDealer(expandedDealer === index ? null : index);
  };

  // 为每个店铺生成地图 URL
  const getMapUrl = (address: string) => {
    const encodedAddress = encodeURIComponent(address);
    return `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "YOUR_API_KEY"}&q=${encodedAddress}`;
  };

  return (
    <Box
      sx={{ bgcolor: "secondary.light", pt: 4, pb: 8 }}
      data-testid="find-a-dealer"
    >
      <Box className="container mx-auto" sx={{ mb: 4, px: 2 }}>
        <SectionTitle title="Find a Dealer" />

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 3,
            mt: 2,
          }}
        >
          {/* 左侧：Dealer 列表 */}
          <Paper
            elevation={1}
            sx={{
              flex: { xs: "1", md: "0 0 40%" },
              maxHeight: "400px",
              overflowY: "auto",
              bgcolor: "background.paper",
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
          </Paper>

          {/* 右侧：地图 */}
          <Box
            sx={{
              flex: { xs: "1", md: "0 0 57%" },
            }}
            data-testid="dealer-map"
          >
            <Paper
              elevation={1}
              sx={{
                position: "sticky",
                top: 20,
                height: { xs: "400px", md: "400px" },
                overflow: "hidden",
              }}
            >
              {expandedDealer !== null ? (
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={getMapUrl(stores[expandedDealer].address)}
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
            </Paper>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FindADealer;
