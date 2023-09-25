import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MainMenu from '../Components/MainMenu';
import CenterCard from '../Components/CenterCard';
import RightCard from '../Components/RightCard';
import ExperienceCard from './Profile/ExperienceCard';

import EducationCard from './Profile/EducationCard';


const useStyles = makeStyles((theme) => ({
  profileContainer: {
    display: 'flex',
    justifyContent: 'center',
    maxWidth: 1200,
    margin: '0 auto',
    flexGrow: 1,
    marginTop: theme.spacing(2), // Add margin at the top
    marginBottom: theme.spacing(2), // Add margin at the bottom
  },
  cardContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
    flexWrap: 'wrap',
    maxWidth: 1200,
    width: '100%',
  },
}));

const ProfilePage = () => {
  const classes = useStyles();

  return (
    <div>
      <MainMenu />
      <div className={classes.profileContainer}>
        <div className={classes.cardContainer}>
          <CenterCard />
          
          <RightCard />
          
          <EducationCard />
          
      
          
        </div>
        
      </div>
      
    </div>
  );
};

export default ProfilePage;