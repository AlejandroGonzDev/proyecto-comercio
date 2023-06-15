import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BsCart } from 'react-icons/bs';
import CartWidget from './CartWidget';
import { Modal, Button } from 'react-bootstrap';

function calculateTotalValue(items) {
  return items.reduce((total, item) => total + item.quantity * item.productPrice, 0);
}

function IndexMenu({ navBarProperties, cartItems, onUpdateItems }) {
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const [showCartModal, setShowCartModal] = useState(false);

  const openCartModal = () => {
    setShowCartModal(true);
  };

  const closeCartModal = () => {
    setShowCartModal(false);
  };

 

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand text-color-dark" to="/Home">
          {"Los Panas Store"}
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {navBarProperties.map(({ path, name }, index) => (
              <li key={index} className="nav-item">
                <NavLink className={"nav-link active"} aria-current="page" to={path}>
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
          <span className="navbar-text">
            <div onClick={openCartModal} style={{ cursor: 'pointer' }}>
              <CartWidget totalQuantity={totalQuantity} />
            </div>
          </span>
        </div>
      </div>

      {/* Cart Modal */}
      <BsCart />
      <Modal show={showCartModal} onHide={closeCartModal}>
        <Modal.Header closeButton>
          <Modal.Title>Lista de productos agregados al carrito</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <div className="d-flex align-items-center">
                  <img src={item.img} alt="Product" style={{ width: '50px', marginRight: '10px' }} />
                  <span>{item.productName}</span>
                </div>
                <div>
                  Cantidad: {item.quantity}
                </div>
                <div>
                  Precio: {item.productPrice}
                </div>
                <div>
                  <button onClick={() => onUpdateItems(item.id, 1)}>+</button>
                  <button onClick={() => onUpdateItems(item.id, -1)}>-</button>
                </div>
              </li>
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <div>
            Valor total: {calculateTotalValue(cartItems)}
          </div>
          <Button variant="primary">Ir a pagar</Button>
        </Modal.Footer>
      </Modal>
    </nav>
  );
}

export default IndexMenu;