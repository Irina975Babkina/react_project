import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import { PagesLinks } from './components/PagesLinks';
import { PagesRouter } from './routes/PagesRouter';
import './App.css';

export const App = () => (
    <BrowserRouter>
        <div className='container'>
            <div className='header'>
               <div className='wrapper-logo-img'><img className='logo-img' src ="https://i.postimg.cc/7LQPZgX5/p6-1.png" alt="logo"/></div>
               <p className='logo'>Tasty pizza</p>
               <p className='logo-text'>Delivery of the most delicious pizza in town</p>
            </div>
            <PagesLinks />
            <PagesRouter />    
        </div>
        <div className='footer'>
            <p className='footer-text'>2023 © Tasty pizza, New Providence. All rights reserved.</p>
        </div>
    </BrowserRouter>
);
