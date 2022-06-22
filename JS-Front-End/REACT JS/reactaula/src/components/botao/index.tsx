import React from "react";
import style from './Botao.module.scss';

class Botao extends React.Component <{
    children?: React.ReactNode
}>{
    
    render() { // jsx
        //const estaAtivo = false;
        //const styles={
           // backgroundColor: estaAtivo ? "green" : "red"
            
        //}
        
        return(
            // retorna um html
            <button className={style.botao}>
                {this.props.children}
            </button>
        )
    }
}

export default Botao;