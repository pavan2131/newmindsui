import React from 'react';
// import '../../styles/ProfileFeed.css'
import '../../styles/Layout.css';
import ProfileFeed1 from './ProfileFeed1';
import ProfileFeed2 from './ProfileFeed2';


const ProfileFeed = () => {
  return (
    <div className="feedContainer">
    
      <div className="ProfileFeed  ProfileFeed1">
       <ProfileFeed1 />
      </div>
      <div className="ProfileFeed  ProfileFeed2">
      <ProfileFeed2 />
      </div>
      
    </div>
  );
};

export default ProfileFeed;
