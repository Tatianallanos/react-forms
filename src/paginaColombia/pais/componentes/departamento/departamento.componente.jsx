import React from 'react';

import './departamento.estilo.css';

const Departamento = (props) => {
    return (
        <div className="departamento-cont">

          {
            props.departamento.poblacion === 10
            ? //Si-verdad
              <span className="departamento-without-poblacion">{props.departamento.nombre}</span>
            : //No-Falso
              <span>{props.departamento.nombre}</span>
          }
        
          {' '}
          
          {props.departamento.superficie === 10000
            ? //Si-verdad
            <span className="departamento-without-superficie">{props.departamento.superficie}</span>
          : //No-Falso
            <span>{props.departamento.superficie}</span>

          }
          {' '}
          {
            props.departamento.poblacion
          }


        </div>   
    );
}

export default Departamento;