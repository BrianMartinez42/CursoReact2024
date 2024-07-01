import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className='uk-background-secondary uk-height-viewport'>
      <Navbar />
      <div className='uk-section'>
        <div className='uk-container uk-container-expand uk-light'>
          <article className="uk-article">
            <ItemListContainer titulo={'Bienvenido a Flow Fitness'} mensaje={'Tienda online de equipos y accesorios de gimnasio de primera calidad.'} />
          </article>
        </div>
      </div>      
      <Footer />
    </div>
  )
}

export default App
