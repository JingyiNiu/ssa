"use client";

import { useState } from "react";
import { Box, Tabs, Tab, Typography, Rating, Divider } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { ProductDetails } from "./product";

interface ProductTabsProps {
  product: ProductDetails;
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = ({ children, value, index }: TabPanelProps) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`product-tabpanel-${index}`}
      aria-labelledby={`product-tab-${index}`}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
};

const ProductTabs = ({ product }: ProductTabsProps) => {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", mt: 6 }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="product information tabs"
          sx={{
            "& .MuiTab-root": {
              textTransform: "none",
              fontSize: "1rem",
              fontWeight: 500,
              minWidth: 120,
            },
            "& .Mui-selected": {
              color: "#d32f2f",
            },
            "& .MuiTabs-indicator": {
              backgroundColor: "#d32f2f",
            },
          }}
        >
          <Tab label="Description" id="product-tab-0" />
          <Tab label="Specification" id="product-tab-1" />
          <Tab label={`Reviews (${product.reviews?.length || 0})`} id="product-tab-2" />
        </Tabs>
      </Box>

      {/* Description Tab */}
      <TabPanel value={value} index={0}>
        <Typography variant="body1" sx={{ lineHeight: 1.8, color: "text.secondary" }}>
          {product.description || "No description available."}
        </Typography>
      </TabPanel>

      {/* Specification Tab */}
      <TabPanel value={value} index={1}>
        <Typography variant="body1" sx={{ lineHeight: 1.8, color: "text.secondary" }}>
          {product.specifications || "No specifications available."}
        </Typography>
      </TabPanel>

      {/* Reviews Tab */}
      <TabPanel value={value} index={2}>
        {product.reviews && product.reviews.length > 0 ? (
          <Box>
            {product.reviews.map((review, index) => (
              <Box key={review.id}>
                <Box sx={{ mb: 3 }}>
                  {/* 评分 */}
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                    <Rating
                      value={review.rating}
                      readOnly
                      precision={0.1}
                      size="small"
                      icon={<StarIcon sx={{ color: "#ffc107" }} />}
                      emptyIcon={<StarIcon sx={{ color: "#e0e0e0" }} />}
                    />
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {review.rating.toFixed(1)}
                    </Typography>
                  </Box>

                  {/* 评论内容 */}
                  <Typography
                    variant="body1"
                    sx={{ mb: 1, lineHeight: 1.8, color: "text.primary" }}
                  >
                    {review.comment}
                  </Typography>

                  {/* 日期 */}
                  <Typography variant="caption" color="text.secondary">
                    {new Date(review.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </Typography>
                </Box>

                {/* 分隔线 */}
                {index < product.reviews.length - 1 && (
                  <Divider sx={{ my: 3 }} />
                )}
              </Box>
            ))}
          </Box>
        ) : (
          <Typography variant="body1" color="text.secondary">
            No reviews yet. Be the first to review this product!
          </Typography>
        )}
      </TabPanel>
    </Box>
  );
};

export default ProductTabs;
