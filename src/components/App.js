import React, { useState, useEffect } from "react";
import CardPerson from "./CardPerson";
import CardPersonDetail from "./CardPersonDetail";
import Form from "./Form";
import Person from "./Person";
import "../styles/App.scss";
// import { Route, Switch } from "react-router-dom";
import getDataFromApi from "../services/getDataFromApi";

function App() {
  const [personajes, setPersonajes] = useState();

  useEffect(() => {
    getDataFromApi().then((personajesData) => {
      setPersonajes(personajesData);

      // console.table (personajesData)
    });
  }, []);

  ///localStorage

  return (
    <>
      <form className="classForm">
        <fieldset className="classField">
          <legend> Busca a tu personaje</legend>
        </fieldset>
        <div className="rowClass">
          <div className="classInputDiv">
            <input
              name="nombre"
              className="formControl"
              type="text"
              placeholder="Busca a tu personaje"
            />
          </div>
          <div className="classSelect">
            <select className="formControl" name="especie">
              <option value=""> Selecciona la especie</option>
            </select>
          </div>
        </div>


        <div className= 'classForm'>
          <input
          type= 'submit'
          className= 'classBtn'
          value= 'Buscar personaje'

            />
            </div>
      </form>
      <Form> </Form>
      <Person> </Person>
    </>
  );
}

export default App;
