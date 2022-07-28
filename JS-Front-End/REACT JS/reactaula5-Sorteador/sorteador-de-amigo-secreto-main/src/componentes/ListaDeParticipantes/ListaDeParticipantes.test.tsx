import { render, screen } from '@testing-library/react'
import React from 'react'
import { RecoilRoot } from 'recoil'
import { useListaDeParticipantes } from '../../state/hook/useListaDeParticipantes'
import ListaParticipantes from './index'

jest.mock('../../state/hook/useListaDeParticipantes', () =>{
    return {
        useListaDeParticipantes: jest.fn()
    }
})


describe('Uma lista vazia de participantes', () => {
    
    beforeEach(() =>{
        (useListaDeParticipantes as jest.Mock).mockReturnValue([])
    })

    test('deve ser renderizada sem elementos.', () => {
        render(
            <RecoilRoot>
                <ListaParticipantes />
            </RecoilRoot>
        )
        const itens = screen.queryAllByRole('listaitem')
        expect(itens).toHaveLength(0)
    }
    )
})

describe('Uma lista preenchida de participantes', () => {
    
    const participantes: string[] = ['Maria', 'Michel']

    beforeEach(() =>{
        (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes)
    })

    test('deve ser renderizada com elementos.', () => {
        render(
            <RecoilRoot>
                <ListaParticipantes />
            </RecoilRoot>
        )
        const itens = screen.queryAllByRole('listaitem')
        expect(itens).toHaveLength(!0)
    }
    )
})