import React from 'react';

import { Provider } from 'react-redux';
import { store } from '../redux/store'

import { MenuSalad } from '../components/MenuSalad.js';

export const PageMenuSalad = () => {
          
    return (
        <Provider store={store}>
            <MenuSalad/>
        </Provider>  
    );
}