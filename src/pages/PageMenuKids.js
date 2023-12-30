import React from 'react';

import { Provider } from 'react-redux';
import { store } from '../redux/store';

import { MenuKids } from '../components/MenuKids.js';

export const PageMenuKids = () => {   

    return (
        <Provider store={store}>
            <MenuKids/>
        </Provider>  
    );
   
}