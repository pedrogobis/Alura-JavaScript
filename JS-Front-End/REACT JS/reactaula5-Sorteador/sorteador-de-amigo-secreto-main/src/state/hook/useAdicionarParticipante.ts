import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { erroState, listaDeParticipantesState } from "../atom"

export const useAdicionarParticipante = () => {
    const setLista = useSetRecoilState(listaDeParticipantesState)
    const lista = useRecoilValue(listaDeParticipantesState) // pega a lista
    const setErro = useSetRecoilState(erroState)

    return (nomeDoParticipante:string) =>{
        // Verificamos se o nome esta na lista, se tiver a gente define um erro com a mensagem.
        if(lista.includes(nomeDoParticipante)){
            setErro('Nomes duplicados não são permitidos!')// MOSTRA MSNG DE ERRO
            setTimeout(() =>{
                setErro("") // ZERA A MSG DE ERRO DPS DOS 5SEG
            },5000)
            return
        }

        return setLista(listaAtual => [...listaAtual, nomeDoParticipante])
    }
}