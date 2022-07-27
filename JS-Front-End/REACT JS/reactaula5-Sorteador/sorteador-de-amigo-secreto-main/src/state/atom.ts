import { atom } from "recoil";

export const listaDeParticipantesState = atom<string[]>({
    key: 'listaDeParticipantesState',
    default: []
})

