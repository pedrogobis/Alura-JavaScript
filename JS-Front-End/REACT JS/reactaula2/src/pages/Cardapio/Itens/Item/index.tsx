import styles from './Item.module.scss';
import logo from 'assets/logo.svg';
import { Prato } from 'types/Prato';
import TagsPratos from 'components/TagsPrato';
import { useNavigate } from 'react-router-dom';


export default function Item(props: Prato){
    const {id, title, description, photo} = props;
    const navigate = useNavigate()
    return(
        <div className={styles.item} onClick={()=> navigate(`/prato/${id}`)}>
            <div className={styles.item__imagem}>
                <img src={photo} alt={title} />
            </div>
            <div className={styles.item__descricao}>
                <div className={styles.item__titulo}>
                    <h2>
                        {title}
                    </h2>
                    <p>
                        {description}
                    </p>
                </div>
                <TagsPratos {...props} />
            </div>
        </div>
    )
}