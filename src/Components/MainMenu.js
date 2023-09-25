import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
  Badge,
  Avatar,
  Box,
} from '@mui/material';
import { Search as SearchIcon, Mail as MailIcon, Notifications as NotificationsIcon } from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import '../styles/Layout.css';

const MainMenu = () => {
  // Placeholder image URLs - Replace these with actual image URLs
  const logoUrl = 'https://via.placeholder.com/150'; // Replace with LinkedIn logo URL
  const avatarUrl = 'https://via.placeholder.com/40'; // Replace with actual avatar URL

  return (
    // Change the background color value to '#ffffff' (white)
    <AppBar position="static" className="appBar" style={{ backgroundColor: '#ffffff' }}>

      <Toolbar className="mainMenuToolbar">
        {/* LinkedIn Logo */}
        <div className="navbar-logo">
          <img src={logoUrl} alt="LinkedIn Logo" height="40" />
          <Typography variant="h6" component="div">
          </Typography>
        </div>

        {/* Search Bar */}
        <Box className="searchBox">
          <IconButton size="large" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase placeholder="Search" sx={{ ml: 1, flex: 1 }} />
        </Box>

        {/* Navigation Links */}
        <Box className="navbar-links">
          {/* ... Navigation link items ... */}
          <div className="navLinkItem">
            <HomeIcon style={{ color: '#666666' }} /> {/* Change the icon color */}
            <Typography variant="body2" component="span" sx={{ color: '#666666' }}>
              Home
            </Typography>
          </div>          
          <div className="navLinkItem">
            <PeopleIcon style={{ color: '#666666' }} /> {/* Change the icon color */}
            <Typography variant="body2" component="span" sx={{ color: '#666666' }}>
              My Network
            </Typography>
          </div>
          <div className="navLinkItem">
            <WorkIcon style={{ color: '#666666' }} /> {/* Change the icon color */}
            <Typography variant="body2" component="span" sx={{ color: '#666666' }}>
              Jobs
            </Typography>
          </div>
          <div className="navLinkItem">
            <ChatIcon style={{ color: '#666666' }} /> {/* Change the icon color */}
            <Typography variant="body2" component="span" sx={{ color: '#666666' }}>
              Messaging
            </Typography>
          </div>
          <div className="navLinkItem">
            <Badge badgeContent={8} color="secondary">
              <NotificationsOutlinedIcon style={{ color: '#666666' }} /> {/* Change the icon color */}
            </Badge>
            <Typography variant="body2" component="span" sx={{ color: '#666666' }}>
              Notifications
            </Typography>
          </div>
        </Box>

        {/* Separator between Navigation Links and Profile Menu */}
        <div className="separator" />

        {/* User Profile Menu */}
        <Box className="userProfileMenu">          
          <Avatar alt="User Name" src={avatarUrl} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default MainMenu;
