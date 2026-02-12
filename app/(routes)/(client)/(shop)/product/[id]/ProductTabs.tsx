"use client";

import { useState } from "react";
import { Box, Tabs, Tab, Typography, Rating, Divider } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { WCProduct } from "@/app/components/layout/product-list/wc-product";
import { PublicProduct } from "@/app/components/layout/product-list/public-product";

interface ProductTabsProps {
  product: WCProduct | PublicProduct;
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
          <Tab label={`Reviews (0)`} id="product-tab-2" />
        </Tabs>
      </Box>

      {/* Description Tab */}
      <TabPanel value={value} index={0}>
        {product.description ? (
          <Box
            sx={{
              lineHeight: 1.8,
              color: "text.secondary",
              '& p': { mb: 2 },
              '& h1, & h2, & h3, & h4, & h5, & h6': { 
                fontWeight: 600, 
                mt: 2, 
                mb: 1,
                color: 'text.primary',
              },
              '& ul, & ol': { pl: 3, mb: 2 },
              '& li': { mb: 0.5 },
            }}
            dangerouslySetInnerHTML={{ __html: product.description }}
          />
        ) : (
          <Typography
            variant="body1"
            sx={{ lineHeight: 1.8, color: "text.secondary" }}
          >
            No description available.
          </Typography>
        )}
      </TabPanel>

      {/* Specification Tab */}
      <TabPanel value={value} index={1}>
        {product.short_description ? (
          <Box
            sx={{
              lineHeight: 1.8,
              color: "text.secondary",
              '& p': { mb: 2 },
              '& h1, & h2, & h3, & h4, & h5, & h6': { 
                fontWeight: 600, 
                mt: 2, 
                mb: 1,
                color: 'text.primary',
              },
              '& ul, & ol': { pl: 3, mb: 2 },
              '& li': { mb: 0.5 },
            }}
            dangerouslySetInnerHTML={{ __html: product.short_description }}
          />
        ) : (
          <Typography
            variant="body1"
            sx={{ lineHeight: 1.8, color: "text.secondary" }}
          >
            No specifications available.
          </Typography>
        )}
      </TabPanel>

      {/* Reviews Tab */}
      <TabPanel value={value} index={2}>
        <Typography variant="body1" color="text.secondary">
          No reviews yet. Be the first to review this product!
        </Typography>
      </TabPanel>
    </Box>
  );
};

export default ProductTabs;
