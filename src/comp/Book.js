import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { itemUpdate } from '../redux/actions/action';
import store from '../redux/store';

const Book = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    // You can dispatch both title and price updates separately if needed
    // For simplicity, here we are dispatching only the title update
    dispatch(itemUpdate(title));
   
    console.log('store', store.getState());
  }, [title, dispatch]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  

  return (
    <>
      <img className='Pen' src={'/book.jpg'} alt="hene" />
      <div style={{ textAlign: "center" }}>
        <h1>Book</h1>
      </div>
      {/* Input for title */}
      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        placeholder="Enter Title"
      />
    
     
    </>
  );
};

export default Book;
