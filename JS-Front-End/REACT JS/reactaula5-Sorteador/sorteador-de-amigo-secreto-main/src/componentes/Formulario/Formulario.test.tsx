import { fireEvent, render, screen, act } from '@testing-library/react'
import React from 'react'
import { RecoilRoot } from 'recoil'
import Formulario from './Formulario'


describe('O comportamento do Formulario.tsx', () => {
    test('quando o input está vazio, novos participantes não podem ser adicionados', () => {

        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>
        )
        //encontrar no dom o input
        const input = screen.getByPlaceholderText('insira os nomes dos participantes')
        // encontrar o botão
        const botao = screen.getByRole("button")
        //garantir que o input esteja no documento
        expect(input).toBeInTheDocument()
        // garantir que o botão esteja desabilitador
        expect(botao).toBeDisabled()
    })
    
    test('Como adicionar um participante caso exista um nome preenchido', () => {
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>
        )
        //encontrar no dom o input
        const input = screen.getByPlaceholderText('insira os nomes dos participantes')
        // encontrar o botão
        const botao = screen.getByRole("button")
    
        // inserir um valor no input
        fireEvent.change(input, {
            target:
                { value: 'Ana da silva' }
        })
        // clicar no botão de submeter
        fireEvent.click(botao)
    
        // garantir que o input esteja com o foco ativo 
        expect(input).toHaveFocus()
        // garantir que o input nao tenha um valor 
        expect(input).toHaveValue("")
    })
    
    test('Nomes duplicados não devem ser adicionados na lista', () => {
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>
        )
        const input = screen.getByPlaceholderText('insira os nomes dos participantes')
    
        const botao = screen.getByRole("button")
    
    
        fireEvent.change(input, {
            target:
                { value: 'Ana da silva' }
        })
    
        fireEvent.click(botao)
        // adicionando o mesmo nome 
        fireEvent.change(input, {
            target:
                { value: 'Ana da silva' }
        })
    
        fireEvent.click(botao)
    
        // pegamos a mensagemdeerro
        const mensagemDeErro = screen.getByRole('alert')
    
        expect(mensagemDeErro.textContent).toBe('Nomes duplicados não são permitidos!')
    
    })
    
    test('a mensagem de erro deve sumir apos o timer', () => {
        jest.useFakeTimers()
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>
        )
        const input = screen.getByPlaceholderText('insira os nomes dos participantes')
    
        const botao = screen.getByRole("button")
    
    
        fireEvent.change(input, {
            target:
                { value: 'Ana da silva' }
        })
    
        fireEvent.click(botao)
        // adicionando o mesmo nome 
        fireEvent.change(input, {
            target:
                { value: 'Ana da silva' }
        })
    
        fireEvent.click(botao)
        let mensagemDeErro = screen.queryByRole('alert')
        expect(mensagemDeErro).toBeInTheDocument()
    
        // esperar N segundos.
        act(() => {
            jest.runAllTimers()
    
    
        });
    
    
        mensagemDeErro = screen.queryByRole('alert')
        expect(mensagemDeErro).toBeNull()
    
    
    
    })
})
