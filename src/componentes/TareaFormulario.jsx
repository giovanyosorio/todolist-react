import React from "react"
import "../stylesheet/TareaFormulario.css"
function TareaFormulario(props) {
    return(
        <form className="tarea-formulario" >
            <input type="text" className="tarea-input" placeholder="Escribe una tarea" name="texto"/>
                <button className="tarea-boton">
                    {props.tarea}
                </button>

        </form>
    )
}

export default TareaFormulario