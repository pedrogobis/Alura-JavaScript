import styles from './Cardapio.module.scss'// import do modulo css.

export default function Cardapio(){
    return(
        <main>
            <nav className="menu">

            </nav>
            <button className={styles.botao}> ola mundo eu sou um botao</button>
            <a href="#" className={styles.botao}>Eu pareço como um botao</a>
        </main>
    )
}