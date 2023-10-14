import React,{useState} from "react"
import "../stylesheet/TareaFormulario.css"


function TareaFormulario(props) {

    const [input,setInput]=useState("")

    const manejarCambio=e=>{
        console.log("escribiendo...")
    }

    const manejarEnvio=e=>{
        const tareaNueva= {
            id:"12345",
            texto:"hola"
        }
    }

    return(
        <form className="tarea-formulario" >
            <input onChange={manejarCambio }
            type="text" className="tarea-input" placeholder="Escribe una tarea" name="texto"/>
                <button className="tarea-boton">
                    Agregar Tarea
                </button>

        </form>
    )
}

export default TareaFormulario