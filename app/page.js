"use client";
import React from 'react';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Category from './components/categories';
import FoodList from './components/foodlists';
import BannerCarousel from './components/bannerCarousel';
import SortingSidebar from './components/sorting';
import RestaurantList from './components/restaurantsLists';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

export default function Home() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Category />
      <FoodList />
      <BannerCarousel />
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
