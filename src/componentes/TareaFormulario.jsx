import React from "react"
import "../stylesheet/TareaFormulario.css"
function TareaFormulario(props) {
    return(
        <form className="tarea-formulario" >
            <input type="text" className="tarea-input" placeholder="Escribe una tarea" name="texto"/>
                <button className="tarea-boton">
                    Agregar Tarea
                </button>

        </form>
    )
}

export default TareaFormulario