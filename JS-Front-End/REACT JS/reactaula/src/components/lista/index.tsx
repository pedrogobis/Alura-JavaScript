import React from "react";
import Item from "./item";
import style from './Lista.module.scss';

function Lista(){
    const tarefas = [{
        tarefa: 'React',
        tempo: '02:00:00'
    },{
        tarefa: 'Javascript',
        tempo: '01:00:00'
    },{
        tarefa:'Typescript',
        tempo: '03:00:01'
    }]
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