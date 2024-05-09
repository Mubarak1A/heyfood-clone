// components/RestaurantCard.js
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { Star as StarIcon } from '@mui/icons-material';

const RestaurantCard = ({ restaurant }) => {
  const { imgUrl, name, ratings, numberOfRatings } = restaurant;

  return (
    <Card sx={{ width: '100%', padding: 1, borderRadius: '8px' }}>
      {/* Restaurant image */}
      <CardMedia
        component="img"
        src={imgUrl}
        alt={name}
        height="140"
        sx={{ borderRadius: '8px' }}
      />

      {/* Restaurant name */}
      <CardContent>
        <Typography variant="h6">{name}</Typography>

        {/* Rating with star icon */}
        <Box display="flex" alignItems="center" gap={1}>
          <StarIcon color="primary" />
          <Typography variant="subtitle2">
            {ratings} ({numberOfRatings} Ratings)
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default RestaurantCard;
