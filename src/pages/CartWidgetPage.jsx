import React from 'react';
import { useNavigate } from 'react-router-dom';

const CartWidgetPage = () => {

  const navigate = useNavigate();
  return (
    <div>
      <div>
        <h1>Carrito de compras</h1>
      <button className='btn btn-dark' onClick={()=>navigate(`/Home`)}>Seguir con las compras</button>
      </div> 
      </div>
  )
}

export default CartWidgetPage;