import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

const CardPerson = (props) => {
  const { name, species, gender,image , id} = props.personajes;

  <li key = {id} > </li>


  return (
    <Link to={`/CardPerson/${id}`}>
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


//PROBANDO LOS PROTOS 

CardPerson.propTypes  = {
CardPerson: PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  gender: PropTypes.string,
  species: PropTypes.string,
  image: PropTypes.string,
}),
};
