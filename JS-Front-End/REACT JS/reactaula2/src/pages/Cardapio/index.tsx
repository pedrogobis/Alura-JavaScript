import styles from './Cardapio.module.scss'// import do modulo css.
import logo from '../../assets/logo.svg' // precisamos importar a img como um objeto, aparente tem dois jeitos, e do outro modo serve pra manter como svg

export default function Cardapio(){
    return(
        <main>
            <nav className={styles.menu}>
                <img src={logo} alt="Aluroni" />
            </nav>
            
        </main>
    )
}