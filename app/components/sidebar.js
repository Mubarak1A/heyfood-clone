// components/Sidebar.js
import React, { useState } from 'react';
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Divider, Typography, Button } from '@mui/material';
import { Menu as MenuIcon, Lock as LockIcon, Person as PersonIcon, Logout as LogoutIcon, Close as CloseIcon } from '@mui/icons-material';
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';

const Sidebar = ({ handleSignInClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleSignOutClick = () => {
    localStorage.removeItem("currentuser")
    user = None
  }

  return (
    <Box sx={{ padding: '10px' }}>
      {/* Menu Icon to open the sidebar */}
      <IconButton edge="start" color="inherit" onClick={toggleDrawer}>
        <MenuIcon />
      </IconButton>

      {/* Sidebar Drawer */}
      <Drawer anchor="left" open={isOpen} onClose={toggleDrawer}>
        <div style={{ width: 250 }}>
          {/* Close Icon */}
          <IconButton onClick={toggleDrawer} style={{ alignSelf: 'right' }}>
            <CloseIcon />
          </IconButton>

          <List>
            {localStorage.getItem('currentuser') ? (
              <>
                {/* When signed in */}
                <ListItem sx={{ marginBottom: '5px' }}>
                  <ListItemIcon>
                    <PersonIcon />
                  </ListItemIcon>
                  <ListItemText primary={user.name} />
                </ListItem>
                <ListItem button sx={{ marginBottom: '15px' }} onClick={handleSignInClick}>
                  <ListItemIcon>
                    <LogoutIcon />
                  </ListItemIcon>
                  <ListItemText primary="Sign In" />
                </ListItem>
              </>
            ) : (
              <>
                {/* When not signed in */}
                <ListItem button sx={{ marginBottom: '15px' }} onClick={handleSignOutClick}>
                  <ListItemIcon>
                    <LockIcon />
                  </ListItemIcon>
                  <ListItemText primary="Sign In" onClick={handleSignInClick}/>
                </ListItem>
              </>
            )}

            {/* Static links */}
            <ListItem>
              <ListItemText primary="Add your restaurant" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Become a delivery rider" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Go to homepage" />
            </ListItem>

            {/* App logo and store icons (Apple Store, Play Store) */}
            <Divider />
            <Typography variant="h6" style={{ margin: '20px 0' }}>
              Experience the Heyfood mobile app
            </Typography>
            <List sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <ListItem >
                <Button sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColour: 'black' }}>
                  <AppleIcon />
                  <Typography variant="h6">Apple Store</Typography>
                </Button>
              </ListItem>
              <ListItem>
                <Button sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColour: 'black' }}>
                  <AndroidIcon />
                  <Typography variant="h6">Android Store</Typography>
                </Button>
              </ListItem>
            </List>
          </List>
        </div>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
