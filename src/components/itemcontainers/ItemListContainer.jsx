import React, { useState, useContext } from 'react';
import { DataContext } from '../context/dataContext';
import { BsPlus, BsDash } from 'react-icons/bs';
import { Modal, Button } from 'react-bootstrap';
import ModalCarrito from '../carrito/ModalCarrito';

const ItemListContainer = () => {
  const { items, addToCart, removeFromCart } = useContext(DataContext);
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setShowModal(false);
  };

  const openModal1 = () => {
    setShowModal1(true);
  };

  const closeModal1 = () => {
    setShowModal1(false);
  };

  return (
    <div className="row">
      {items.length > 0 &&
        items.map((product) => (
          <div className="col-12 col-md-3 mb-4" key={product.id}>
            <div className="card">
              <img src={product.img} className="card-img-top" alt="Product" />
              <div className="card-body">
                <h3 className="card-title">{product.productName}</h3>
                <p className="card-text">$ {product.productPrice}</p>
                <Button onClick={() => openModal(product)} className="btn btn-warning">
                  Ver más
                </Button>
                <Button onClick={openModal1} className="btn btn-warning">
                  Ver en carrito
                </Button>
              </div>
            </div>
          </div>
        ))}
        
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProduct && selectedProduct.productName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProduct && (
            <>
              <img src={selectedProduct.img} className="card-img-top" alt="Product" />
              <p className="card-text">{selectedProduct.productDescription}</p>
              <p className="card-text">$ {selectedProduct.productPrice}</p>
              <div>
                <Button onClick={() => removeFromCart(selectedProduct)} className="btn btn-warning">
                <BsDash />
                </Button>
                <p className="qtt">{selectedProduct.quantity}</p>
                <Button onClick={() => addToCart(selectedProduct)} className="btn btn-warning">
                <BsPlus />
                </Button>
              </div>
            </>
          )}
        </Modal.Body>
      </Modal>
      <Modal show={showModal1} onHide={closeModal1}>
        <ModalCarrito />
      </Modal>
    </div>
  );
};

export default ItemListContainer;