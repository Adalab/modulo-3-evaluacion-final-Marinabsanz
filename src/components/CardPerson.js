import React from "react";
import { Link } from 'react-router-dom';

const CardPerson = (props) => {
  const { name, species, gender, status, image , id} = props.personajes;

  <li key = {id} className= ''> </li>


  return (
    <Link className= 'linkclass' to= { `/CardPerson/${id}`}>
      <article>
      <img className="img"
       src={image} 
       alt={`foto de ${image}`}
        />
    
      <h4> {name} </h4>
      <p> {species}</p>
      <p> {gender}</p>
      <p> {status}</p>
      
    </article>
     </Link>
  );
};

export default CardPerson;
