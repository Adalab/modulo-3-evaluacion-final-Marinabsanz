import React, { useState, useEffect } from "react";
import CardPerson from "./CardPerson";
import CardPersonDetail from "./CardPersonDetail";
import FormFilter from "./FormFilter";
import List from "./List";
import "../styles/App.scss";
import logo from "../images/rickandmorty-logo.png";
import { Route, Switch } from "react-router-dom";
import getDataFromApi from "../services/getDataFromApi";
import ls from "../services/localStoraje";

const App = () => {
  /////////ESTADO
  const [personajes, setPersonajes] = useState(ls.get("pj", []));
  console.log(personajes);

  //para filtrar dspues crear constant   y guardar en el ls tmb
  // const [filterName, setFilterName] = useState (ls.get ('filterName', ''));
  //effects

  useEffect(() => {
    if (personajes.length === 0) {
      getDataFromApi().then((personajesData) => {
        setPersonajes(personajesData);

        console.table(personajesData);
      });
    }
  }, []);

  useEffect(() => {
    ls.set("personajes", personajes);
  }, [personajes]);

  return (
    <>
      <header className="">
        <h1>
          <img src={logo} alt="Rick and Morty logo" className="logo" />
        </h1>
      </header>
      <main>
        <FormFilter> </FormFilter>
        <List personajes={personajes} />
      </main>
      <footer className="footer">Marina Benítez Sánchez</footer>
    </>
  );
};

export default App;
