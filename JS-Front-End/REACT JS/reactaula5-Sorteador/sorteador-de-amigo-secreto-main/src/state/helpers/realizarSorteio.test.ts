import { realizarSorteio } from "./realizarSorteio"

describe('dado um sorteio de amigo secreto', () => {
    test('cada participante não sorteie o proprio nome', () =>{
        const participantes = [
            'Maria J',
            'Marta',
            'Michel',
            'Lucas'
        ]

        const sorteio =  realizarSorteio(participantes)

        participantes.forEach(partipante =>{
            const amigoSecreto =  sorteio.get(partipante)
            expect(amigoSecreto).not.toEqual(partipante)
        })

    })
})