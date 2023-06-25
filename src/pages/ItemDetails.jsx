import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../Firebase.config';

const ItemDetails = ({ productId }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const docRef = doc(db, 'products', productId);
        const docSnapshot = await getDoc(docRef);

        if (docSnapshot.exists()) {
          setProduct(docSnapshot.data());
        } else {
          console.log('No se encontró el producto');
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (!product) {
    return <p>No se encontró el producto</p>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Precio: ${product.price}</p>
      {/* Mostrar otros detalles del producto */}
    </div>
  );
};

export default ItemDetails;
