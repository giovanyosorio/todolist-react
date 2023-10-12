import { useState } from 'react'
import frecodecamplogo from "./imagenes/freecodecamp-logo.png"
import Tarea from "../src/componentes/Tarea.jsx"


import "./App.css"
function App() {

  const [task,setTask]=useState("")
  return (
    <div className='aplicacion-tareas'>
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo' src={frecodecamplogo} alt="freecodecamp-logo" />

      </div>
      <div className="tareas-lista-principal">
        <h1>Mis tareas</h1>
          <Tarea texto="Aprender react"/>



      </div>
    </div>
  )
}

export default App
