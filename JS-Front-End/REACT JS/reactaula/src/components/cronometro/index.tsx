import Botao from '../botao';
import Relogio from './Relogio';
import style from './cronometro.module.scss'

export default function Cronometro(){
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolhe um carad e inicie o Cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio />
            </div>
            <Botao>
                Começar!
            </Botao>
        </div>
    )
}