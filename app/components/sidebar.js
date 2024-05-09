// components/Sidebar.js
import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Divider,
  Typography,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Lock as LockIcon,
  Person as PersonIcon,
  Logout as LogoutIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';

const Sidebar = ({ user = null }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Menu Icon to open the sidebar */}
      <IconButton edge="start" color="inherit" onClick={toggleDrawer}>
        <MenuIcon />
      </IconButton>

      {/* Sidebar Drawer */}
      <Drawer anchor="left" open={isOpen} onClose={toggleDrawer}>
        <div style={{ width: 250 }}>
          {/* Close Icon */}
          <IconButton onClick={toggleDrawer} style={{ alignSelf: 'flex-end' }}>
            <CloseIcon />
          </IconButton>

          <List>
            {user ? (
              <>
                {/* When signed in */}
                <ListItem>
                  <ListItemIcon>
                    <PersonIcon />
                  </ListItemIcon>
                  <ListItemText primary={user.name} />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <LogoutIcon />
                  </ListItemIcon>
                  <ListItemText primary="Sign Out" />
                </ListItem>
              </>
            ) : (
              <>
                {/* When not signed in */}
                <ListItem button>
                  <ListItemIcon>
                    <LockIcon />
                  </ListItemIcon>
                  <ListItemText primary="Sign In" />
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
            <ListItem>
              <ListItemIcon>
                <AppleIcon />
              </ListItemIcon>
              <ListItemText primary="Apple Store" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AndroidIcon />
              </ListItemIcon>
              <ListItemText primary="Play Store" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </>
  );
};

export default Sidebar;
