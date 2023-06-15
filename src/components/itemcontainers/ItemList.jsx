import React, { useEffect, useState } from 'react';
import ItemListContainer from "./ItemListContainer"
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../Firebase.config';

function ItemList({ onUpdateItems }) {
  const [productsList, setListedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const coleccionProductos = collection(db, 'products');
    getDocs(coleccionProductos)
      .then((result) => {
        const lista = result.docs.map((producto) => ({
          id: producto.id,
          ...producto.data(),
        }));
        setListedProducts(lista);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="row p-2  p-lg-5 full-height align-items-center">
      {loading ? (
        <p>Cargando...</p>
      ) : (
        productsList.map((product) => (
          <ItemListContainer
            key={product.id}
            product={product}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        ))
      )}
    </div>
  );
}

export default ItemList;