// components/FoodList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Typography, CircularProgress, Paper } from '@mui/material';

const FoodList = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the list of food items from the backend
    axios
      .get('https://heyfood-clone-backend.onrender.com/getFoods')
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

  return (
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
      {foodItems.map((foodItem, index) => (
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
          }}
        >
          <img
            src={foodItem.tagUrl}
            alt={`foodTag ${index + 1}`}
            style={{ maxWidth: '100%', height: 'auto' }} // Ensures image fits within the swiper item
          />
          <Typography variant="subtitle1">{foodItem.name}</Typography>
        </Paper>
      ))}
    </Box>
  );
};

export default FoodList;
