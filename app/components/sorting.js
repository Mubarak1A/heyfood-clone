import React, { useState } from 'react';
import { Box, Typography, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { Sort as SortIcon } from '@mui/icons-material';

const SortingComponent = ({ numberOfStores }) => {
  const [sort, setSort] = useState(null);

  return (
    <Box padding={2}>
      <Typography variant="h6">All Stores</Typography>
      <Typography variant="subtitle2" color="text.secondary">
        {`${numberOfStores} Stores`}
      </Typography>

      <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <SortIcon /> Sort
      </Typography>

      <RadioGroup aria-label="sort" name="sort">
        <FormControlLabel value="most-popular" control={<Radio />} label="Most Popular" onClick={ (e) => setSort(e.target.value)} />
        <FormControlLabel value="highest-rated" control={<Radio />} label="Highest Rated" onClick={ (e) => setSort(e.target.value)} />
        <FormControlLabel value="newest" control={<Radio />} label="Newest" onClick={ (e) => setSort(e.target.value)} />
        <FormControlLabel value="most-rated" control={<Radio />} label="Most Rated" onClick={ (e) => setSort(e.target.value)} />
      </RadioGroup>
    </Box>
  );
};

export default SortingComponent;
