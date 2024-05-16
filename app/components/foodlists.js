import React from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';

const FoodList = ({ foodItems, foodLoading }) => {
  if (foodLoading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh'
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
        touchAction: 'pan-y',
        '-webkit-overflow-scrolling': 'touch',
      }}
    >
      {foodItems.map((foodItem, index) => (
        <Box
          key={index}
          sx={{
            flex: '0 0 auto',
            scrollSnapAlign: 'start',
            width: '200px',
            margin: 1,
            backgroundColor: 'white',
            textAlign: 'center',
            touchAction: 'manipulation', // Ensure touch events are not blocked
            overflowY: 'hidden', // Prevent vertical scrolling
            borderRadius: '8px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Light shadow
          }}
        >
          <img
            src={foodItem.tagUrl}
            alt={`foodTag ${index + 1}`}
            style={{ maxWidth: '100%', height: 'auto' }}
          />
          <Typography variant="subtitle1">{foodItem.name}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default FoodList;
