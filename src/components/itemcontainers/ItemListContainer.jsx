import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsPlus, BsDash } from 'react-icons/bs';
import { Modal, Button } from 'react-bootstrap';

const ItemListContainer = ({ product, cartItems, setCartItems }) => {
  const { id, img, productName, productDescription, productPrice } = product;
  const [showModal, setShowModal] = useState(false);
  const [contador, setContador] = useState({});

  const addToCantidad = () => {
    setContador(prevContador => ({
      ...prevContador,
      [id]: (prevContador[id] || 0) + 1
    }));
  };

  const addToCart = () => {
    const itemIndex = Object.keys(contador).findIndex(key => key === id);

    if (itemIndex !== -1) {
      // Si el producto ya existe en el contador, incrementa la cantidad en el carrito
      const updatedItems = [...cartItems];
      const index = updatedItems.findIndex(item => item.id === id);
      updatedItems[index].quantity += contador[id];
      setCartItems(updatedItems);
    } else {
      // Si el producto no existe en el contador, agrega el producto al carrito con la cantidad correspondiente
      const quantity = contador[id] || 1;
      setCartItems(prevItems => [...prevItems, { ...product, quantity }]);
    }
  };

  const removeFromCart = () => {
    const itemIndex = cartItems.findIndex(item => item.id === id);

    if (itemIndex !== -1 && cartItems[itemIndex].quantity > 0) {
      // Si el producto existe en el carrito y tiene cantidad mayor a 0, decrementa la cantidad
      const updatedItems = [...cartItems];
      updatedItems[itemIndex].quantity -= 1;
      setCartItems(updatedItems);
    }

    setContador(prevContador => ({
      ...prevContador,
      [id]: (prevContador[id] || 0) - 1
    }));
  };

  const quantity = cartItems.find(item => item.id === id)?.quantity || 0;

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };


  return (
    <div className="col col-sm-12 col-md-6 col-lg-4 my-4">
      <div className='card'>
        <img src={img} className="card-img-top" style={{ height: "600px" }} alt={productName} />
        <div className="card-body">
          <h3 className="card-title fs-4 text-center aling-items-center text-uppercase">{productName}</h3>
        </div>
        <div className="d-flex align-items-center justify-content-center"> {/* Add 'justify-content-center' class */}
          <div className="col col-8">
            <p className="text-uppercase" style={{ marginLeft: '-100px' }}>Precio</p>
          </div>
          <div className="col col-4">
            <span className="ml-3 fs-6 col col-6 text-right" style={{ marginLeft: '-100px' }}>
              USD ${productPrice}
            </span>
          </div>
        </div>

        <div className='container my-2aling-items-center' style={{ display: 'flex', justifyContent: 'center' }}><button onClick={openModal} className="btn btn-warning">
          Ver más
        </button>
        </div>


        {/* Modal */}
        <Modal show={showModal} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>{productName}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={img} className="card-img-top" alt="..." />
            <p className="card-text">{productDescription}</p>
            <p className="card-text">$ {productPrice}</p>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={addToCart} className="btn btn-warning">
              Agregar al carrito
            </button>
            <button onClick={removeFromCart}><BsDash /></button>
            <span>{quantity}</span>
            <button onClick={addToCart}><BsPlus /></button>
          </Modal.Footer>
        </Modal>
        <div className='my-2 aling-items-center'>
          <button onClick={addToCart} className="btn btn-warning">
            Agregar al carrito
          </button>
          <div className='my-2' >
            <button onClick={removeFromCart}><BsDash /></button>
            <span>{contador[id] || 0}</span>
            <button onClick={addToCantidad}><BsPlus /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;