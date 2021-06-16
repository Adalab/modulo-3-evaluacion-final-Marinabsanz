import React, { useState, useEffect } from "react";
import FormFilter from "./FormFilter";


import List from "./List";
import "../styles/App.scss";
import logo from "../images/rickandmorty-logo.png";


import { Route, Switch } from "react-router-dom";
import getDataFromApi from "../services/getDataFromApi";
import ls from "../services/localStorage";

//prueba mensaje de error aqui
import ErrorMsg from './ErrorMsg';

const App = () => {
  /////////ESTADO
  const [personajes, setPersonajes] = useState(ls.get("pj", []));

  //para filtrar dspues crear constant   y guardar en el ls tmb
  const [filterNamePerson, setFilterNamePerson] = useState (ls.get ('filterNamePerson', ''));
  //no muy segura de usarlo o no xa filterperson  


  //PARA FILTRAR ESPECIES 
  // const [filterSpeciePerson, setFilterSpeciePerson] = useState (ls.get ('filterSpeciePerson', '') )

  
  //effects
  useEffect(() => {
      getDataFromApi().then((personajesData) => {
        setPersonajes(personajesData);
      });
  }, []);

  useEffect(() => {
    ls.set("personajes", personajes);
  }, [personajes]);

// filtros de Handle 
const handleFilter = (personajes) => {
  if (personajes.key === "name") {
    setFilterNamePerson(personajes.value);
  }
};

 // render filter
 const filteredPersonajes = personajes.filter((personaje) => {
  return personaje.name.toLowerCase().includes(filterNamePerson.toLowerCase());
});

  
  return (

    //AQUI empezar con switch path y cosas raras


    <>
      <header className="">
       
        <h1>
          <img src={logo} alt="Rick and Morty logo" className="logo" />
        </h1>
      </header>
      <Switch> 
      <Route exact path="/">
      <main>
        <FormFilter
        filterName={filterNamePerson} handleFilter={handleFilter}> </FormFilter>
        <List personajes={filteredPersonajes} />
      </main>
      </Route>
      <Route path="./CardPersonDetail/ " />
      </Switch>

      <footer
      className="footer"
      Marina Benítez Sánchez>
      </footer>
    </>
  );
};

export default App;
