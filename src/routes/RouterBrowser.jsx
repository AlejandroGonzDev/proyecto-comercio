import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import ItemDetails from "../pages/ItemDetails"
import CartWidgetPage from '../pages/CartWidgetPage';
import IndexMenu from '../components/NavBar/IndexMenu';


function RouterBrowser() {
  const [cartItems, setCartItems] = React.useState([]);

  const updateItems = (updatedItems) => {
    setCartItems(updatedItems);
  };

  const navBar_properties = [
    {
      path: '/Home',
      name: 'Principal',
    },
    {
      path: '/Item/1',
    },
    {
      path: '/CartWidgetPage',
    }   
  ];

  return (
    <BrowserRouter>
      <IndexMenu navBar_properties={navBar_properties} cartItems={cartItems} />
      <Routes>
        <Route exact path={'/Home'} element={<Home />} />
        <Route path={'/Item/:id'} element={<ItemDetails />} />
        <Route
          path={'/CartWidgetPage'}
          element={<CartWidgetPage cartItems={cartItems} onUpdateItems={updateItems} />}
        />
       
      </Routes>
    </BrowserRouter>
  );
}

export default RouterBrowser;