import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';
import { Modal } from 'react-bootstrap';
import ModalCarrito from '../modals/ModalCarrito';

function NavBar({ navBar_properties, cartItems, setCartItems }) {
  const [showCartModal, setShowCartModal] = useState(false);

  const openCartModal = () => {
    setShowCartModal(true);
  };

  const closeCartModal = () => {
    setShowCartModal(false);
  };

  const removeFromCart = (itemId) => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === itemId) {
        const updatedItem = { ...item };
        updatedItem.quantity = Math.max(updatedItem.quantity - 1, 0);
        updatedItem.itemValue = updatedItem.productPrice * updatedItem.quantity;
        return updatedItem;
      }
      return item;
    });
    setCartItems(updatedItems.filter((item) => item.quantity > 0));
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand text-color-dark" to="/Home">
          Los Panas Store
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
                <NavLink className="nav-link active" aria-current="page" to={path}>
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
          <span className="navbar-text">
            <div onClick={openCartModal} style={{ cursor: 'pointer' }}>
              <CartWidget totalQuantity={cartItems.length} />
            </div>
          </span>
        </div>
      </div>

      {/* Cart Modal */}
      <Modal show={showCartModal} onHide={closeCartModal}>
        <ModalCarrito cartItems={cartItems} removeFromCart={removeFromCart} totalQuantity={cartItems.length} />
      </Modal>
    </nav>
  );
}

export default NavBar;
