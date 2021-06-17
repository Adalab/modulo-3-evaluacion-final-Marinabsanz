import React from "react";
import CardPerson from "./CardPerson";

const ListPerson = (props) => {
  const pj = props.personajes.map((personaje) => {
    return (
      <li key={personaje.id} className="">
        <CardPerson personajes={personaje} />

      </li>
    );
  });
  return <section className="listPersons">{pj}</section>;
};

export default ListPerson;
