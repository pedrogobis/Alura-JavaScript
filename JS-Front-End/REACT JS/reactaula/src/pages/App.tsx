import React from 'react';
import Cronometro from '../components/cronometro';
import Formulario from '../components/Forms';
import Lista from '../components/lista';
import style from './App.module.scss';// importando como um objeto


function App() {
  return (// virou uman chave
    <div className={style.AppStyle}> 
    
     <Formulario />
     <Lista />
     <Cronometro />
    </div>
  );
}

export default App;
