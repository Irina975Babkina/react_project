import React from 'react';
import { useSelector } from 'react-redux';
import { MenuItemBurger } from './MenuItemBurger.js';

export const MenuBurger = () => {

    const menu = useSelector( state => state.menu ); 
    let dataAll = menu.data;
    let dataBurger = dataAll.filter(d => d.name.toLowerCase().includes('burger'));
   
    const menuItemsBurger = dataBurger.map( item =>
        <MenuItemBurger key={item.code} code={item.code} name={item.name} ingredients={item.ingredients} price={item.price} img={item.img} />
    );
    
    return (
        <div className='Menu'>
            <h1>burgers</h1>
            <div className='MenuList'>
                {menuItemsBurger}
            </div>
        </div>
    );    
}