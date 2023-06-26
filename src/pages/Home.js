import React from 'react'
import Footer from "../footer/Footer"
import ItemListContainer from '../components/itemcontainers/ItemListContainer';

function Home() {
  return (
    <div>
      <ItemListContainer />
      <Footer/>
    </div>
  )
}

export default Home;