import styles from './Itens.module.scss';
import cardapio from './itens.json';
import Item  from './Item';


export default function Itens(){
    return(
        <div>
            {cardapio.map(item => (
                <div className={styles.itens}>
                    <Item 
                        key={item.id}
                        {...item}
                    />
                </div>
            ))}
        </div>
    )
}