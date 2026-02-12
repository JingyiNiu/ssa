"use client";

import React, { useState } from 'react';
import { Box, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const menuItems = [
  { id: 'dashboard', label: 'DASHBOARD', icon: <DashboardOutlinedIcon /> },
  { id: 'orders', label: 'ORDERS', icon: <ShoppingBagOutlinedIcon /> },
  { id: 'downloads', label: 'DOWNLOADS', icon: <DownloadOutlinedIcon /> },
  { id: 'addresses', label: 'ADDRESSES', icon: <LocationOnOutlinedIcon /> },
  { id: 'account-details', label: 'ACCOUNT DETAILS', icon: <PersonOutlineIcon /> },
  { id: 'logout', label: 'LOG OUT', icon: <LogoutOutlinedIcon /> },
];

const DashboardTabs = () => {
  const [activeTab, setActiveTab] = useState('orders');

  const handleTabClick = (tabId: string) => {
    if (tabId === 'logout') {
      // 处理登出逻辑
      console.log('Logging out...');
      return;
    }
    setActiveTab(tabId);
  };

  return (
    <Box sx={{ py: 1 }}>
      <List sx={{ p: 0 }}>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.id}
            selected={activeTab === item.id}
            onClick={() => handleTabClick(item.id)}
            sx={{
              py: 1.5,
              px: 3,
              '&.Mui-selected': {
                bgcolor: '#f5f5f5',
                borderLeft: '3px solid #333',
                '& .MuiListItemIcon-root': {
                  color: '#333',
                },
                '& .MuiListItemText-primary': {
                  color: '#333',
                  fontWeight: 600,
                },
              },
              '&:hover': {
                bgcolor: '#fafafa',
              },
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 40,
                color: '#999',
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{
                sx: {
                  fontSize: '0.875rem',
                  color: '#666',
                  fontWeight: 500,
                  letterSpacing: '0.5px',
                },
              }}
            />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default DashboardTabs;