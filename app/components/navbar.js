import React, { useState } from "react";
import {
  AppBar, Toolbar, Typography, IconButton, Badge, InputBase, Box,
  Button
} from "@mui/material";
import { Menu as MenuIcon, LocationOn as LocationIcon, Search as SearchIcon, ShoppingCart as ShoppingCartIcon, Image } from "@mui/icons-material";
import { alpha, styled } from "@mui/material/styles";

// Import other custom components
import Sidebar from "./sidebar";
import SearchOverlay from './searchOverlay';
import SignInDialog from './signin';
import SignUpDialog from './signup';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Navbar = ({ cartCount = 0 }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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

  const foods = []

  const handleSearchClick = () => {
    setIsOverlayOpen(true); // Open the search overlay
  };

  const handleOverlayClose = () => {
    setIsOverlayOpen(false); // Close the overlay
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const Search = styled('div')(({ theme }) => ({
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

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from typography
    paddingLeft: `calc(1em + ${theme.typography.fontSize}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  }));

  const StyledTypography = styled(Typography)(({ theme }) => ({
    flexGrow: 1,
    textAlign: 'right',
  }))

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
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <Sidebar />
          <img
            src={'https://res.cloudinary.com/dgny0gcfm/image/upload/v1715128417/heyfood/hey_logo_lctvjf.jpg'}
            alt={'LOGO'}
            sx={{ display: { xs: 'block', sm: 'none' } }}
          />
          <div sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Typography variant="body1">Set Location</Typography>
            </IconButton>
          </div>
          <div sx={{ flexGrow: 1 }} />
          <Search onClick={handleSearchClick}>
            <StyledInputBase
              placeholder="Search restaurants or food"
              inputProps={{ 'aria-label': 'search' }}
              startAdornment={<SearchIcon />}
            />
          </Search>
          <Button onClick={handleSignInClick}>
            <Typography variant="h6">SIGNIN</Typography>
          </Button>
          <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
            <Badge badgeContent={cartCount} color="error">
              <ShoppingCartIcon />
            </Badge>
            <Typography variant="h6" noWrap component="div" sx={{ display: { xs: 'block', sm: 'none' } }}>
              {`Cart . ${cartItem.length || 0}`}
            </Typography>
          </IconButton>
        </Toolbar>
      </AppBar>

      {isOverlayOpen && (
        <SearchOverlay foods={foods} onClose={handleOverlayClose} />
      )}
    </Box>
  )
};

export default Navbar;