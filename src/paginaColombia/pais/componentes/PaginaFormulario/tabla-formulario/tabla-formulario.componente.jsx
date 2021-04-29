import React from 'react';
import TituloFormulario from '../tituloFormulario/titulo-formulario.componente';
import './tabla-formulario.estilo.css';


const TablaFormulario = () => {

 

    return (
        <div className ="tabla-formulario-cont">

            <div>
                <TituloFormulario/>
            </div> 
            <div>
                <form>
                    <table>
                        <tr>
                            <td>
                                Region
                            </td>
                            <td>
                                <select>
                                    <option value="r1">Andina</option>
                                    <option value="r2">Caribe</option>
                                     <option value="r3">Amazonica</option>
                                    <option value="r4">Pacifica</option>
                                </select>
                            </td>
                        </tr>
                        <tr> 
                            <td>Nombre</td> {'   '}
                            <td><input type="text"/></td>
                        </tr>
                        <tr> 
                            <td>Poblacion</td> {'   '}
                            <td><input type="text"/></td>
                        </tr>
                        <tr> 
                            <td>Superficie</td> {'   '}
                            <td><input type="text"/></td>
                        </tr>

                    </table>
                    <div>

                        <button>
                        Guardar Informacion
                        </button>

                    </div>
                    
                </form>
            </div>
        </div>   
    );
}

export default TablaFormulario;