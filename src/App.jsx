import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className='uk-background-secondary uk-height-viewport'>
      <Navbar />
      <div className='uk-section'>
        <div className='uk-container uk-container-expand uk-light'>
          <article class="uk-article">
            <ItemListContainer titulo={'Bienvenido a Flow Fitness'} mensaje={'Tienda online de equipos y accesorios de gimnasio de primera calidad.'} />
          </article>
        </div>
      </div>
    </div>
  )
}

export default App
