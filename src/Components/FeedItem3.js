import React from 'react';
import { styled } from '@mui/material/styles';
import { Card, CardContent, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const StyledCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const StyledListItemText = styled(ListItemText)({
  "& .MuiTypography-primary": {
    fontWeight: 'bold',
  },
  "& .MuiListItemText-secondary": {
    paddingTop: '4px',
  },
});

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  marginBottom: theme.spacing(2),
}));

const FeedItem3 = () => {
  return (
    <StyledCard>
      <CardContent>
        <StyledTypography variant="h6">LinkedIn News</StyledTypography>
      </CardContent>
      <List disablePadding>
        <ListItem>
          <StyledListItemText primary="Driving social impact at scale" secondary="Top news • 8,678 readers" />
        </ListItem>
        <ListItem>
          <StyledListItemText primary="How to build design skills" secondary="6h ago • 239 readers" />
        </ListItem>
        <ListItem>
          <StyledListItemText primary="MNCs on tech hiring spree" secondary="6h ago • 3,337 readers" />
        </ListItem>
        <ListItem>
          <StyledListItemText primary="Global firms eye India entry" secondary="5h ago • 329 readers" />
        </ListItem>
        <ListItem>
          <StyledListItemText primary="Succeeding as a social entrepreneur" secondary="6h ago • 382 readers" />
        </ListItem>        
      </List>
      <Button endIcon={<ExpandMoreIcon />} aria-label="Show more" fullWidth>
        Show more
      </Button>
    </StyledCard>
  );
};

export default FeedItem3;

