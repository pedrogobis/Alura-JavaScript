import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import { useListaDeParticipantes } from "../../state/hook/useListaDeParticipantes";
import Rodape from "./index";

jest.mock('../../state/hook/useListaDeParticipantes', () =>{
    return {
        useListaDeParticipantes: jest.fn()
    }
})

const mockNavegacao = jest.fn()

jest.mock('react-router-dom', ()=>{
    return{
        useNavigate: () => {
            return mockNavegacao;
        }
    }
})

describe('Quando não existem participantes suficientes', () => {

    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue([])
    })

    test('a brincadeira não pode ser iniciada', () => {
        render(
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>
        )
        const botao = screen.getByRole('button')

        expect(botao).toBeDisabled()
    })
})

describe('Quando existem participantes suficientes', () => {
    
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(['Michel', 'Pedro', 'Maria'])
    })
    
    test('A brincadeira pode ser iniciada', ()=>{
        render(
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>
        )
        const botao = screen.getByRole('button')

        expect(botao).not.toBeDisabled()
    })

    test('A brincadeira foi iniciada', () => {
        render(
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>
        )
        const botao = screen.getByRole('button')
        
        fireEvent.click(botao)

        expect(mockNavegacao).toHaveBeenCalledTimes(1)
        expect(mockNavegacao).toHaveBeenCalledWith('/sorteio')

    })
})