import React from 'react';
import MainMenu from '../Components/MainMenu';
import '../styles/Layout.css';
import ProfileFeed from './Profile/ProfileFeed';


const Profile = () => {
  return (
    <div className="homeContainer">
      <div className="mainMenuContainer">
        <MainMenu />
      </div>
      <div className="feedContainer">
        <ProfileFeed />
        
      </div>
    </div>
  );
};

export default Profile;

