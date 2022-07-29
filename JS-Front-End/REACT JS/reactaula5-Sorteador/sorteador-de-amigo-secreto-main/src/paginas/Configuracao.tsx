import Card from "../componentes/Card"
import Formulario from "../componentes/Formulario/Formulario"
import ListaParticipantes from "../componentes/ListaDeParticipantes"
import Rodape from "../componentes/Rodape"


const Configuracao = () => {
    return (
        <Card>
            <section>
                <h2>Vamos Começar!</h2>
                <Formulario />
                <ListaParticipantes />
                <Rodape />
            </section>
        </Card>
    )
}

export default Configuracao