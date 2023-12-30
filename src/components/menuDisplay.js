import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { menuLoad } from "../redux/menuLoad.js";
import { MenuList } from './MenuList.js';

import './MenuDisplay.css';


export const MenuDisplay = () => {

  const dispatch = useDispatch();

  const menu = useSelector( state => state.menu ); 

  function load() {
    dispatch( menuLoad ); // looks like a regular dispatch of a regular action
  };

  return (
    <>
      <p className='text'>Welcome to the website for delivering the most delicious pizza in the city 🤗. Are you hungry 😏? Go to the menu 🍕</p>
      <input type='button' className='button-start' value='go to menu' onClick={load} />
      { (menu.dataLoadState===0) && 
        <div className='wrapper-img-start'><img className='img-start' src ="https://i.postimg.cc/rsYPH2Xm/pizza-party-hands-295292-460.jpg" alt="logo"/></div> }
      { (menu.dataLoadState===1) && "loading..." }
      { (menu.dataLoadState===2) && <MenuList data = {menu.data}/> }
      { (menu.dataLoadState===3) && "error: "+menu.dataLoadError }
    </>
  );
}
