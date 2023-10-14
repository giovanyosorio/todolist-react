import React from "react";
import TareaFormulario from "../componentes/TareaFormulario"
import "../stylesheet/ListaDeTareas.css"
import { useState } from "react";
import Tarea from "../componentes/Tarea"


function ListaDeTareas() {

    const [tareas,setTareas]=useState([])

    const agregarTarea=tarea=>{
        console.log("tarea agregada")
        console.log(tarea);
    }

    return(
        <>
            <TareaFormulario 
            onSubmit={agregarTarea}
            />
            <div className="tareas-lista-contenedor">
              {
                tareas.map((tarea)=>{
                    <Tarea
                        texto={tarea.texto}
                        completada={tarea.completada}
                    />
                })
              }
            </div>
        </>
    )
}
export default ListaDeTareas