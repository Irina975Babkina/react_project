import React from 'react';
import { useSelector } from 'react-redux';
import { MenuItemSalad } from './MenuItemSalad.js';

export const MenuSalad = () => {

    const menu = useSelector( state => state.menu ); 
    let dataAll = menu.data;
    let dataSalad = dataAll.filter(d => d.name.toLowerCase().includes('salad'));
   
    const menuItemSalad = dataSalad.map( item =>
        <MenuItemSalad key={item.code} code={item.code} name={item.name} ingredients={item.ingredients} price={item.price} img={item.img} />
    );
    
    return (
        <div className='Menu'>
            <h1>salad</h1>
            <div className='MenuList'>
                {menuItemSalad}
            </div>
        </div>
    );    
}