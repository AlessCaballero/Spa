import React, { Component } from 'react';
import './style/Home.css';





class Listar extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
      }
    render() {
        const { setRoute } = this.props;
        return (
            <>
            <section className="section">
                <div>
                    <div className="tittleImg">
                        <h1 className="section-h1">PROJECT CS-3 <br/> </h1>
                    </div>
                    <table className="table">
                        <caption>EMPLEADOS</caption>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>NOMBRE</th>
                                <th>APELLIDO</th>
                                <th>CORREO</th>
                                <th>DOCUMENTO</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                        <td>123456789</td>
                        <td>Juan</td>
                        <td>Pérez</td>
                        <td>juan@example.com</td>
                        <td>ABC123456</td>
                        <td><a href='#'>Eliminar</a></td>
                        <td><a href='#'>Modificar</a></td>
                    </tr>
                    <tr>
                        <td>987654321</td>
                        <td>María</td>
                        <td>González</td>
                        <td>maria@example.com</td>
                        <td>DEF987654</td>
                        <td><a href='#'>Eliminar</a></td>
                        <td><a href='#'>Modificar</a></td>
                    </tr>
                    <tr>
                        <td>246813579</td>
                        <td>Carlos</td>
                        <td>Ruíz</td>
                        <td>carlos@example.com</td>
                        <td>GHI246813</td>
                        <td><a href='#'>Eliminar</a></td>
                        <td><a href='#'>Modificar</a></td>
                    </tr>


                            
                        </tbody>
                    </table>
                    <div className="buttons">
                        <input type="button" name="botonRegresar" value="Regresar al Menú" className="btn" onClick={() => setRoute('home')}/>
                    </div>
                </div>
            </section>
            </>
         );
    }
}
 
export default Listar;
