

import React from 'react';

const ResetBtn= (props) => {

    return(
    
        <button className="classBtn-Container classBtn" 
        onClick={props.resetBtn}>
          <i className="fas fa-trash"></i> Borrar Búsqueda
        </button>
    )
   
    
    }
    
    
    export default ResetBtn;