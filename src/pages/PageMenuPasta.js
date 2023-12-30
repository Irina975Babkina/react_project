import React from 'react';

import { Provider } from 'react-redux';
import { store } from '../redux/store';

import { MenuPasta } from '../components/MenuPasta.js';

export const PageMenuPasta = () => {
          
    return (
        <Provider store={store}>
            <MenuPasta/>
        </Provider>  
    );    
}