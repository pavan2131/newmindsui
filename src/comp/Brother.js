import React from "react";
import { useSelector } from 'react-redux';

export const Brother = () => {
    const quantity = useSelector((state) => state.quantity); // Access the 'quantity' value from the Redux store
    
    console.log(quantity); // Log the 'quantity' value
   

    return (
        <>
            <h2>Quantity in Another Component: {quantity}</h2>
            <div className='Price'>Price {quantity}</div>
        </>
    );
}
