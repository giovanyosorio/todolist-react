import React from "react";
import TareaFormulario from "../componentes/TareaFormulario"
import "../stylesheet/ListaDeTareas.css"
import { useState } from "react";
import Tarea from "../componentes/Tarea"


function ListaDeTareas() {

    const [tareas,setTareas]=useState([])

    const agregarTarea=tarea=>{
        //console.log("tarea agregada")
        console.log(tarea);
        if(tarea.texto.trim()){
            tarea.texto=tarea.texto.trim()
            const tareasActualizadas=[tarea,...tareas]
            setTareas(tareasActualizadas)
        }
    }

    const eliminarTarea=id=>{
        const tareasActualizadas=tareas.filter(tarea=>tarea.id!==id)
        setTareas(tareasActualizadas)
        console.log("eliminando")
    }

    const completarTarea=id=>{
        console.log("tarea completada");
        const tareasActualizadas=tareas.map(tarea=>{
            if(tarea.id===id){
                tarea.completada=!tarea.completada
            }
            return tarea
        })
        setTareas(tareasActualizadas)
        
    }
    return(
        <>
            <TareaFormulario 
            onSubmit={agregarTarea}
            />
            <div className="tareas-lista-contenedor">
              {
                tareas.map((tarea)=>
                    <Tarea
                    key={tarea.id}
                    id={tarea.id}
                    texto={tarea.texto}
                    completada={tarea.completada}
                    completarTarea={completarTarea}
                    eliminarTarea={eliminarTarea}
                       
                    />
                )
              }
            </div>
        </>
    )
}
export default ListaDeTareas