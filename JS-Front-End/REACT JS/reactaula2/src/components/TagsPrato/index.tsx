import styles from './TagsPrato.module.scss'
import classNames from 'classnames';
import { Prato } from 'types/Prato';


export default function TagsPratos({
	category,
	size,
	serving,
	price
}: Prato){
    return(
        <div className={styles.item__tags}>
          <div className={classNames({
            [styles.tags__tipo]: true,
            [styles[`tags__tipo__${category.label.toLocaleLowerCase()}`]]: true
          })}>
          {category.label}
          </div>
          <div className={styles.item__porcao}>
          	{size}g
          </div>
          <div className={styles.item__qtdpessoas}>
            Serve {serving} pessoa{serving === 1? '' : 's'}
          </div>
          <div className={styles.item__valor}>
            R${price.toFixed(2)}
          </div>
         </div>
    );
}