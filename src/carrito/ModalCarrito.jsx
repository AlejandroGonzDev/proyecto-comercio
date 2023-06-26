import React,{useContext} from 'react';
import { DataContext } from '../context/dataContext';
import { BsPlus, BsDash } from 'react-icons/bs';
import { Button } from 'react-bootstrap';

import './cartcontent.css';

const ModalCarrito = () => {
  const {cart, removeFromCart, addToCart} = useContext(DataContext)
  
  return cart.map((product)=>  
  <div className="cartContent" key={product.id}>
    <img src={product.img}  alt="Product-card" />
    <h3 className="name">{product.productName}</h3>
    <Button onClick={() => removeFromCart(product)} className="btn btn-warning">
        <BsDash />
    </Button>
    <p className="qtt">{product.quantity}</p>
    <Button onClick={() => addToCart(product)} className="btn btn-warning">
      <BsPlus />
    </Button>
    
    <p className="price">$ {product.productPrice * product.quantity} </p>
  </div>
  ) 
};

export default ModalCarrito;
