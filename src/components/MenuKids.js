import React from 'react';
import { useSelector } from 'react-redux';
import { MenuItemKids } from './MenuItemKids.js';


export const MenuKids = () => {

    const menu = useSelector( state => state.menu ); 
    let dataAll = menu.data;
    let dataKids = dataAll.filter(d => d.name.toLowerCase().includes('kids'));
   
    const menuItemsKids = dataKids.map( item =>
        <MenuItemKids key={item.code} code={item.code} name={item.name} ingredients={item.ingredients} price={item.price} img={item.img} />
    );
    
    return (
        <div className='Menu'>
            <h1>kids menu</h1>
            <div className='MenuList'>
                {menuItemsKids}
            </div>
        </div>
    );    
}