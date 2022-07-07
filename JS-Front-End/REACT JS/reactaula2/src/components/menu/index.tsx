import {ReactComponent as Logo} from 'assets/logo.svg' //Outra forma de importar, de uma maneira mais facil, manteve um svg como svg, e ficou até mais limpo o codigo
import styles from './menu.module.scss'
import {Link} from 'react-router-dom'

export default function Menu(){
    const rotas = [{
        label: 'Inicio',
        to:'/'        
    },{
      label: 'Cardapio',
      to: '/cardapio'
    },{
      label: 'Sobre',
      to:'/sobre'
    }]
    return(
        <nav className={styles.menu}>
                <Logo/>
                <ul className={styles.menu__list}>
                {rotas.map((rota, index) => (
                  <li key={index} className={styles.menu__link}>
                    <Link to={rota.to}>
                      {rota.label}
                    </Link>
                  </li>
                ))}
                </ul>
        </nav>
    );
}