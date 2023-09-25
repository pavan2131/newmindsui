import React from 'react';
import MainMenu from '../Components/MainMenu';
import Feed from '../Components/Feed';
import '../styles/Layout.css';

const HomePage = () => {
  return (
    <div className="homeContainer">
      <div className="mainMenuContainer">
        <MainMenu />
      </div>
      <div className="feedContainer">
        <Feed />
      </div>
    </div>
  );
};

export default HomePage;

