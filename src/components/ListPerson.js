import React from "react";
import CardPerson from "./CardPerson";
import NotFound from './NotFound';

const ListPerson = (props) => {
let pj = '';
console.log(props)

  if (props.personajes.length === 0) {
    return <NotFound   filterNamePerson= {props.filterNamePerson}/>;
  }
  else {

    pj = props.personajes.map((personaje) => {
      return (
        <li key={personaje.id} className="">
          <CardPerson personajes={personaje} />
  
        </li>
      );
    });
  } 
 

  
  return <section className="listPersons ">{pj}</section>;
};

export default ListPerson;


  
