"use client";
import React from "react";
import { useState } from "react";
import Navbar from "./components/navbar";
import Category from "./components/categories";
import FoodList from "./components/foodLists";
import BannerCarousel from "./components/bannerCarousel";
import SortingComponent from "./components/sorting";
import RestaurantList from "./components/restaurantsLists";
import { Box, makeStyles } from "@mui/material";
import { IconButton, Menu, MenuItem } from "@mui/material";
//import Grid from '@mui/material/Grid';
//import Container from '@mui/material/Container';
import { ArrowDropDown as ArrowDropDownIcon } from "@mui/icons-material";
import { createMuiTheme, ThemeProvider } from "@mui/material";
import SignInDialog from "./components/signin";
import Sidebar from "./components/sidebar";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },
    secondary: {
      main: "#000000",
    },
  },
  typography: {
    fontFamily: "Poppins",
  },
});

const foodItem = Navbar.foodItem
const isSignIn = localStorage.getItem('currentuser') ? true : false

export default function Home() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  let sort = SortingComponent.sort;

  const sortRestaurants = (list, propertyName) => {
    return list.sort((a, b) => {
      if (a[propertyName] < b[propertyName]) {
        return 1;
      }
      if (a[propertyName] > b[propertyName]) {
        return -1;
      }
      return 0;
    });
  };

  let sortedRestaurants =
    sort === "most-popular"
      ? sortRestaurants(restaurants, noOfRatings)
      : sort === "highest-rated"
      ? sortRestaurants(restaurants, ratings)
      : sort === "newest"
      ? sortRestaurants(restaurants, dateCreated)
      : sort === "most-rated"
      ? sortRestaurants(restaurants, noOfRatings)
      : null;

  useEffect(() => {
    axios
      .get("https://heyfood-clone-backend.onrender.com/restaurants")
      .then((response) => {
        setRestaurants(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching restaurants:", error);
        setLoading(false);
      });
  }, []);

  const numberOfStores = restaurants.length;

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

  const bannerUrls = [
    "https://res.cloudinary.com/dgny0gcfm/image/upload/v1715129071/heyfood/banner4_jnqilv.jpg",
    "https://res.cloudinary.com/dgny0gcfm/image/upload/v1715129071/heyfood/banner5_hj84pf.jpg",
    "https://res.cloudinary.com/dgny0gcfm/image/upload/v1715129071/heyfood/banner6_knpb9c.jpg",
    "https://res.cloudinary.com/dgny0gcfm/image/upload/v1715129071/heyfood/banner7_m1xhgc.jpg",
    "https://res.cloudinary.com/dgny0gcfm/image/upload/v1715129071/heyfood/banner3_ljktzn.jpg",
    "https://res.cloudinary.com/dgny0gcfm/image/upload/v1715129071/heyfood/banner2_id02hc.jpg",
    "https://res.cloudinary.com/dgny0gcfm/image/upload/v1715129070/heyfood/banner1_yydgnf.jpg",
  ];

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar foodItem={foodItem} isSignIn={isSignIn} />
        <Category
          /*activeCategory={activeCategory}*/
          onCategoryClick={handleCategoryClick}
          onMenuClick={handleMenuClick}
        />
        <FoodList bannerUrls={bannerUrls} />
        <BannerCarousel bannerUrls={bannerUrls} />
        <Box>
          {/* Sorting drop-down menu for mobile */}
          <IconButton
            onClick={handleMenuClick}
            sx={{ display: { xs: "block", md: "none" } }} // Show only on mobile/small screens
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
              display: "flex",
              flexDirection: { xs: "column", md: "row" }, // Column for mobile, row for large screens
              gap: 2,
              padding: 2,
            }}
          >
            {/* Sorting component for larger screens */}
            <Box
              sx={{
                flex: 1,
                display: { xs: "none", md: "block" }, // Only show on larger screens
              }}
            >
              <SortingComponent numberOfStores={numberOfStores || 0} />
            </Box>

            {/* Restaurants list */}
            <Box sx={{ flex: 3 }}>
              <RestaurantList restaurants={restaurants} loading={loading} sortedRestaurants={sortedRestaurants}/>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
}
