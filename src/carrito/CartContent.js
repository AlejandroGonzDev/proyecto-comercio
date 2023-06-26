import React, {useContext} from 'react'
import ModalCarrito from './ModalCarrito'
import { DataContext } from '../context/dataContext';
import { CartTotal } from './CartTotal';

import './cartcontent.css';

const CartContent = () => {
  const {cart} = useContext(DataContext)
  

  return cart.length > 0 ? (
    <>
      <ModalCarrito/>
      <CartTotal/>
    </>
    
  ) : (
    <h2 className='cartMsg'>No tienes productos en tu carrito</h2>
  )
}

 

export default CartContent;