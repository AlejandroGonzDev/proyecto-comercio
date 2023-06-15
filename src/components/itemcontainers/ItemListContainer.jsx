import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import { BsPlus, BsDash } from 'react-icons/bs';

const ItemListContainer = ({ product }) => {
  const [showModal, setShowModal] = useState(false);
  const { id, img, productName, productPrice, productDescription } = product;
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(0);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const addToCart = (product, quantity) => {
    setCartItems(prevItems => {
      const updatedItems = [...prevItems];
      const itemIndex = updatedItems.findIndex(item => item.id === product.id);

      if (itemIndex !== -1) {
        // Si el producto ya existe en el carrito, incrementa la cantidad
        updatedItems[itemIndex].quantity += quantity;
      } else {
        // Si el producto no existe en el carrito, agrega el producto con la cantidad especificada
        updatedItems.push({ ...product, quantity });
      }

      return updatedItems;
    });
  };

  const removeFromCart = (productId) => {
    const updatedItems = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedItems);
  };

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value, 10));
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(0);
  };

  const totalQuantity = cartItems.length > 0 ? cartItems.reduce((total, item) => total + item.quantity, 0) : 0;

  return (
    <div className="col col-sm-12 col-md-6 col-lg-4 my-4">
      <div className="card">
        <img src={img} className="card-img-top" style={{ height: "600px" }} alt={productName} />
        <div className="card-body">
          <h3 className="card-title fs-4 text-center text-uppercase">{productName}</h3>
          {/* <p className="card-text">{productDescription}</p> */}
          <div className="row my-2 d-flex aling-items-center">
            <div className='col col-8'>
              <p className="fs-5 m-0 p-0 text-uppercase">Precio</p>
            </div>
            <div className='col col-4'>
              <span className='ml-3 fs-6 col col-6 text-right'>
                USD ${productPrice}
              </span>
            </div>
          </div>
        </div>
        <div className='container' style={{ display: 'flex', justifyContent: 'center' }}>
          <button onClick={() => {
            addToCart(product, 1);
            setQuantity(quantity + 1);
          }}>+</button>
          <span className='mx-2 aling-items-center'>{quantity}</span>
          <button className='' onClick={() => {
            if (quantity > 1) {
              removeFromCart(product.id);
              setQuantity(quantity - 1);
            } else {
              removeFromCart(product.id);
            }
          }}>-</button>
        </div>
        <Modal show={showModal} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>{productName}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={img} className="card-img-top" alt="..." />
            <p className="card-text">{productDescription}</p>
            <p className="card-text">{productPrice}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleAddToCart} className="btn btn-warning">
              Agregar al carrito
            </Button>
            <Button onClick={() => removeFromCart(product.id)}>
              <BsDash />
            </Button>
            <span>{quantity}</span>
            <Button onClick={() => addToCart(product, 1)}>
              <BsPlus />
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default ItemListContainer;