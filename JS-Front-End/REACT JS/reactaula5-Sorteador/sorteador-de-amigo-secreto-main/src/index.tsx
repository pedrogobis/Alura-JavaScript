import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Cabecalho from './componentes/Cabecalho'
import Card from './componentes/Card';
import Formulario from './componentes/Formulario/Formulario';

ReactDOM.render(
  <React.StrictMode>
    <Cabecalho/>
    <Formulario/>
    <Card/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
