// components/RestaurantCard.js
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { Star as StarIcon } from '@mui/icons-material';

const RestaurantCard = ({ restaurant }) => {
  const { imgUrl, name, ratings, numberOfRatings } = restaurant;

  return (
    <Box sx={{ width: '100%', padding: 1, borderRadius: '8px', border: 'none' }}>
      {/* Restaurant image */}
      <img
        component="img"
        src={restaurant.imgUrl}
        alt={name}
        width="100%"
        height="40%"
        sx={{ borderRadius: '8px', margin: '0' }}
      />

      {/* Restaurant name */}
      <Box>
        <Typography variant="h6">{name}</Typography>

        {/* Rating with star icon */}
        <Box display="flex" alignItems="center" gap={1}>
          <StarIcon color="primary" />
          <Typography variant="subtitle2">
            {ratings} ({numberOfRatings} Ratings)
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default RestaurantCard;
