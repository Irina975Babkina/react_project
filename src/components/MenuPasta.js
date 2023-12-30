import React from 'react';
import { useSelector } from 'react-redux';
import { MenuItemPasta } from './MenuItemPasta.js';

export const MenuPasta = () => {

    const menu = useSelector( state => state.menu ); 
    let dataAll = menu.data;
    let dataPasta = dataAll.filter(d => d.name.toLowerCase().includes('pasta'));
   
    const menuItemsPasta = dataPasta.map( item =>
        <MenuItemPasta key={item.code} code={item.code} name={item.name} ingredients={item.ingredients} price={item.price} img={item.img} />
    );
    
    return (
        <div className='Menu'>
            <h1>pasta</h1>
            <div className='MenuList'>
                {menuItemsPasta}
            </div>
        </div>
    );    
}