// components/Navbar.js
import { useState } from 'react';
import Sidebar from './Sidebar';
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
  Badge,
} from "@mui/material";
import {
  Menu as MenuIcon,
  LocationOn as LocationIcon,
  Search as SearchIcon,
  ShoppingCart as ShoppingCartIcon,
} from "@mui/icons-material";
import { alpha, styled } from "@mui/material/styles";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Navbar = ({ cartCount = 0 }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Burger Menu Icon */}
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleSidebar}>
          <Sidebar />
        </IconButton>

        {/* Website Logo (visible only on large screens) */}
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, display: { xs: "none", md: "block" } }}
        >
          Food Finder
        </Typography>

        {/* Location Icon with "Set Location" text */}
        <IconButton color="inherit">
          <LocationIcon />
        </IconButton>
        <Typography variant="subtitle1" sx={{ flexGrow: 0 }}>
          Set Location
        </Typography>

        {/* Search Box */}
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search..."
            inputProps={{ "aria-label": "search" }}
          />
        </Search>

        {/* Sign-In Button (visible only on large screens) */}
        <Typography
          variant="subtitle1"
          sx={{ display: { xs: "none", md: "block" } }}
        >
          SIGN IN
        </Typography>

        {/* Cart Icon with Badge (visible only on large screens) */}
        <IconButton
          color="inherit"
          sx={{ display: { xs: "none", md: "block" } }}
        >
          <Badge badgeContent={cartCount} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
