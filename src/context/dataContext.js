// DataProvider.js
import React, { createContext, useEffect, useState } from "react";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from "../Firebase.config";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      try {
        let queryRef = collection(db, 'products');

        if (selectedOption) {
          queryRef = query(queryRef, where('categorie', '==', selectedOption));
        }

        const querySnapshot = await getDocs(queryRef);
        const lista = querySnapshot.docs.map((producto) => ({
          id: producto.id,
          ...producto.data(),
        }));
        setItems(lista);
      } catch (error) {
        console.log(error);
      }
    };

    fetchItems();
  }, [selectedOption]);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      setCart(cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    existingProduct.quantity !== 1 &&
      setCart(cart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item)));


    existingProduct.quantity === 1 &&
      setCart(cart.filter((item) => item !== existingProduct));
  };

  return (
    <DataContext.Provider value={{ items, cart, setCart, addToCart, removeFromCart, selectedOption, setSelectedOption }}>
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
