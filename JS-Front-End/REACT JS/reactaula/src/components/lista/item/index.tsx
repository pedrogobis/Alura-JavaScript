import { ITarefa } from '../../../types/tarefas'
import style from '../Lista.module.scss'

// esta entrando um objeto, que vai ser recebido como props, depois vamos dessestruturar 
export default function Item({tarefa, tempo, selecionado, completado, id}:ITarefa){// dados recebidos, já desestruturados
    console.log('itematual:',{tarefa, tempo, selecionado, completado, id} )
    return(
        <li className={style.item}>
            <h3> {tarefa} </h3> 
            <span> {tempo} </span>

        </li>
        )
}