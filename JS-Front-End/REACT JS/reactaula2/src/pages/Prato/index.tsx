import styles from './Prato.module.scss'
import { useNavigate, useParams} from 'react-router-dom';
import classNames from 'classnames';
import Cardapio from 'data/cardapio.json';
import TagsPratos from 'components/TagsPrato';



export default function Prato(){
	const { id } = useParams()
  const navigate = useNavigate()  
    const prato = Cardapio.find(item => item.id === Number(id) ||{})
		if(!prato){
			return '';
		}
    return(
        <>
					<button 
						className={styles.voltar}
						onClick={()=> navigate(-1)}
					>
						{'< Voltar'}
					</button>
					<section className={styles.container}>
						<h1 className={styles.titulo}>
							{prato.title}
						</h1>
						<div className={styles.imagem}>
							<img src={prato.photo} alt={prato.title} />
						</div>
						<div className={styles.conteudo}>
							<p className={styles.conteudo__descricao}>
								{prato.description}
							</p>
							<TagsPratos {...prato}/>
						</div>
					</section>
        </>
    )
}