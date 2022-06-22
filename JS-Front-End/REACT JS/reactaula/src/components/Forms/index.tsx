import React  from "react";
import Botao from "../botao"
import './style.scss'

class Formulario extends React.Component{
    render(): React.ReactNode {
        return(
            <form className="novaTarefa">
                <div className="inputContainer">
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                    </label>
                    <input 
                    type="text"
                    name="tarefa"
                    id="tarefa"
                    placeholder="O que você quer estudar?"
                    required />
                </div>
                <div className="inputContainer">
                    <label htmlFor="tempo">
                        Tempo
                    </label>
                    <input 
                    type="time"
                    name="tempo"
                    step={1}
                    id="tempo"
                    min="00:00:00"
                    max="01:30:00"
                    required />

                </div>
                <Botao />
            </form>
        )
    }
}

export default Formulario;