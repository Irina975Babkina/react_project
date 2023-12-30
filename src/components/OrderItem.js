import React from 'react';

import './OrderItem.css';

export const OrderItem = ( { name, price, disabl, onClick} ) => {
  const productDelete = (eo)=>{
    onClick(name, price);
  }
    
  return (
    <div className='OrderItem'>
      <span className='Name'>{name}</span>
      <span className='Price'>price: {price}</span>
      <input type="button" className='Button' disabled = {disabl} value="Remove" onClick={productDelete}/>
    </div>
  );
};
