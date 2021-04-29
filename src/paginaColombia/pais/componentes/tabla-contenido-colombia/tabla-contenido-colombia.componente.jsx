import React from 'react';
import './tabla-contenido-colombia.estilo.css';
import Region from '../region/region.componente';
import Departamento from '../departamento/departamento.componente';


const TablaContenidoColombia = (props) => {

    //console.log = (props.listaDepartamento);

    return (
        <div className="tabla-contenido-colombia.container">
            <b>Regiones - Departamentos</b>
            {props.listaDepartamento.map((categoty, index) => {
                return (
                    <React.Fragment key={categoty.cod}>
                      <Region nombreRegion={categoty.nombre}/>
                      {categoty.departamento.map((departamento,indexdepartamento)=>{
                        return (
                          <Departamento key={departamento.codDep}
                           departamento={departamento}    
                          /> 
                        );
                      })}
                    </React.Fragment>
              );
            })}                  
        </div>
    );
}

export default TablaContenidoColombia;