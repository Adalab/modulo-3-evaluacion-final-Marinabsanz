import React  from 'react';

import List from './List';

 const Form= (props) => {


const submitPj = (e) => {
  e.preventDefault();
}

    return (
    
    <>
      <form className=""
      onSubmit= {submitPj}
      >
      <fieldset className="">
        <legend> Busca a tu personaje</legend>
      </fieldset>
      <div className="">
        <div className="">
          <input
            name="nombre"
            className=""
            type="text"
            placeholder="Busca a tu personaje"
            // onChange= {handleChange}

          />
        </div>
        <div className="">
          <select className="formControl" name="especie">
            <option value=""> Selecciona la especie</option>
          </select>
        </div>
      </div>


      <div className= ''>
        <input
        type= 'submit'
        className= 'classBtn'
        value= 'Buscar personaje'

          />
          </div>
          </form>

   <div>  
     <h4> Tus resultados</h4>
   

   </div>

   </>
    
    );
    
    }
    
  
    export default Form;