import styles from './Cardapio.module.scss'// import do modulo css.
import {ReactComponent as Logo} from '../../assets/logo.svg' //Outra forma de importar, de uma maneira mais facil, manteve um svg como svg, e ficou até mais limpo o codigo

export default function Cardapio(){
    return(
        <main>
            <nav className={styles.menu}>
                <Logo></Logo>
            </nav>
            
        </main>
    )
}