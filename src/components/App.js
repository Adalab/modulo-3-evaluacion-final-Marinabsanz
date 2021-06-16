import React, { useState, useEffect } from "react";

import { Route, Switch } from "react-router-dom";
import getDataFromApi from "../services/getDataFromApi";
import ls from "../services/localStorage";

////Components///

import Header from './Header';
import MoreInfo from './MoreInfo';

import FormFilter from "./FormFilter";
import List from "./List";
import "../styles/App.scss";




//prueba mensaje de error aqui
import ErrorMsg from './ErrorMsg';
import ResetBtn from "./resetBtn";

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
       <Header> </Header>
      <Switch> 
      <Route exact path="/">
      <main>
        <FormFilter
        filterName={filterNamePerson} handleFilter={handleFilter}> </FormFilter>
        <ResetBtn> </ResetBtn>
        <List personajes={filteredPersonajes} />
      </main>
      </Route>
      <Route path="./CDetailBis/ " />
      </Switch>


      <Switch> 
      <nav>
      <MoreInfo> </MoreInfo>
      </nav>
      </Switch>
      <footer
      className="footer"
      Marina Benítez Sánchez>
      </footer>
    </>
  );
};

export default App;
