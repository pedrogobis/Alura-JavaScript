import React from "react";
import { ITarefa } from "../../types/tarefas";
import Item from "./item";
import style from './Lista.module.scss';

interface Props{
    tarefas: ITarefa[],
    selecionaTarefa:(tarefaSelecionada: ITarefa)=> void
}

function Lista({ tarefas, selecionaTarefa }: Props ){
    
    return(
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item) => (
                    // retirarmos as funções direto no li, e exportamos para um arquivo externo
                    <Item
                    selecionaTarefa ={selecionaTarefa}
                    key={item.id} // tipamos ele fora da funcao
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