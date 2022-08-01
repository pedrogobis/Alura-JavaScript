import { useState } from "react"
import Card from "../componentes/Card"
import { useListaDeParticipantes } from "../state/hook/useListaDeParticipantes"
import { useResultadoDoSorteio } from "../state/hook/useResultadoDoSorteio"
import './Sorteio.css'


const Sorteio = () => {
    const participantes = useListaDeParticipantes()

    const [participanteDaVez, setParticipanteDaVez] = useState('')
    const [amigoSecreto, setAmigoSecreto] = useState('')

    const resultado = useResultadoDoSorteio()

    const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        if (resultado.has(participanteDaVez)) {
            setAmigoSecreto(resultado.get(participanteDaVez)!)

        }


    }

    return (<Card>

        <section className="sorteio">
            <h2>Quem vai tirar o papelzinho?</h2>
            <form onSubmit={sortear}>
                <select
                    required 
                    name="participantesDaVez"
                    id="participantesDaVez"
                    placeholder="Selecione o seu nome"
                    value={participanteDaVez}
                    onChange={evento => setParticipanteDaVez(evento.target.value)}
                >
                    <option>Selecione seu Nome</option>
                    {participantes.map(participante => <option key={participante}>{participante}</option>)}
                </select>
                <p>Click em sortear para ver quem é seu amigo secreto!</p>

                <button className="botao-sortear">Sortear</button>

            </form>
            {amigoSecreto && <p className="resultado" role="alert">{amigoSecreto}</p>}
        </section>
        <footer className="sorteio">
            <img src="/imagens/aviao.png" className="aviao" alt="um desenho de um aviao de papel" />
        </footer>
    </Card>
    )
}

export default Sorteio