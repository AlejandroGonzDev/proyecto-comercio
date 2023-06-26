import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import DataProvider from '../context/dataContext';
import Home from '../pages/Home';
import IndexMenu from '../components/NavBar/IndexMenu';
import CartContent from '../carrito/CartContent';
import CheckOut from '../pages/CheckOut';


function RouterBrowser() {
  
  return (
    <DataProvider>
      <BrowserRouter>
        <IndexMenu/>
        <Routes>
          <Route exact path={'/'} element={<Home />} />    
          <Route exact path={'/carrito'} element={<CartContent />} />
          <Route exact path={'/CheckOut'} element={<CheckOut />}/> 
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default RouterBrowser;