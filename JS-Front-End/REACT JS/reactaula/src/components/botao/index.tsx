import React from "react";
import './style.scss';

class Botao extends React.Component{
    render(): React.ReactNode { // jsx
        //const estaAtivo = false;
        //const styles={
           // backgroundColor: estaAtivo ? "green" : "red"
            
        //}
        
        return(
            // retorna um html
            <button className="botao">
                Botao
            </button>
        )
    }
}

export default Botao;