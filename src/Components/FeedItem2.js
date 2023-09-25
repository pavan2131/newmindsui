import React from 'react';
import { Card, CardHeader, Avatar, Typography, CardContent, CardMedia, IconButton } from '@mui/material';
import { Favorite as FavoriteIcon, Comment as CommentIcon, Repeat as RepeatIcon, Send as SendIcon } from '@mui/icons-material';


const FeedItem2 = () => {
  // Placeholder image URL and user info
  const imageUrl = 'https://mui.com/static/images/cards/paella.jpg'; // Replace with the actual image URL
  const user = {
    name: 'Jane Doe',
    designation: 'Software Developer',
    department: 'Engineering',
    postedTime: '30m ago',
    title: 'Another Post Title',
    details: 'Details of another post go here...',
  };

  return (
    <>
    <Card style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
      <CardContent>
        {/* Card Header */}
        <CardHeader
          avatar={<Avatar alt={user.name} src={imageUrl} />}
          title={user.name}
          subheader={`${user.designation}, ${user.department}`}
        />

        {/* Card Media (Optional) */}
        <CardMedia component="img" image={imageUrl} alt="Post Image" />

        {/* Card Content */}
        <Typography variant="body2" color="textSecondary" gutterBottom>
          {user.postedTime}
        </Typography>

        {/* Post Title */}
        <Typography variant="h6" component="div">
          {user.title}
        </Typography>

        {/* Post Details */}
        <Typography variant="body2" color="textSecondary" component="div">
          {user.details}
        </Typography>
      </CardContent>

      {/* Card Actions (Like, Comment, Repost, Send) */}
      <div className="cardActions">
        <IconButton aria-label="like">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="comment">
          <CommentIcon />
        </IconButton>
        <IconButton aria-label="repost">
          <RepeatIcon />
        </IconButton>
        <IconButton aria-label="send">
          <SendIcon />
        </IconButton>
      </div>
    </Card>
    
    </>
  );
};

export default FeedItem2;
