import styles from './Cardapio.module.scss'// import do modulo css.
import {ReactComponent as Logo} from 'assets/logo.svg' //Outra forma de importar, de uma maneira mais facil, manteve um svg como svg, e ficou até mais limpo o codigo
import Buscador from './Buscador';
import {useState} from "react";

export default function Cardapio(){
    const [busca, setBusca] = useState("");
    return(
        <main>
            <nav className={styles.menu}>
                <Logo/>            
            </nav>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    A casa do codigo e da massa
                </div>
            </header>
            <section className={styles.cardapio}>
                <h3 className={styles.cardapio__titulo}>Cardápio</h3>
                <Buscador 
                    busca={busca}
                    setBusca={setBusca}
                />

            </section>
        </main>
    )
}