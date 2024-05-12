import React, { useRef } from 'react';
import { Paper, IconButton, Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const BannerCarousel = ({ bannerUrls }) => {
  const swiperRef = useRef(null);

  const scrollLeft = () => {
    if (swiperRef.current) {
      swiperRef.current.scrollBy({
        left: -200, // Adjust scroll distance for left navigation
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (swiperRef.current) {
      swiperRef.current.scrollBy({
        left: 200, // Adjust scroll distance for right navigation
        behavior: 'smooth',
      });
    }
  };

  return (
    <Box sx={{ position: 'relative' }}>
      {/* Left Navigation Button */}
      <IconButton
        sx={{
          position: 'absolute',
          top: '50%',
          left: 1,
          transform: 'translateY(-50%)',
          zIndex: 100,
        }}
        onClick={scrollLeft}
      >
        <ArrowBackIcon />
      </IconButton>

      {/* Swiper Container */}
      <Box
        ref={swiperRef}
        sx={{
          display: 'flex',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          '&::-webkit-scrollbar': {
            display: 'none', // Hide scrollbar
          },
        }}
      >
        {/* Swiper Items */}
        {bannerUrls.map((bannerUrl, index) => (
          <Paper
            key={index}
            sx={{
              flex: '0 0 auto',
              scrollSnapAlign: 'start',
              width: '30%', // Adjust to show multiple slides
              minWidth: '200px', // Minimum width for readability
              margin: 1, // Spacing between slides
              backgroundColor: 'white',
              padding: 2,
              textAlign: 'center',
              borderRadius: '8px',
            }}
          >
            <img
              src={bannerUrl}
              alt={`Banner ${index + 1}`}
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </Paper>
        ))}
      </Box>

      {/* Right Navigation Button */}
      <IconButton
        sx={{
          position: 'absolute',
          top: '50%',
          right: 1,
          transform: 'translateY(-50%)',
          zIndex: 100,
        }}
        onClick={scrollRight}
      >
        <ArrowForwardIcon />
      </IconButton>
    </Box>
  );
};

export default BannerCarousel;
