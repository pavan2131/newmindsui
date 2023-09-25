import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import EditIcon from '@material-ui/icons/Edit';
import PublicIcon from '@material-ui/icons/Public';

const useStyles = makeStyles((theme) => ({
  rightCardContainer: {
    flex: '1', // Let the container take up the available space
    maxWidth: '300px', // Set a maximum width for the card
    marginLeft: theme.spacing(2), // Add a margin on the left side
    padding: theme.spacing(2),
    backgroundColor: '#FFFFFF',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#000',
  },
  content: {
    fontSize: '14px',
    color: '#666',
    paddingTop: theme.spacing(1),
  },
  editIcon: {
    fill: '#0073b1',
    width: '24px',
    height: '24px',
    marginLeft: theme.spacing(1),
  },
}));

const RightCard = () => {
  const classes = useStyles();

  return (
    <div className={classes.rightCardContainer}>
      <List>
        <ListItem>
          <ListItemText
            primary="Profile language"
            secondary="English"
            classes={{ primary: classes.title, secondary: classes.content }}
          />
          <ListItemIcon>
            <a href="/in/mallikarjunragi/edit/secondary-language/">
              <EditIcon className={classes.editIcon} />
            </a>
          </ListItemIcon>
        </ListItem>
        <hr className="artdeco-divider mt4 mb4" />
        <ListItem>
          <ListItemText
            primary="Public profile & URL"
            secondary="www.linkedin.com/in/mallikarjunragi"
            classes={{ primary: classes.title, secondary: classes.content }}
          />
          <ListItemIcon>
            <a
              tabIndex="0"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
            >
              <PublicIcon className={classes.editIcon} />
            </a>
          </ListItemIcon>
        </ListItem>
      </List>
    </div>
  );
};

export default RightCard;