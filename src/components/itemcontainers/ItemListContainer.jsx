// ItemListContainer.js
import React, { useState, useContext } from 'react';
import { DataContext } from '../../context/dataContext';
import { BsPlus, BsDash } from 'react-icons/bs';
import { Modal, Button } from 'react-bootstrap';
import ModalCarrito from "../../carrito/ModalCarrito"
import './itemcontainer.css';

const ItemListContainer = () => {
  const { items, addToCart, removeFromCart, selectedOption, setSelectedOption } = useContext(DataContext);
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

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="shopContainer" style={{ width: "100%" }}>
      <div style={{ width: "100%", margin: "20px 0px" }}>
        <select value={selectedOption} onChange={handleOptionChange} style={{ alignSelf: "right", borderRadius: "20px", backgroundColor: "whitesmoke", marginTop: "20px" }}>
          <option value="">Seleccionar</option>
          <option value="salado">Salado</option>
          <option value="dulce">Dulce</option>
        </select>
      </div>
      <div className="row" style={{ margin: "20px 10px 20px 0px", flexWrap: "wrap", width: "95%", overflow: "hidden", display: "flex" }}>
        {items.length > 0 &&
          items.map((product) => (
            <div className="col" key={product.id}>
              <div className="card" style={{ width: "18rem", minHeight: "26rem", maxHeight: "26rem", margin: "20px", borderRadius: "20px", boxShadow: "10px 5px 5px whitesmoke" }}>
                <img src={product.img} className="card-img-top" style={{ width: "90%", alignSelf: "center", height: "12rem", margin: "10px", borderRadius: "20px" }} alt="Product" />
                <div className="card-body" style={{ height: "7rem", flex: "0 1 auto" }}>
                  <p className="card-title">{product.productName}</p>
                  <p className="card-text">$ {product.productPrice}</p>
                </div>
                <div>
                  <Button onClick={() => openModal(product)} className="btn btn-primary" style={{ margin: "10px", borderRadius: "20px" }}>
                    Ver más
                  </Button>
                  <Button onClick={openModal1} className="btn btn-primary" style={{ margin: "10px", borderRadius: "20px" }}>
                    Ver en carrito
                  </Button>
                </div>
              </div>
            </div>
          ))}
      </div>
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProduct && selectedProduct.productName}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ width: "90%", alignSelf: "center" }}>
          {selectedProduct && (
            <>
              <img src={selectedProduct.img} alt="Product" style={{ width: "10rem", alignSelf: "center", height: "10rem", margin: "10px", borderRadius: "20px" }} />
              <p className="card-text">{selectedProduct.productDescription}</p>
              <p className="card-text">$ {selectedProduct.productPrice}</p>
              <div className='row'>
                <Button onClick={() => removeFromCart(selectedProduct)} className="btn btn-primary" style={{ margin: "5px 10px", borderRadius: "20px" }}>
                  <BsDash />
                </Button>
                <p>{selectedProduct.quantity}</p>
                <Button onClick={() => addToCart(selectedProduct)} className="btn btn-primary" style={{ margin: "5px 10px", borderRadius: "20px" }}>
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
