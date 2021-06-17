import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
//services
import getDataFromApi from "../services/getDataFromApi";
import ls from "../services/localStorage";
////Components///
import Header from "./Header";
import MoreInfo from "./MoreInfo";
import FormFilter from "./FormFilter";
import ListPerson from "./ListPerson";
import Footer from "./Footer";
import "../styles/App.scss";

import CardDetail from "./CardDetail";

//prueba mensaje de error aqui
import ErrorMsg from "./ErrorMsg";
import ResetBtn from "./resetBtn";

const App = () => {
  //estado inicial del array, OR se llena con lo guardado  OR comienza vacío
  const [personajes, setPersonajes] = useState(ls.get("personajes") || []);

  //para filtrar dspues crear constant   y guardar en el ls tmb
  const [filterNamePerson, setFilterNamePerson] = useState(
    ls.get("filterNamePerson", "")
  );

  const [filterGender, setFilterGender] = useState(ls.get("filterGender", ""));

  //FILTRAR ESPECIES
  // const [filterSpeciePerson, setFilterSpeciePerson] = useState (ls.get ('filterSpeciePerson', '') )

  //effects
  /////////////////////////////////////////////////////////////////////////////////
  //-- PREGUNTAS   if (users.length === 0) {   +por que no va?

  useEffect(() => {
    getDataFromApi().then((personajesData) => {
      setPersonajes(personajesData);
      //USO D ESORT PARA ORDEN ALFABÉTICO
    });
  }, []);

  useEffect(() => {
    ls.set("personajes", personajes);
  }, [personajes]);

  useEffect(() => {
    ls.set("filterNamePerson", filterNamePerson);
  }, [filterNamePerson]);

  ///////MEJOR AGRUPAR, No?

  // useEffect(() => {
  //   ls.set('personajes', personajes);
  //   ls.set('filterNamePerson', filterNamePerson);
  // });

  // filtros de Handle : name, gender ,
  const handleFilter = (personajes) => {
    if (personajes.key === "name") {
      setFilterNamePerson(personajes.value);
    }
  }; //aqui iria un else para las especies?

  // render filter
  const filteredPersonajes = personajes
    .filter((pj) => {
      return pj.name.toLowerCase().includes(filterNamePerson.toLowerCase());
    })
    .filter((personajes) => {
      if (filterGender === "") {
        return true;
      } else {
        return personajes.gender === filterGender;
      }
    });

  //Nueva funcion para usar ruta para  ver tarjetita por tarjetita
  const renderCardDetail = (cards) => {
    const routeCardId = cards.match.params.personajeId;
    const foundCardPerson = personajes.find(
      (personaje) => personaje.id === parseInt(routeCardId)
    );

    if (foundCardPerson) {
      return <CardDetail personaje={foundCardPerson} />;
    } else {
      return <p> No se ha encontrado ningún personaje</p>;
    }
  };

  // Reset btn
  const handleReset = () => {
    //Vuelve al estado filternamePerson Vacío
    setFilterNamePerson("");
  };

  return (
    <>
      <Header> </Header>
      <Switch>
        <Route exact path="/">
          <main>
            <FormFilter
              filterName={filterNamePerson}
              handleFilter={handleFilter}
              //meter más filtros
            ></FormFilter>

            <ResetBtn resetBtn={handleReset}></ResetBtn>

            <ListPerson personajes={filteredPersonajes} />
          </main>
        </Route>

        <Route path="/CardPerson/:personajeId" render={renderCardDetail} />

        
      </Switch>

      <nav>
        <MoreInfo> </MoreInfo>
      </nav>
      <Footer> </Footer>
    </>
  );
};

export default App;
