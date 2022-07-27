import { useSetRecoilState } from "recoil"
import { listaDeParticipantesState } from "../atom"

export const useAdicionarParticipante = () => {
    const setLista = useSetRecoilState(listaDeParticipantesState)
    return (nomeDoParticipante:string) =>{
        return setLista(listaAtual => [...listaAtual, nomeDoParticipante])
    }
}