import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartContextProvider from './components/context/CartContext';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Error404 from './components/Error404';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter> 
        <div className='uk-background-secondary uk-height-viewport uk-flex uk-flex-column'>
          <Navbar />

          <div className='uk-section uk-flex-1'>
            <div className='uk-container uk-container-expand uk-light'>
              <article className="uk-article">
                <Routes>
                  <Route path={"/"} element={<ItemListContainer/>}/>
                  <Route path={"/category/:id"} element={<ItemListContainer/>}/>
                  <Route path={"/item/:id"} element={<ItemDetailContainer/>}/>
                  <Route path={"/cart"} element={<Cart/>}/>
                  <Route path={"/checkout"} element={<Checkout/>}/>
                  <Route path={"/*"} element={<Error404/>}/>
                </Routes>
              </article>
            </div>
          </div>
          
          <Footer />
        </div>
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App
