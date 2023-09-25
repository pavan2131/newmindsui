import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Profile from '../pages/Profile';

import ProfilePage from '../pages/ProfilePage';
import AddProfileSection from '../pages/addprofile/AddProfileSection';
import HomePage from '../pages/HomePage';
import Test from '../pages/Test';
const Approute = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/add-profile-section" element={<AddProfileSection/>} />
        <Route path="/profile" element={<Profile />} />
       
        <Route path="/test" element={<Test />} />
        {/* <Route path="/profilepage" element={<ProfilePage/>} /> */}
      

      </Routes>
      {/* <FireNavComponent /> Render your FireNavComponent here */}
    </Router>
  );
};

export default Approute;
