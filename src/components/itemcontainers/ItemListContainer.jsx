import React, { useState } from 'react';
import { BsPlus, BsDash } from 'react-icons/bs';
import { Modal, Button } from 'react-bootstrap';
import ModalCarrito from '../modals/ModalCarrito';

const ItemListContainer = ({ product, cartItems, setCartItems }) => {
  const { id, img, productName, productDescription, productPrice } = product;
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false); // Agregado
  const [contador, setContador] = useState(0);

  const addToCart = () => {
    const newItem = {
      id,
      img,
      productName,
      productDescription,
      productPrice,
      quantity: contador,
      itemValue: productPrice * contador,
    };
    setCartItems((prevItems) => [...prevItems, newItem]);
    setContador(0);
  };

  const removeFromCart = (itemId) => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === itemId) {
        const updatedItem = { ...item };
        updatedItem.quantity -= 1;
        updatedItem.itemValue = updatedItem.productPrice * updatedItem.quantity;
        return updatedItem;
      }
      return item;
    });
    setCartItems(updatedItems);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const openModal1 = () => {
    setShowModal1(true);
  };

  const closeModal1 = () => {
    setShowModal1(false);
  };

  return (
    <div className="col-12 col-md-3 mb-4">
      <div className="card">
        <img src={img} className="card-img-top" alt="Product" />
        <div className="card-body">
          <h3 className="card-title">{productName}</h3>
          <p className="card-text">{productPrice}</p>
          <button onClick={openModal} className="btn btn-warning">
            Ver más
          </button>
          <button onClick={openModal1} className="btn btn-warning">
            Ver carrito
          </button>
        </div>
        <Modal show={showModal} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>{productName}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={img} className="card-img-top" alt="Product" />
            <p className="card-text">{productDescription}</p>
            <p className="card-text">{productPrice}</p>
            <div>
              <button onClick={() => setContador((prevCount) => Math.max(prevCount - 1, 0))}>
                <BsDash />
              </button>
              <span>{contador}</span>
              <button onClick={() => setContador((prevCount) => prevCount + 1)}>
                <BsPlus />
              </button>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={addToCart} className="btn btn-warning">
              Agregar al carrito
            </button>
          </Modal.Footer>
        </Modal>
        <Modal show={showModal1} onHide={closeModal1}>
          <ModalCarrito cartItems={cartItems} removeFromCart={removeFromCart} />
        </Modal>
      </div>
    </div>
  );
};

export default ItemListContainer;
