import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Box,
  Typography,
  Button,
  CircularProgress,
  Paper,
} from '@mui/material';
import 'swiper/css'; // Importing Swiper CSS
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import RestaurantCard from './restaurantCard';
import { red } from '@mui/material/colors';

const RestaurantList = ({ restaurants, loading, sortedRestaurants }) => {
  // Function to filter restaurants based on a condition
  const filterRestaurants = (condition) => restaurants.filter(condition);

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh', // Center loading indicator
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  const swiperSx = {
    display: 'flex',
    overflowX: 'auto',
    scrollSnapType: 'x mandatory',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
    '&::-webkit-scrollbar': {
      display: 'none', // Hide scrollbar
    },
  };

  const swiperItemSx = {
    flex: '0 0 auto',
    scrollSnapAlign: 'start',
    minWidth: '200px', // Minimum width for readability
    margin: 1, // Spacing between items
    backgroundColor: 'white',
    padding: 2,
    borderRadius: '8px', // Rounded corners
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh', // Center the loading spinner
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (sortedRestaurants != null) {
    return (
      <Box padding={2}>
        <Box>
          <Box sx={{ display: 'flex', justifyContent: 'flex-start'}}>
        <Typography variant="h4">{`${sortedRestaurants.length} Stores near you`}</Typography>
        <Typography button variant="h6" color={red} onClick={() => sortedRestaurants = null}>Reset</Typography>
          </Box>
        {sortedRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant._id} restaurant={restaurant} />
        ))}
      </Box>
      </Box>
    )
  }

  return (
    <Box padding={2}>
      {/* Newest Section */}
      <Box marginY={2}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="h6">New on Heyfood 🔥</Typography>
          <Button variant="text" size="small">See All</Button>
        </Box>

        <Box
          sx={{
            padding: 2,
            display: 'flex',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          {filterRestaurants((r) => r.isNew).map((restaurant) => (
            <Paper
              key={index}
              sx={{
                flex: '0 0 auto',
                scrollSnapAlign: 'start',
                width: '200px',
                margin: 1,
                backgroundColor: 'white',
                padding: '10px',
                textAlign: 'center',
                border: '1px solid #ccc',
              }} >
              <RestaurantCard restaurant={restaurant} />
            </Paper>
          ))}
        </Box>
      </Box>

      {/* Promo Section */}
      <Box marginY={2}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="h6">Promos for You! 😍</Typography>
          <Button variant="text" size="small">See All</Button>
        </Box>

        <Box
          sx={{
            padding: 2,
            display: 'flex',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          {filterRestaurants((r) => r.discount > 0).map((restaurant) => (
            <Paper
              key={index}
              sx={{
                flex: '0 0 auto',
                scrollSnapAlign: 'start',
                width: '200px',
                margin: 1,
                backgroundColor: 'white',
                padding: '10px',
                textAlign: 'center',
                border: '1px solid #ccc',
              }} >
              <RestaurantCard restaurant={restaurant} />
            </Paper>
          ))}
        </Box>
      </Box>

      {/* Amala Section */}
      <Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Amala 🔥</Typography>
          <Button variant="text" size="small">See All</Button>
        </Box>

        <Box
          sx={{
            padding: 2,
            display: 'flex',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          {filterRestaurants((r) => r.availableFoods.some((f) => f.name === 'amala')).map((restaurant) => (
            <Paper
              key={index}
              sx={{
                flex: '0 0 auto',
                scrollSnapAlign: 'start',
                width: '200px',
                margin: 1,
                backgroundColor: 'white',
                padding: '10px',
                textAlign: 'center',
                border: '1px solid #ccc',
              }} >
              <RestaurantCard restaurant={restaurant} />
            </Paper>
          ))}
        </Box>
      </Box>

      {/* Free Drinks Section */}
      <Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Free Drinks</Typography>
          <Button variant="text" size="small">See All</Button>
        </Box>

        <Box
          sx={{
            padding: 2,
            display: 'flex',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          {filterRestaurants((r) => r.freeDrinks).map((restaurant) => (
            <Paper
              key={index}
              sx={{
                flex: '0 0 auto',
                scrollSnapAlign: 'start',
                width: '200px',
                margin: 1,
                backgroundColor: 'white',
                padding: '10px',
                textAlign: 'center',
                border: '1px solid #ccc',
              }} >
              <RestaurantCard restaurant={restaurant} />
            </Paper>
          ))}
        </Box>
      </Box>

      {/* Fingers Food Section */}
      <Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Fingers Food 🍕🍩</Typography>
          <Button variant="text" size="small">See All</Button>
        </Box>

        <Box
          sx={{
            padding: 2,
            display: 'flex',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          {filterRestaurants((r) => r.availableFoods.some((f) => f.name === 'shawarma' || f.name === 'grills')).map((restaurant) => (
            <Paper
              key={index}
              sx={{
                flex: '0 0 auto',
                scrollSnapAlign: 'start',
                width: '200px',
                margin: 1,
                backgroundColor: 'white',
                padding: '10px',
                textAlign: 'center',
                border: '1px solid #ccc',
              }} >
              <RestaurantCard restaurant={restaurant} />
            </Paper>
          ))}
        </Box>
      </Box>

      {/* All Restaurants Section */}
      <Box>
        <Typography variant="h6">All Restaurants</Typography>

        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant._id} restaurant={restaurant} />
        ))}
      </Box>
    </Box>);
};

export default RestaurantList;
