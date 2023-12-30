import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { PageMain } from '../pages/PageMain';
import { PageOrder } from '../pages/PageOrder';
import { PageMenuPizza } from '../pages/PageMenuPizza';
import { PageMenuBurger } from '../pages/PageMenuBurger';
import { PageMenuPasta } from '../pages/PageMenuPasta';
import { PageMenuKids } from '../pages/PageMenuKids';
import { PageMenuSalad } from '../pages/PageMenuSalad';

export const PagesRouter = () => {          
  return (
    <Routes>
      <Route path="/" element={<PageMain/>}/>
      <Route path="/pizza" element={<PageMenuPizza/>} />
      <Route path="/burger" element={<PageMenuBurger/>} />
      <Route path="/kidsmenu" element={<PageMenuKids/>} />
      <Route path="/salad" element={<PageMenuSalad/>} />
      <Route path="/pasta" element={<PageMenuPasta/>} />
      <Route path="/order" element={<PageOrder/>} />
    </Routes>
  );    
};