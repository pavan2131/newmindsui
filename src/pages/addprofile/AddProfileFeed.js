import React from 'react'
import '../../styles/Layout.css';
import AddProfileFeed1 from './AddProfileFeed1';
import AddProfileFeed2 from './AddProfileFeed2';


const AddProfileFeed = () => {
  return (
    <div className="feedContainer">
    
    <div className="AddProfileFeed  AddProfileFeed1">
       <AddProfileFeed1 />
      </div>
      <div className="AddProfileFeed  AddProfileFeed2">
      <AddProfileFeed2 />
      </div>
      
    </div>
  );
};

export default AddProfileFeed;
