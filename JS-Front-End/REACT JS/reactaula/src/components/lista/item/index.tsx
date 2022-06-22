import style from '../Lista.module.scss'

// esta entrando um objeto, que vai ser recebido como props, depois vamos dessestruturar 
export default function Item({tarefa, tempo}:{tarefa: string, tempo: string}){// dados recebidos, já desestruturados
    
    return(
        <li className={style.item}>
            <h3> {tarefa} </h3> 
            <span> {tempo} </span>
        </li>
        )
}