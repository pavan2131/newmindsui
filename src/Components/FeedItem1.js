import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const FeedItem1 = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">LinkedIn Profile Card</Typography>
        {/* Your LinkedIn profile content goes here */}
        <Typography variant="body1">Name: John Doe</Typography>
        <Typography variant="body2">Designation: Software Engineer</Typography>
        <Typography variant="body2">Department: Engineering</Typography>
        {/* Add more profile information as needed */}
      </CardContent>
    </Card>
  );
};

export default FeedItem1;
