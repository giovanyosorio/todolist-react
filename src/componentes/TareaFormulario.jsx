import React,{useState} from "react"
import "../stylesheet/TareaFormulario.css"


function TareaFormulario(props) {

    const [input,setInput]=useState("")

    const manejarCambio=e=>{
        
        setInput(e.target.value)
        console.log(e.target.value  )
    }

    const manejarEnvio=e=>{
        e.preventDefault()
        console.log("enviandi",e);
        const tareaNueva= {
            id:"12345",
            texto:input,
            completada:false
        }
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