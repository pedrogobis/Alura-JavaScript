import { useSetRecoilState } from "recoil"
import { IEvento } from "../../interfaces/IEvento"
import { obeterId } from "../../util"
import { listaDeEventosState } from "../atom"

const useAdicionarEvento = () => {
    const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState)
    return (evento: IEvento) =>{
        const hoje = new Date()
        if(evento.inicio < hoje){
            throw new Error("Eventos não podem ser cadastrados com data menor que a data atual")
        }
        evento.id = obeterId()
        return setListaDeEventos(listaAntiga => [...listaAntiga, evento])
    }

}

export default useAdicionarEvento