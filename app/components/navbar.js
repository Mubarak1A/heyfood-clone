import React, { useState } from "react";
import { AppBar, Toolbar, Typography, IconButton, Badge, InputBase, Box, Button } from "@mui/material";
import { Menu as MenuIcon, LocationOn as LocationIcon, Search as SearchIcon, ShoppingCart as ShoppingCartIcon, Image } from "@mui/icons-material";
import { alpha, styled } from "@mui/material/styles";
import Sidebar from "./sidebar";
import SearchOverlay from './searchOverlay';
import SignInDialog from './signin';
import SignUpDialog from './signup';

const cartItem = 0;

const Navbar = ({ cartCount = 0, foodItems, isSignIn }) => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const handleSignInClick = () => {
    setIsSignInOpen(true);
  };

  const handleSignInClose = () => {
    setIsSignInOpen(false);
  };

  const handleSignUpClick = () => {
    setIsSignUpOpen(true);
  };

  const handleSignUpClose = () => {
    setIsSignUpOpen(false);
  };

  const switchToSignUp = () => {
    handleSignInClose(); // Close the sign-in dialog
    handleSignUpClick(); // Open the sign-up dialog
  };

  const switchToSignIn = () => {
    handleSignUpClose(); // Close the sign-up dialog
    handleSignInClick(); // Open the sign-in dialog
  };

  const handleSearchClick = () => {
    setIsOverlayOpen(true); // Open the search overlay
  };

  const handleOverlayClose = () => {
    setIsOverlayOpen(false); // Close the overlay
  };

  const SearchWrapper = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#f5f5f5',
    '&:hover': {
      backgroundColor: '#e0e0e0',
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));

  return (
    <Box sx={{ flexFlow: 1 }}>
      <SignInDialog
        open={isSignInOpen}
        onClose={handleSignInClose}
        onSwitchToSignUp={switchToSignUp}
      />

      <SignUpDialog
        open={isSignUpOpen}
        onClose={handleSignUpClose}
        onSwitchToSignIn={switchToSignIn}
      />

      <AppBar position="static">
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            {/* Sidebar and Logo */}
            <Box sx={{ flex: '1 1 auto', display: 'flex', alignItems: 'center' }}>
              <Sidebar handleSignInClick={handleSignInClick} handleSignInClose={handleSignInClose}/>
              <img
                src={'https://res.cloudinary.com/dgny0gcfm/image/upload/v1715128417/heyfood/hey_logo_lctvjf.jpg'}
                alt={'LOGO'}
                sx={{ display: { xs: 'block', sm: 'none' } }}
              />
              <div sx={{ display: { xs: 'none', md: 'flex' }, marginLeft: 'auto' }}>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                  <LocationIcon />
                  <Typography variant="body1">Set Location</Typography>
                </IconButton>
              </div>
            </Box>

            {/* Search */}
            <Box sx={{ flex: '1 1 auto', width: '25%' }}>
              <SearchWrapper onClick={handleSearchClick}>
                <InputBase
                  placeholder="Search restaurants or food"
                  inputProps={{ 'aria-label': 'search' }}
                  startAdornment={<SearchIcon />}
                />
              </SearchWrapper>
            </Box>

            {/* Sign In and Cart */}
            <Box sx={{ flex: '1 1 auto', display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
              {!(localStorage.getItem('currentuser')) && (
                <Button onClick={handleSignInClick}>
                  <Typography variant="h6" sx={{ color: 'black'}}>SIGNIN</Typography>
                </Button>
              )}
              <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
                <Badge badgeContent={cartCount} color="error">
                  <ShoppingCartIcon />
                </Badge>
                <Typography variant="h6" noWrap sx={{ ml: 1 }}>
                  {`Cart . ${cartItem.length || 0}`}
                </Typography>
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      {isOverlayOpen && (
        <SearchOverlay foodItems={foodItems} onClose={handleOverlayClose} />
      )}
    </Box>
  )
};

export default Navbar;
