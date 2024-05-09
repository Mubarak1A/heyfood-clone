"use client";
import React from 'react';
import Navbar from './components/navbar';
import Category from './components/categories';
//import FoodList from './components/foodlists';
import BannerCarousel from './components/bannerCarousel';
import SortingSidebar from './components/sorting';
import RestaurantList from './components/restaurantsLists';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

export default function Home() {

  const bannerUrls = [
    'https://res.cloudinary.com/dgny0gcfm/image/upload/v1715129071/heyfood/banner4_jnqilv.jpg',
    'https://res.cloudinary.com/dgny0gcfm/image/upload/v1715129071/heyfood/banner5_hj84pf.jpg',
    'https://res.cloudinary.com/dgny0gcfm/image/upload/v1715129071/heyfood/banner6_knpb9c.jpg',
    'https://res.cloudinary.com/dgny0gcfm/image/upload/v1715129071/heyfood/banner7_m1xhgc.jpg',
    'https://res.cloudinary.com/dgny0gcfm/image/upload/v1715129071/heyfood/banner3_ljktzn.jpg',
    'https://res.cloudinary.com/dgny0gcfm/image/upload/v1715129071/heyfood/banner2_id02hc.jpg',
    'https://res.cloudinary.com/dgny0gcfm/image/upload/v1715129070/heyfood/banner1_yydgnf.jpg'
  ]

  return (
    <>
      <Navbar />
      <Category />
     
      <BannerCarousel bannerUrls={bannerUrls} />
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <SortingSidebar />
          </Grid>
          <Grid item xs={9}>
            <RestaurantList />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
