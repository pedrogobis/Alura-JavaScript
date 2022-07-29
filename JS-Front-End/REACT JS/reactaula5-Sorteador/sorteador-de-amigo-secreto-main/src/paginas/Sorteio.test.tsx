import { render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import { useListaDeParticipantes } from "../state/hook/useListaDeParticipantes";
import Sorteio from "./Sorteio";

jest.mock('../state/hook/useListaDeParticipantes', () =>{
    return {
        useListaDeParticipantes: jest.fn()
    }
})

describe('A pagina de sorteio', () =>{
    const participantes = [
        'Bruno',
        'Michel',
        'Pedro'
    ]

    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes)
    })

    test('Todos os participantes, podem exibir seu amigo secreto', () => {
        render(
            <RecoilRoot>
                <Sorteio/>
            </RecoilRoot>
        )
        
        const opcoes = screen.queryAllByRole('option')

        expect(opcoes).toHaveLength(participantes.length)

    })
})