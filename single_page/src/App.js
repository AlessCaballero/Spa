import React, { useState } from 'react';
import Home from './components/Home';
import Registro from './components/Registro';
import Listar from './components/Listar';
import './components/style/Home.css';
import './components/style/Listar.css';


function App() {
  const [route, setRoute] = useState('home');

  const renderPage = () => {
    switch (route) {
      case 'Home':
        return <Home setRoute={setRoute} />;
      case 'Registro':
        return <Registro setRoute={setRoute} />;
      case 'Listar':
        return <Listar setRoute={setRoute} />;
      default:
        return <Home setRoute={setRoute} />;
    }
  };

  return (
    <>
    {renderPage()}
    </>
  );
}

export default App;
