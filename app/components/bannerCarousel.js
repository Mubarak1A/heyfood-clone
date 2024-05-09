import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules'; // Swiper modules
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'; 


const BannerCarousel = ({ bannerUrls }) => {
  return (
    <Swiper
      modules={[Navigation, Autoplay, Pagination]} // Enable desired modules
      spaceBetween={30} // Spacing between slides
      autoplay={{ delay: 5000 }} // Autoplay delay in milliseconds
      navigation // Enable navigation arrows
      pagination={{ clickable: true }} // Enable clickable pagination dots
    >
      {bannerUrls.map((url, index) => (
        <SwiperSlide key={index}>
          <img
            src={url}
            alt={`Banner ${index + 1}`}
            style={{
              width: '20%',
              height: 'auto',
              borderRadius: '8px',
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BannerCarousel;
