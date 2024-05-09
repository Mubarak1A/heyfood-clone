// components/FoodList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Typography, CircularProgress } from '@mui/material';
import { Swiper, SwiperSlide } from 'react-swipeable';
import { styled } from '@mui/material/styles';

const FoodList = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the list of food items from the backend
    axios.get('/api/food')
      .then((response) => {
        setFoodItems(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching food items:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Box padding={2}>
      <Typography variant="h6">Available Foods</Typography>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        grabCursor
      >
        {foodItems.map((item) => (
          <SwiperSlide key={item._id}>
            <Box
              sx={{
                padding: 2,
                border: '1px solid #ccc',
                borderRadius: '8px',
                textAlign: 'center',
              }}
            >
              <img
                src={item.tagUrl}
                alt={item.name}
                style={{ width: '100%', height: 'auto' }}
              />
              <Typography variant="subtitle1">{item.name}</Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default FoodList;
