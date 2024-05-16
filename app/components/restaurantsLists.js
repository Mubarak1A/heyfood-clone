import React from 'react';
import {
  Box,
  Typography,
  Button,
  CircularProgress,
  Paper,
} from '@mui/material';
import RestaurantCard from './restaurantCard';
import { red } from '@mui/material/colors';

const RestaurantList = ({ restaurants, resLoading, sortedRestaurants }) => {
  // Function to filter restaurants based on a condition
  const filterRestaurants = (condition) => restaurants.filter(condition);

  if (resLoading) {
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
        <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
          <Typography variant="h4">{`${sortedRestaurants.length} Stores near you`}</Typography>
          <Typography button variant="h6" color={red} onClick={() => sortedRestaurants = null}>Reset</Typography>
        </Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px', padding: '16px 0' }}>
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
      <Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="h4">New on Heyfood 🔥</Typography>
          <Button variant="text" size="small">See All</Button>
        </Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px', padding: '16px 0' }}>
          {filterRestaurants((r) => r.isNew).map((restaurant, index) => (
            <RestaurantCard key={index} restaurant={restaurant} />
          ))}
        </Box>
      </Box>

      {/* Promo Section */}
      <Box >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="h4">Promos for You! 😍</Typography>
          <Button variant="text" size="small">See All</Button>
        </Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px', padding: '16px 0' }}>
          {filterRestaurants((r) => r.discount > 0).map((restaurant, index) => (
            <RestaurantCard key={index} restaurant={restaurant} />
          ))}
        </Box>
      </Box>

      {/* Amala Section */}
      <Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="h4">Amala 🔥</Typography>
          <Button variant="text" size="small">See All</Button>
        </Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px', padding: '16px 0' }}>
          {filterRestaurants((r) => r.availableFoods.some((f) => f.name === 'amala')).map((restaurant, index) => (
            <RestaurantCard key={index} restaurant={restaurant} />
          ))}
        </Box>
      </Box>

      {/* Free Drinks Section */}
      <Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="h4">Free Drinks</Typography>
          <Button variant="text" size="small">See All</Button>
        </Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px', padding: '16px 0' }}>
          {filterRestaurants((r) => r.freeDrinks).map((restaurant, index) => (
            <RestaurantCard key={index} restaurant={restaurant} />
          ))}
        </Box>
      </Box>

      {/* Fingers Food Section */}
      <Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="h4">Fingers Food 🍕🍩</Typography>
          <Button variant="text" size="small">See All</Button>
        </Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px', padding: '16px 0' }}>
          {filterRestaurants((r) => r.availableFoods.some((f) => f.name === 'shawarma' || f.name === 'grills')).map((restaurant, index) => (
            <RestaurantCard key={index} restaurant={restaurant} />
          ))}
        </Box>
      </Box>

      {/* All Restaurants Section */}
      <Box>
        <Typography variant="h4">All Restaurants</Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px', padding: '16px 0' }}>
          {restaurants.map((restaurant, index) => (
            <RestaurantCard key={index} restaurant={restaurant} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default RestaurantList;
