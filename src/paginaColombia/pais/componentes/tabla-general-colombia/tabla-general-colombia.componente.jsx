import React from 'react';
import './tabla-general-colombia.estilo.css';
import Titulo from '../titulo/titulo.componente';
import TablaContenidoColombia from '../tabla-contenido-colombia/tabla-contenido-colombia.componente';


const TablaGeneralColombia = (props) => {
    return (
        <div className ="tabla-general-colombia-cont">
            <Titulo/>
            <TablaContenidoColombia listaDepartamento={props.listaDepartamento}/>
            
        </div>   
    );
}

export default TablaGeneralColombia;

