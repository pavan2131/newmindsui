import React from 'react';
import { Card, CardContent, Typography, Box, createTheme, ThemeProvider, Button } from '@mui/material';
import '../styles/CenterCard.css'; // Import the CSS file
import { Link } from 'react-router-dom';
const theme = createTheme();
const addProfilePageURL = '/add-profile-section';
const CenterCard = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="profileContainer">
        <div className="centerCard">
          <Card>
           {/* Banner Image Section */}
          <Box
            style={{
              backgroundImage: `url('https://static.licdn.com/sc/h/55k1z8997gh8dwtihm11aajyq')`,
            }}
            className="banner-image"
          ></Box>

            {/* Profile Photo */}
            <Box className="profile-photo">
              <img
                src="https://media.licdn.com/dms/image/C4E03AQFQQ0Yo2s8uxg/profile-displayphoto-shrink_400_400/0/1620529937980?e=1695254400&amp;v=beta&amp;t=Bc15cry0_LP8iwtRI5y4x53iZZkzVTwVQMDeVwl568I"
                alt="Mallikarjun Ragi"
              />
            </Box>

            {/* User Data */}

            <CardContent style={{ marginTop: '30px', marginBottom: '30px' }}>
              <Typography variant="h5" align="left" gutterBottom>
                Mallikarjun Ragi
              </Typography>
              <Typography variant="subtitle1" align="left" gutterBottom>
                Founder & CEO at Renewin Technologies Pvt. Ltd.
              </Typography>
              <Typography variant="body2" align="left" color="textSecondary">
                Bengaluru, Karnataka, India
              </Typography>
            </CardContent>

            {/* Buttons */}

            <Box display="flex" justifyContent="flex-start" mt={2} mb={2} ml={2}>
              <Button variant="contained" color="primary" className="button">
                Open to
              </Button>
              <Link to={addProfilePageURL} className="button-link">
              <Button variant="outlined" color="primary" className="button">
                Add Profile Section

              </Button>
              </Link>
              <Button variant="outlined" className="button">
                More
              </Button>
            </Box>



          </Card>
        </div>
        {/* If needed, add the right card content here */}
      </div>
    </ThemeProvider>
  );
};

export default CenterCard;
