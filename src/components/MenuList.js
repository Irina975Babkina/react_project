import React from 'react';

import { NavLink } from 'react-router-dom';
import { MenuItem } from './MenuItem.js';

import './MenuList.css';

export const MenuList = ( { data } ) => {
  
  const menuItems = data.map( item =>
    <MenuItem key={item.code} code={item.code} name={item.name} ingredients={item.ingredients} price={item.price} img={item.img} />
  );

  return (
    <div className='Menu'>
      <div className='Navigation'>
        <NavLink to="/pizza" className="PageLinkMenu">Pizza</NavLink>
        <NavLink to="/burger" className="PageLinkMenu">Burger</NavLink>
        <NavLink to="/kidsmenu" className="PageLinkMenu">Kids menu</NavLink>
        <NavLink to="/salad" className="PageLinkMenu">Salad</NavLink>
        <NavLink to="/pasta" className="PageLinkMenu">Pasta</NavLink>
      </div>
      <div className='MenuList'>
        {menuItems}
      </div>
    </div>
  );
}