import Botao from '../botao';
import Relogio from './Relogio';
import style from './cronometro.module.scss'
import { tempoParaSegundos } from '../../common/utilis/time';
import { ITarefa } from '../../types/tarefas';
import { useEffect, useState } from 'react';

//tipagem
interface Props{
    selecionado: ITarefa | undefined,
    finalizarTarefa: () => void
}

export default function Cronometro({selecionado, finalizarTarefa}: Props){
    // console.log('conversao: ' + tempoParaSegundos('01:01:01'))
    const [tempo, setTempo] = useState<number>();//forçamos uma tipagem.
    
    //Use effect usa dois parametros, uma funcao e um array de dependencia
    useEffect(()=>{

        if(selecionado?.tempo){ // faz a verficação aqui se tempo não é null
            setTempo(tempoParaSegundos(selecionado.tempo))
        }
    }, [selecionado]);
    
    function regressiva(contador: number = 0) {
        setTimeout(() => {
          if(contador > 0) {
            setTempo(contador - 1);
            return regressiva(contador - 1);
          }
          finalizarTarefa();
        }, 1000);
      }

    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolhe um carad e inicie o Cronômetro</p>
            
            <div className={style.relogioWrapper}>
                <Relogio 
                tempo={tempo}
                />
            </div>
            <Botao onClick={() => regressiva(tempo)}>
                Começar!
            </Botao>
        </div>
    )
}

function finalizarTarefa() {
    throw new Error('Function not implemented.');
}
