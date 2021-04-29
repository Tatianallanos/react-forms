import React from 'react';
import TablaFormulario from './componentes/PaginaFormulario/tabla-formulario/tabla-formulario.componente';
import TablaGeneralColombia from './componentes/tabla-general-colombia/tabla-general-colombia.componente';


const PaginaColombia = () => {

    let listaDepartamento = [
        {
            cod:"r1",
            nombre:'Andina',
            departamento:[
                {
                    codDep:"r1d1",
                    nombre:"Antioquia",
                    superficie:109665,
                    poblacion:23452436,
                },                    
                {
                    codDep:"r1d2",      
                    nombre:"Boyaca",
                    superficie:109665,
                    poblacion:2341112,
                },
                {
                    codDep:"r1d3",
                    nombre:"Caldas",
                    superficie:109665,
                    poblacion:2341112,   
                }
            ]
        },
        {
            cod:"r2",
            nombre:'Caribe',
            departamento:[
                {
                    codDep:"r2d1",
                    nombre:"Atlantico",
                    superficie:63612,
                    poblacion:125,
                },
                {
                    codDep:"r2d2",
                    nombre:"Bolivar",
                    superficie:63612,
                    poblacion:125,
                },
                {
                    codDep:"r2d3",
                    nombre:"La Guajira",
                    superficie:63612,
                    poblacion:125,
                },
                {
                    codDep:"r2d4",
                    nombre:"Cordoba",
                    superficie:63612,
                    poblacion:125,
                },
                {
                    codDep:"r2d5",
                    nombre:"Cesar",
                    superficie:63612,
                    poblacion:125,
                }                
            ]
            },
            {
                cod:"r3",
                nombre:'Amazonica',
                departamento:[
                {
                    codDep:"r3d1",
                    nombre:"Amazonas",
                    superficie:23818,
                    poblacion:7,
                },
                {
                    codDep:"r3d2",
                    nombre:"Caqueta",
                    superficie:23818,
                    poblacion:7,
                },
                {
                    codDep:"r3d3",
                    nombre:"Putumayo",
                    superficie:23818,
                    poblacion:7,
                },
            ]
        },
        {
                cod:"r4",
                nombre:'Pacifica',
                departamento:[
                {
                    codDep:"r4d1",
                    nombre:"Cauca",
                    superficie:23818,
                    poblacion:7,
                },
                {
                    codDep:"r4d2",
                    nombre:"Valle del cauca",
                    superficie:23818,
                    poblacion:7,
                },
                {
                    codDep:"r4d3",
                    nombre:"Choco",
                    superficie:23818,
                    poblacion:7, 
                }
            ]

        }
        ];

    return (
        <> 
            <TablaGeneralColombia listaDepartamento={listaDepartamento} />
            <TablaFormulario/>

        </>
    );
}
export default PaginaColombia;

