import React, { useContext } from 'react';
import { DataContext } from '../context/dataContext';
import { useNavigate } from 'react-router-dom';


import './cartcontent.css';

export const CartTotal = () => {
  const { cart } = useContext(DataContext);
  const total = cart.reduce((count, product) => count + (product.productPrice * product.quantity), 0);
  const navigate = useNavigate();

  const handleFinalizarCompra = () => {
    // Lógica adicional antes de redirigir a CheckOut si es necesario
    navigate('/checkout');
  };

  return (
    <div className='cartTotal'>
      <h3>Total: ${total} </h3>
      <div>
        <button onClick={handleFinalizarCompra}>Finalizar compra</button>
      </div>
    </div>
  );
};
