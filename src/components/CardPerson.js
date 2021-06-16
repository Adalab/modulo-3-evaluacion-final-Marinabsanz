import React from "react";
import { Link } from 'react-router-dom';

const CardPerson = (props) => {
  const { name, species, gender, status, image , origin, id} = props.personajes;

  <li key = {id} className= ''> </li>


  return (
    <Link className= 'linkclass' to= { `/CardPerson/${id}`}>
      <div className= 'cardPerson-container'>   
      <article>
      <h4> {name} </h4>
      <img className="img"
       src={image} 
       alt={`foto de ${image}`}
        />
      <p> {species}</p>
      <p> {gender}</p>
    </article>
    </div>

     </Link> 
  );
};

export default CardPerson;
