import React from 'react';
import MainMenu from '../../Components/MainMenu';
import '../../styles/Layout.css';
import AddProfileFeed from './AddProfileFeed';


const AddProfileSection = () => {
  return (
    <div className="homeContainer">
      <div className="mainMenuContainer">
        <MainMenu />
      </div>
      <div className="feedContainer">
        <AddProfileFeed />
        
      </div>
    </div>
  );
};

export default AddProfileSection;

