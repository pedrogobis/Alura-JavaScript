import React from 'react';
import { useSetRecoilState } from 'recoil';
import { IEvento } from '../../interfaces/IEvento'
import { listaDeEventosState } from '../../state/atom';
import useDeletarEvento from '../../state/hooka/useDeletarEvento';
import style from './Evento.module.scss';
import EventoCheckbox from './EventoCheckbox';

const Evento: React.FC<{ evento: IEvento }> = ({ evento }) => {

  const deletaEvento = useDeletarEvento()

  
  // const excluirEvento = () => {
  //   setListaDeEventos((listaAntiga: any[]) => listaAntiga.filter(evt => evt.id !== evento.id))
  // }

  const estilos = [
    style.Evento
  ]

  if (evento.completo) {
    estilos.push(style.completo)
  }

  return (<div className={estilos.join(' ')}>

    <EventoCheckbox evento={evento}  />
    <div className="cards-info">
      <h3 className={style.descricao}>{evento.descricao} - {evento.inicio.toLocaleDateString()}</h3>
    </div>
    <i className="far fa-times-circle fa-2x" onClick={() => deletaEvento(evento)}></i>
  </div>)
}

export default Evento