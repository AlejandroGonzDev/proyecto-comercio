// NavBar.js
import React,{useContext} from 'react';
import { DataContext } from '../../context/dataContext';
import { NavLink } from 'react-router-dom';
import { BsCart } from 'react-icons/bs';

function NavBar() {
  const {cart} = useContext(DataContext)
  const totalQuantity = cart.reduce((count, product) => count + product.quantity, 0)

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand text-color-dark" to={"/"}>
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
          <span className="navbar-text">
            <NavLink className="nav-link active" aria-current="page" to={"/carrito"} style={{ cursor: 'pointer' }}>
              <BsCart />
                {totalQuantity > 0 && <span>{totalQuantity}</span>}
            </NavLink>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
