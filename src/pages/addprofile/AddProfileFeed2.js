import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import EducationCard from '../Profile/EducationCard';
import ExperienceCard from '../Profile/ExperienceCard';
import CenterCard from '../../Components/CenterCard';
import RightCard from '../../Components/RightCard';

import Interest from '../Profile/Interest';
import SkillCard from '../Profile/SkillCard';
const componentMapping = {
  1: <EducationCard />,
  2: <ExperienceCard />,
  3: <SkillCard />,
  4: <Interest />
 
  // Add more mappings as needed
};
const AddProfileFeed2 = () => {
  const quantity = useSelector((state) => state.quantity);
  return (
  
    <>
       {componentMapping[quantity]}
       {/* <EducationCard /> */}
       </>
   
  );
};

export default AddProfileFeed2;
