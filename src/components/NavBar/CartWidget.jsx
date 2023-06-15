import React from 'react';
import { BsCart } from 'react-icons/bs';

function CartWidget({ totalQuantity }) {
  return (
    <div>
      <BsCart />
      <span>{totalQuantity}</span>
    </div>
  );
}

export default CartWidget;