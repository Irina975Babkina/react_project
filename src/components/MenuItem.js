import React from 'react';

import { useDispatch } from 'react-redux';
import { change } from "../redux/orderSlice";

import './MenuItem.css';

export const MenuItem = ( { name, img, ingredients, price } ) => {
  const dispatch = useDispatch();

  function changeOrder () {
      dispatch( change({name, price}) );
  }

  return (
    <div className='MenuItem'>
      <span className='Image'><img src ={img} /></span>
      <span className='Name'>{name}</span>
      <span className='Ingredients'>{ingredients}</span>
      <span className='Price'>price: {price}</span>
      <input type="button" className='Button' value="add to cart" onClick={changeOrder}/>
    </div>
  );
};
