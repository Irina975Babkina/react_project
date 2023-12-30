import React from 'react';

import { NavLink } from 'react-router-dom';

import './PagesLinks.css';

export const PagesLinks = () => {
          
  function getLinkClass(obj) {
    let className="PageLink";
    if ( obj.isActive )
      className+=" ActivePageLink";
    return className;
  }

  return (
    <div className='links'>
      <NavLink to="/" end    className={getLinkClass}>Main</NavLink>
      <NavLink to="/order" className={getLinkClass}>Order 🛒</NavLink>
    </div>
  );
};