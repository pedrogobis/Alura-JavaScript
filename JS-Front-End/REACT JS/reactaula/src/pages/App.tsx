import React, { useState } from 'react';
import Cronometro from '../components/cronometro';
import Formulario from '../components/Forms';
import Lista from '../components/lista';
import { ITarefa } from '../types/tarefas';
import style from './App.module.scss';// importando como um objeto


function App() {
  const [tarefas, setTarefas] =  React.useState<ITarefa[] | []>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();
  
  function selecionaTarefa(tarefaSelecionada: ITarefa ){
    setSelecionado(tarefaSelecionada)
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id? true: false
    })));
  }

  function finalizarTarefa(){
    if(selecionado){
      setSelecionado(undefined)
      setTarefas(tarefasAnteriores =>
        tarefasAnteriores.map(tarefa => {
          if(tarefa.id === selecionado.id){
            return {
              ...tarefa,
              selecionado: false,
              completado: true
            }
          }
          return tarefa
        })
        )
    }
  }

  return (// virou uman chave
    <div className={style.AppStyle}> 
    
     <Formulario setTarefas={setTarefas} />
     <Lista 
      tarefas={tarefas}
      selecionaTarefa={selecionaTarefa}
      />
     <Cronometro 
     selecionado={selecionado} 
     finalizarTarefa={finalizarTarefa}
     />
    </div>
  );
}

export default App;
