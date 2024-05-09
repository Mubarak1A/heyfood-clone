// components/Category.js
import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';

const Category = () => {
  const [activeCategory, setActiveCategory] = useState('Restaurants'); // Default to "Restaurants"

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <Box display="flex" justifyContent="center" gap={2} padding={2}>
      <Button
        variant="contained"
        color={activeCategory === 'Restaurants' ? 'secondary' : 'primary'}
        onClick={() => handleCategoryClick('Restaurants')}
      >
        <Typography variant="subtitle1" color="inherit">
          Restaurants
        </Typography>
      </Button>

      <Button
        variant="contained"
        color={activeCategory === 'Groceries' ? 'secondary' : 'primary'}
        onClick={() => handleCategoryClick('Groceries')}
      >
        <Typography variant="subtitle1" color="inherit">
          Groceries
        </Typography>
      </Button>

      <IconButton
        onClick={onMenuClick}
        sx={{ display: { xs: 'block', md: 'none' }, marginLeft: 'auto' }}
      >
        <ArrowDropDownIcon />
      </IconButton>
    </Box>
  );
};

export default Category;
