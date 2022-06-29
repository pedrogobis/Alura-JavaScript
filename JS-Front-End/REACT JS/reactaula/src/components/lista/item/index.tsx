import { ITarefa } from '../../../types/tarefas'
import style from '../Lista.module.scss'

interface Props extends ITarefa{

    selecionaTarefa:(tarefaSelecionada: ITarefa)=> void
}

// esta entrando um objeto, que vai ser recebido como props, depois vamos dessestruturar 
export default function Item(
    {
        tarefa,
        tempo,
        selecionado,
        completado,
        id,
        selecionaTarefa
    }: Props ) {// dados recebidos, já desestruturados
    console.log('itematual:',{tarefa, tempo, selecionado, completado, id} );
    return(
        <li 
            className={`${style.item} ${selecionado ? style.itemSelecionado : ''}`} 
            onClick={() => selecionaTarefa(
                {
                    tarefa,
                    tempo, 
                    selecionado,
                    completado, 
                    id
                }
            )}
            >
            <h3> {tarefa} </h3> 
            <span> {tempo} </span>

        </li>
        )
}