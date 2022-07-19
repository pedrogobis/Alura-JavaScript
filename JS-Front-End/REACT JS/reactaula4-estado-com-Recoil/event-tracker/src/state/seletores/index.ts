import { selector } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { filtroDeEventos, listaDeEventosState } from "../atom";

export const eventosFiltradosState = selector({
    key: 'eventosFiltradosState',
    get: ({ get }) => {
        // esta acessando as informações do atomos e do states
        const filtro = get(filtroDeEventos)
        const todosOsEventos = get(listaDeEventosState)
        const eventos = todosOsEventos.filter(evento =>{
            if(!filtro.data){
              return true
            }else{
              const ehOMesmoDia = filtro.data.toISOString().slice(0,10) === evento.inicio.toISOString().slice(0,10)
              return ehOMesmoDia
            }
          })
          return eventos
    }
})


export const eventosAsync = selector({
  key:'eventosAsync',
  get: async () =>{
    const respostaHttp = await fetch('urlfic')
    const eventosJson: IEvento[] = await respostaHttp.json()
    return eventosJson.map(evento =>({
      ...evento,
      inicio: new Date(evento.inicio),
      fim: new Date(evento.fim)
    }))
  }
})