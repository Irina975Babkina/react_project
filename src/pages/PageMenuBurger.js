import React from 'react';

import { Provider } from 'react-redux';
import { store } from '../redux/store'

import { MenuBurger } from '../components/MenuBurger.js';

export const PageMenuBurger = () => {
          
  return (
    <Provider store={store}>
       <MenuBurger />
    </Provider>  
  );
    
}