import React from "react";
import { ITarefa } from "../../types/tarefas";
import Item from "./item";
import style from './Lista.module.scss';


function Lista({ tarefas }: { tarefas: ITarefa[] }){
    
    return(
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    // retirarmos as funções direto no li, e exportamos para um arquivo externo
                    <Item
                    key={index} // tipamos ele fora da funcao
                    {...item}// desistruturando automaticamente. não funciona em todos os casos, pode dar problemas dependendo o projeto.
                    
                    /*
                    MANEIRA 1:
                    tarefa={item.tarefa} // declaramos que o item é objeto .tarefa é o mesmo que tarefa
                    tempo={item.tempo}*/
                    />
                ))}
                
            </ul>
        </aside>
    )
}

export default Lista;