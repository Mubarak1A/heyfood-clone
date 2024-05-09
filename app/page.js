"use client";
import React from 'react';
import { useState } from 'react';
import Navbar from './components/navbar';
import Category from './components/categories';
import FoodList from './components/foodlists';
import BannerCarousel from './components/bannerCarousel';
import SortingComponent from './components/sorting'
import RestaurantList from './components/restaurantsLists';
import { Box } from '@mui/material';
import { IconButton, Menu, MenuItem } from '@mui/material';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { ArrowDropDown as ArrowDropDownIcon } from '@mui/icons-material';

export default function Home() {

  const [anchorEl, setAnchorEl] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  //let [activeCategory, setActiveCategory] = useState('Restaurants');

  const numberOfStores = 30;

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setIsMenuOpen(false);
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  /*const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };*/

  const bannerUrls = [
    'https://res.cloudinary.com/dgny0gcfm/image/upload/v1715129071/heyfood/banner4_jnqilv.jpg',
    'https://res.cloudinary.com/dgny0gcfm/image/upload/v1715129071/heyfood/banner5_hj84pf.jpg',
    'https://res.cloudinary.com/dgny0gcfm/image/upload/v1715129071/heyfood/banner6_knpb9c.jpg',
    'https://res.cloudinary.com/dgny0gcfm/image/upload/v1715129071/heyfood/banner7_m1xhgc.jpg',
    'https://res.cloudinary.com/dgny0gcfm/image/upload/v1715129071/heyfood/banner3_ljktzn.jpg',
    'https://res.cloudinary.com/dgny0gcfm/image/upload/v1715129071/heyfood/banner2_id02hc.jpg',
    'https://res.cloudinary.com/dgny0gcfm/image/upload/v1715129070/heyfood/banner1_yydgnf.jpg'
  ]

  return (
    <>
      <Navbar />
      <Category
        /*activeCategory={activeCategory}*/
        onCategoryClick={handleCategoryClick}
        onMenuClick={handleMenuClick}
      />
      <FoodList />
      <BannerCarousel bannerUrls={bannerUrls} />
      <Box>
        {/* Sorting drop-down menu for mobile */}
        <IconButton
          onClick={handleMenuClick}
          sx={{ display: { xs: 'block', md: 'none' } }} // Show only on mobile/small screens
        >
          <ArrowDropDownIcon />
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          open={isMenuOpen}
          onClose={handleMenuClose}
          keepMounted
        >
          <MenuItem>
            <SortingComponent numberOfStores={numberOfStores} />
          </MenuItem>
        </Menu>

        {/* Main layout for desktop/larger screens */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' }, // Column for mobile, row for large screens
            gap: 2,
            padding: 2,
          }}
        >
          {/* Sorting component for larger screens */}
          <Box
            sx={{
              flex: 1,
              display: { xs: 'none', md: 'block' } // Only show on larger screens
            }}
          >
            <SortingComponent numberOfStores={numberOfStores} />
          </Box>

          {/* Restaurants list */}
          <Box sx={{ flex: 3 }}>
            <RestaurantList />
          </Box>
        </Box>
      </Box>
    </>
  );
}
