import React from 'react';
import { BsCart } from 'react-icons/bs';

function CartWidget({ totalQuantity }) {
  return (
    <div>
      <BsCart />
      {totalQuantity > 0 && <span>{totalQuantity}</span>}
    </div>
  );
}

export default CartWidget;
