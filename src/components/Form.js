import React from 'react';
import getDataFromApi from "../services/getDataFromApi";


const Form= (props) => {
//crear state en el form
// const [personajes, setPersonajes] = useState();

// useEffect(() => {
//   getDataFromApi().then((personajesData) => {
//     setPersonajes(personajesData);

//     // console.table (personajesData)
//   });
// }, []);

    return(
    
    <>
      <h2> Formulario </h2>
      <form className="">
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
          </>

    )
    
    }
    

    export default Form;