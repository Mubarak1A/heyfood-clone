import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

const SearchOverlay = ({ foodItem, onClose }) => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Slightly transparent background
        zIndex: 1300, // High z-index to appear above other elements
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        paddingTop: 8, // To avoid covering the navbar
      }}
    >
      {/* Close button */}
      <IconButton
        sx={{
          position: 'absolute',
          top: 10,
          right: 10,
          color: 'white',
        }}
        onClick={onClose}
      >
        <CloseIcon />
      </IconButton>

      {/* Content area for available foods */}
      <Box
        sx={{
          backgroundColor: 'white',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          overflowY: 'auto', // Enable vertical scrolling
        }}
      >
        <Typography variant="h5" color="white" gutterBottom>
          Available Foods
        </Typography>
        {foodItem.map((food, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: 'white',
              padding: 2,
              borderRadius: '8px',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Light shadow
              cursor: 'pointer',
            }}
          >
            <img
              src={foodItem.tagUrl}
              alt={`foodTag ${index + 1}`}
            />
            <Typography variant="subtitle1">{foodItem.name}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default SearchOverlay;
