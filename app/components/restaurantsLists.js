// components/RestaurantList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Typography, Button } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import RestaurantCard from './RestaurantCard';

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios.get('/api/restaurants')
      .then((response) => {
        setRestaurants(response.data);
      })
      .catch((error) => {
        console.error('Error fetching restaurants:', error);
      });
  }, []);

  // Function to filter restaurants based on a condition
  const filterRestaurants = (condition) => {
    return restaurants.filter(condition);
  };

  return (
    <Box padding={2}>
      {/* Newest Section */}
      <Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">New on Heyfood 🔥</Typography>
          <Button variant="text" size="small">See All</Button>
        </Box>

        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          modules={[Navigation, Autoplay]}
        >
          {filterRestaurants((r) => r.isNew).map((restaurant) => (
            <SwiperSlide key={restaurant._id}>
              <RestaurantCard restaurant={restaurant} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {/* Promo Section */}
      <Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Promos 4 You!😍</Typography>
          <Button variant="text" size="small">See All</Button>
        </Box>

        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          modules={[Navigation, Autoplay]}
        >
          {filterRestaurants((r) => r.discount > 0).map((restaurant) => (
            <SwiperSlide key={restaurant._id}>
              <RestaurantCard restaurant={restaurant} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {/* Amala Section */}
      <Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Amala 🔥</Typography>
          <Button variant="text" size="small">See All</Button>
        </Box>

        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          modules={[Navigation, Autoplay]}
        >
          {filterRestaurants((r) => r.availableFoods.some((f) => f.name === 'amala')).map((restaurant) => (
            <SwiperSlide key={restaurant._id}>
              <RestaurantCard restaurant={restaurant} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {/* Free Drinks Section */}
      <Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Free Drinks</Typography>
          <Button variant="text" size="small">See All</Button>
        </Box>

        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          modules={[Navigation, Autoplay]}
        >
          {filterRestaurants((r) => r.freeDrinks).map((restaurant) => (
            <SwiperSlide key={restaurant._id}>
              <RestaurantCard restaurant={restaurant} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {/* Fingers Food Section */}
      <Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Fingers Food 🍕🍩</Typography>
          <Button variant="text" size="small">See All</Button>
        </Box>

        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          modules={[Navigation, Autoplay]}
        >
          {filterRestaurants((r) => r.availableFoods.some((f) => f.name === 'shawarma' || f.name === 'grills')).map((restaurant) => (
            <SwiperSlide key={restaurant._id}>
              <RestaurantCard restaurant={restaurant} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {/* All Restaurants Section */}
      <Box>
        <Typography variant="h6">All Restaurants</Typography>

        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant._id} restaurant={restaurant} />
        ))}
      </Box>
    </Box>
  );
};

export default RestaurantList;
