import React from 'react';

import { Provider } from 'react-redux';
import { store } from '../redux/store';

import { MenuPizza } from '../components/MenuPizza.js';

export const PageMenuPizza = () => {
          
    return (
        <Provider store={store}>
            <MenuPizza/>
        </Provider>  
    );    
}