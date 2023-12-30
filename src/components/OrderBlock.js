import React from 'react';
import {useState} from 'react';
import './OrderBlock.css';
import { useSelector } from 'react-redux';
import { OrderItem } from './OrderItem.js';

export const OrderBlock = () => {

    const order = useSelector( state => state.order ); 
    let disablBtn = order.disablBtn; 
    let info = order.arr;

    let pr = 0;
    for (let i = 0; i < info.length; i += 1 ){
        pr += Number(info[i]["price"]);
    }

    const [orderInfo, setOrderInfo] = useState(0); 
    const [arr, setArr] = useState(info);
    const [totalPrice, setTotalPrice] = useState(pr);
    const [disablingButtons, setDisablingButtons] = useState(false);


    const productDelete = (name, price) => {
      let newArr = arr.filter(product => product.name!== name);
      setArr(newArr);
      let newPr = totalPrice - Number(price);
      setTotalPrice(newPr);
    }

    const acceptOrder = () => {
      setOrderInfo(1);
      setDisablingButtons(true);
    }

    const orderItems = arr.map( item =>
      <OrderItem key={item.key} name={item.name} price={item.price} onClick = {productDelete} disabl = {disablingButtons}/>
    );

  return (
    <div className='wrapper-order'>
      <p className='order'>Your order:</p>
      <div className='MenuList'>
        {orderItems}
       </div>
      <p className='order'>Total: {totalPrice}</p>
       { (disablBtn===true) && 
        <p className='error'>Add products to your order</p>}
       <input type="button" className='Button' value="Сheckout" disabled = {disablBtn} onClick={acceptOrder}/>
       { (orderInfo===1) && 
      <div>
        <p className='order'>Your order has been placed, expect delivery within 45 minutes.</p>
        <img src ="https://i.postimg.cc/fRNS3ncX/Food-Delivery.png" alt="men"/>
      </div>}
    </div>
  );
};