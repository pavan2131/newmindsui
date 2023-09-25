import React from 'react';
import EducationCard from './EducationCard';
import "../../styles/Layout.css"

import ExperienceCard from './ExperienceCard';
import CenterCard from '../../Components/CenterCard';
import Interest from './Interest';

import AboutCard from './AboutCard';
import License from './License';
import Contact from './Contact';
import Publication from './Publication';
import ProjectsCard from './ProjectsCard';
import CertificationsCard from './CertificationsCard';
import InternshipCard from './InternshipCard';
import SkillCard from './SkillCard';
const ProfileFeed1 = () => {
  return (
    <>
      <div className='Card'>
        {/* <ProfileCard /> */}
        <CenterCard />
      </div>
      <div className='Card'>
        <AboutCard />
      </div>
      <div className='Card'>
        <EducationCard />
      </div>
     
      <div className='Card'>
      <SkillCard />
      </div>
      <div className='Card'>
      <ExperienceCard />
      </div>
      <div className='Card'>
     <Interest />
      </div>
      <div className='Card'>
     <License />
      </div>
      <div className='Card'>
      <Contact />
      </div>
      <div className='Card'>
      <Publication />
      </div>
      <div className='Card'>
     <ProjectsCard />
      </div>
      <div className='Card'>
     <CertificationsCard />
      </div>
      <div className='Card'>
     <InternshipCard />
      </div>
      
    </>
  );
};

export default ProfileFeed1;
