import React,{useContext} from 'react';
import { DataContext } from '../context/dataContext';

import './cartcontent.css';
import { Navigate } from 'react-router-dom';


export const CartTotal = () => {
    const {cart} = useContext(DataContext)
  const total = cart.reduce((count, product) => count + (product.productPrice * product.quantity), 0)

  return (
    <div className='cartTotal'> <h3>Total: ${total} </h3>
    <div>
    <button>Finalizar compra</button>
    </div>
    </div>
    
  )
}
