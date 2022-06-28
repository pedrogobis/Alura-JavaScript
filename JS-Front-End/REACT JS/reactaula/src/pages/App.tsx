import React from 'react';
import Cronometro from '../components/cronometro';
import Formulario from '../components/Forms';
import Lista from '../components/lista';
import { ITarefa } from '../types/tarefas';
import style from './App.module.scss';// importando como um objeto


function App() {
  const [tarefas, setTarefas] =  React.useState<ITarefa[] | []>([])
  return (// virou uman chave
    <div className={style.AppStyle}> 
    
     <Formulario setTarefas={setTarefas} />
     <Lista tarefas={tarefas} />
     <Cronometro />
    </div>
  );
}

export default App;
