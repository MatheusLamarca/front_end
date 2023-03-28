import React from 'react';
import ReactDOM from 'react-dom/client';
import Mensagem from './componetes/basico/Mensagem';
import Card from './componetes/card/Card';
import Contador from './componetes/Contador/Contador';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Mensagem titulo="React 2023" cor="#444"/>
    
    <Card titulo="#1 - Exemplo" cor="#fc4"     
     aberto="true">
      <h1>Teste</h1>
      <Contador valor="25" />
      <Contador valor="6" />
    </Card>

    <Card titulo="#2 - Teste" cor="#f34"     
     aberto="false">
      <button >OK</button>
    </Card>

    {/* <h1>Teste</h1> */}
  </React.StrictMode>
);
