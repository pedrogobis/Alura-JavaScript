import React from "react";
import styles from "./Buscador.module.scss";
import { CgSearch } from 'react-icons/cg'; //Cg é a fonte, e no import ta CGSearch pq search é o item especifico

interface Props{
    busca: string,
    setBusca: React.Dispatch<React.SetStateAction<string>>;
}

export default function Buscador({busca, setBusca}: Props) {
    return(
        <div className={styles.buscador}>
            <input 
            value={busca} 
            onChange={evento => setBusca(evento.target.value)}
            />
            <CgSearch
                size={20}
                color="#4C4D5E"
            />
        </div>
    )
}