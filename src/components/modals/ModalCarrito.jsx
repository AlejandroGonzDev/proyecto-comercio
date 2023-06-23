import React from 'react';

const ModalCarrito = ({ cartItems, removeFromCart }) => {
  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <span>{item.productName}</span>
              <span>Cantidad: {item.quantity}</span>
              <span>Valor: {item.itemValue}</span>
              <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay productos en el carrito</p>
      )}
    </div>
  );
};

export default ModalCarrito;
