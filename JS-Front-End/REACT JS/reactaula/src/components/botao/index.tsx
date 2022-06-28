import React from "react";
import style from './Botao.module.scss';

class Botao extends React.Component <{
    children?: React.ReactNode, type?: "button"| "submit" | "reset" | undefined 
}>{
    
    render() { // jsx
        //const estaAtivo = false;
        //const styles={
           // backgroundColor: estaAtivo ? "green" : "red"
            
        //}
        const {type = "button"} = this.props;
        return(
            // retorna um html
            <button type={type} className={style.botao}>
                {this.props.children}
            </button>
        )
    }
}

export default Botao;