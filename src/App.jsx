import { useState } from 'react'
import frecodecamplogo from "./imagenes/freecodecamp-logo.png"


import "./App.css"
function App() {


  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo' src={frecodecamplogo} alt="freecodecamp-logo" />

      </div>

    </div>
  )
}

export default App
