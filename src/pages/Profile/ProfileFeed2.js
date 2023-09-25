import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import RightCard from '../../Components/RightCard';
import PeopleCard from './PeopleCard';

const ProfileFeed2 = () => {
  return (
  <>
    <div className='Card'>
       <RightCard />
      </div>
      <div className='Card'>
      <PeopleCard />
     </div>
     </>
  );
};

export default ProfileFeed2;
