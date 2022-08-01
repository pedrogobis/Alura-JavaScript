import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import { useListaDeParticipantes } from "../state/hook/useListaDeParticipantes";
import { useResultadoDoSorteio } from "../state/hook/useResultadoDoSorteio";
import Sorteio from "./Sorteio";

jest.mock('../state/hook/useListaDeParticipantes', () => {
    return {
        useListaDeParticipantes: jest.fn()
    }
})



jest.mock('../state/hook/useResultadoDoSorteio', () => {
    return {
        useResultadoDoSorteio: jest.fn()
    }
})

describe('A pagina de sorteio', () => {
    const participantes = [
        'Bruno',
        'Michel',
        'Pedro'
    ]


    const resultado = new Map([
        ['Bruno', 'Michel'],
        ['Michel', 'Pedro'],
        ['Pedro', 'Bruno']
    ])


    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes);
        (useResultadoDoSorteio as jest.Mock).mockReturnValue(resultado);

    })

    test('Todos os participantes, podem exibir seu amigo secreto', () => {
        render(
            <RecoilRoot>
                <Sorteio />
            </RecoilRoot>
        )

        const opcoes = screen.queryAllByRole('option')

        expect(opcoes).toHaveLength(participantes.length + 1 ) // pois ja vem com mais uma option por padrão

    })

    
    test('o amigo secreto é exibido quando solicitado', () => {
        render(<RecoilRoot>
            <Sorteio />
        </RecoilRoot>)

        const select = screen.getByPlaceholderText('Selecione o seu nome')
        
        fireEvent.change(select, {
            target: {
                value: participantes[0]
            }
        })

        const botao = screen.getByRole('button')

        fireEvent.click(botao)

        const amigoSecreto = screen.getByRole('alert')

        expect(amigoSecreto).toBeInTheDocument()

    })
    
})