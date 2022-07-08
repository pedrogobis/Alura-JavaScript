import styles from './NotFound.module.scss'
import stylesTema from 'styles/Tema.module.scss'
import { ReactComponent as NotFound} from 'assets/not_found.svg'
import classNames from 'classnames'
import { useNavigate} from 'react-router-dom'

export default function NotFoud(){
  const navigate = useNavigate();
	
	return(
        <div className={classNames({
            [styles.container]: true,
            [stylesTema.container]: true
    		})}>
					<button onClick={() =>{
							navigate(-1)
					}}>
						{'< Voltar'}
					</button>
            <NotFoud/>
        </div>
    )
}