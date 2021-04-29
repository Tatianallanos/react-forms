import React from 'react';
import './region.estilo.css';

const Region = (props) => {
    return (
        <div className="region-cont" >
          {props.nombreRegion}
        </div>   
    );
}

export default Region;