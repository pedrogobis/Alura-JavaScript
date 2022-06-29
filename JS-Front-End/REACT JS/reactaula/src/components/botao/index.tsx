import React from "react";
import style from './Botao.module.scss';


interface Props{
    children?: React.ReactNode, 
    type?: "button"| "submit" | "reset" | undefined ,
    onClick?: () => void
}

function Botao({onClick, type, children }: Props){
    return(
        // retorna um html
        //no onclick precisamos fazer links bind entre eles
        <button onClick={onClick} type={type} className={style.botao}>
            {children}
        </button>
    )
}
/*

Vamos refatorar isso

class Botao1 extends React.Component <{
    children?: React.ReactNode, 
    type?: "button"| "submit" | "reset" | undefined ,
    onClick?: () => void
}>{
    
    render() { // jsx
        //const estaAtivo = false;
        //const styles={
           // backgroundColor: estaAtivo ? "green" : "red"
            
        //}
        const {type = "button", onClick} = this.props;
        return(
            // retorna um html
            //no onclick precisamos fazer links bind entre eles
            <button onClick={onClick} type={type} className={style.botao}>
                {this.props.children}
            </button>
        )
    }
}*/

export default Botao;