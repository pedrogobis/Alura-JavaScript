import React from "react";
import style from './Relogio.module.scss'

export default function Relogio(){
    return(
        <React.Fragment>
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioNumero}>0</span>

        </React.Fragment>
    )
}

/*
Outra forma de fazer o react nao precisar de uma classe pai é

deixando uma tag em branco no começo e no final

<>
    <span>0</span>
    <span>0</span>
    <span>:</span>
    <span>0</span>
    <span>0</span>
    <span>:</span>
    <span>0</span>
    <span>0</span>
</>
*/