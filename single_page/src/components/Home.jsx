import React from 'react';
import './style/Home.css';

class Menu extends React.Component {
  render() {
    const { setRoute } = this.props;

    return (
      <div className="section">
        <div className="background"></div>
        <div className="tittleImg">
          <h1 className="section-h1">PROJECT CS-3 </h1>
          
        </div>
        
        <div className="buttons">
        <caption>PROJECT SOFTWARE CONTABLE</caption>
          <form>
            <button className="btn" onClick={() => setRoute('Registro')}>Registro</button>
          </form>
          <form>
            <button className="btn" onClick={() => setRoute('Listar')}>Listar</button>
          </form>
          <form>
            <button className="btn" onClick={() => setRoute('Home')}>Inicio</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Menu;
