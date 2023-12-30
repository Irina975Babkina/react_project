import React from 'react';
import { useSelector } from 'react-redux';
import { MenuItemPizza } from './MenuItemPizza.js';

export const MenuPizza = () => {

    const menu = useSelector( state => state.menu ); 
    let dataAll = menu.data;
    let dataPizza = dataAll.filter(d => d.name.toLowerCase().includes('pizza'));
   
    const menuItemsPizza = dataPizza.map( item =>
        <MenuItemPizza key={item.code} code={item.code} name={item.name} ingredients={item.ingredients} price={item.price} img={item.img} />
    );
    
    return (
        <div className='Menu'>
            <h1>pizza</h1>
            <div className='MenuList'>
                {menuItemsPizza}
            </div>
        </div>
    );    
}