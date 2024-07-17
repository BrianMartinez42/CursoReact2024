import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter> 
      <div className='uk-background-secondary uk-height-viewport'>
        <Navbar />

        <div className='uk-section'>
          <div className='uk-container uk-container-expand uk-light'>
            <article className="uk-article">
              <Routes>
                <Route path={"/"} element={<ItemListContainer/>}/>
                <Route path={"/category/:id"} element={<ItemListContainer/>}/>
                <Route path={"/item/:id"} element={<ItemDetailContainer/>}/>
              </Routes>
            </article>
          </div>
        </div>
        
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
