import React from 'react';

import { Provider } from 'react-redux';
import { store } from '../redux/store';

import { OrderBlock } from '../components/OrderBlock';

export const PageOrder = () => {
          
  return (
    <Provider store={store}>
      <OrderBlock />
    </Provider>
  );
    
}