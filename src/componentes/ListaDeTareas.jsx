import React from "react";
import TareaFormulario from "../componentes/TareaFormulario"
import "../stylesheet/ListaDeTareas.css"
import { useState } from "react";


function ListaDeTareas() {

    const [tareas,setTareas]=useState([])
    return(
        <>
            <TareaFormulario/>
            <div className="tareas-lista-contenedor">
              LISTA DE TAREAS
            </div>
        </>
    )
}
export default ListaDeTareas