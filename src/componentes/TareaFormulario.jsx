import React,{useState} from "react"
import "../stylesheet/TareaFormulario.css"
import {v4 as uuidv4} from "uuid"

function TareaFormulario(props) {

    const [input,setInput]=useState("")

    const manejarCambio=e=>{
        
        setInput(e.target.value)
        console.log(e.target.value  )
    }

    const manejarEnvio=e=>{
        e.preventDefault()
        console.log("enviandi");
        const tareaNueva= {
            id:uuidv4(),
            texto:input,
            completada:false
        }
        //console.log(tareaNueva);
        props.onSubmit(tareaNueva)
    }

    return(
        <form className="tarea-formulario" 
        onSubmit={manejarEnvio}>
            <input onChange={manejarCambio }
            type="text" className="tarea-input" placeholder="Escribe una tarea" name="texto"/>
                <button className="tarea-boton">
                    Agregar Tarea
                </button>

        </form>
    )
}

export default TareaFormulario