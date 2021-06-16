import React from "react";
import CardPerson from "./CardPerson";
import ErrorMsg from "./ErrorMsg";

const List = (props) => {
  const pj = props.personajes.map((personaje) => {
    return (
      <li key={personaje.id} className="">
        <CardPerson personajes={personaje} />
      </li>
    );
  });

//MIRAR QUÉ PASA EN LA FUNCION al comprobar. NO va, 
  const renderPersonaje = () => {
    console.log(props.personajes.length);
    if (props.personajes.length === 0) {
      <p> Busca de nuevo</p>
    } else {
      <ul className="listPersons"> {pj}</ul>;
    }
  };

  return <section className="listPersons">{pj}</section>;
};

export default List;
