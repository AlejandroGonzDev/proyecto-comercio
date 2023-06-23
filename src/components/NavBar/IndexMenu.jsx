import React, { useState } from 'react';
import { NavLink} from 'react-router-dom';
import CartWidget from './CartWidget';
import { Modal, Button } from 'react-bootstrap';
import ModalCarrito from '../modals/ModalCarrito';

function IndexMenu({ navBar_properties, cartItems, onUpdateItems }) {
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
            {navBar_properties.map(({ path, name }, index) => (
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
      <Modal show={showCartModal} onHide={closeCartModal}>
      <ModalCarrito />
      </Modal>
    </nav>
  );
}

function calculateTotalValue(items) {
  return items.reduce((total, item) => total + item.quantity * item.productPrice, 0);
}

export default IndexMenu;