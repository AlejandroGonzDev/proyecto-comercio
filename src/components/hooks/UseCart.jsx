import { useState } from 'react';

const UseCart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const itemIndex = cartItems.findIndex((item) => item.id === product.id);

    if (itemIndex !== -1) {
      // Si el producto ya existe en el carrito, incrementa la cantidad
      const updatedItems = [...cartItems];
      updatedItems[itemIndex].quantity += 1;
      updatedItems[itemIndex].itemValue = updatedItems[itemIndex].productPrice * updatedItems[itemIndex].quantity;
      setCartItems(updatedItems);
    } else {
      // Si el producto no existe en el carrito, agrega el producto con cantidad inicial 1
      const newItem = {
        id: product.id,
        img: product.img,
        productName: product.productName,
        productDescription: product.productDescription,
        productPrice: product.productPrice,
        quantity: 1,
        itemValue: product.productPrice,
      };
      setCartItems((prevItems) => [...prevItems, newItem]);
    }
  };

  const removeFromCart = (product) => {
    const itemIndex = cartItems.findIndex((item) => item.id === product.id);

    if (itemIndex !== -1 && cartItems[itemIndex].quantity > 0) {
      // Si el producto existe en el carrito y tiene cantidad mayor a 0, decrementa la cantidad
      const updatedItems = [...cartItems];
      updatedItems[itemIndex].quantity -= 1;
      updatedItems[itemIndex].itemValue = updatedItems[itemIndex].productPrice * updatedItems[itemIndex].quantity;
      setCartItems(updatedItems);
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
  };
};

export default UseCart;
