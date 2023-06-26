import React,{useContext} from 'react';
import { DataContext } from '../footer/dataContext';

import './cartcontent.css';


export const CartTotal = () => {
    const {cart} = useContext(DataContext)
  const total = cart.reduce((count, product) => count + (product.productPrice * product.quantity), 0)

  return (
    <div className='cartTotal'> <h3>Total: ${total} </h3></div>
  )
}