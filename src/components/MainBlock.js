import React from 'react';

import { Provider } from 'react-redux';
import { store } from '../redux/store'

import { MenuDisplay } from './menuDisplay.js';

export const MainBlock = () => (
   <Provider store={store}>
        <div>
            <MenuDisplay />
        </div>
   </Provider>
);
