import React from 'react';
import { Link } from 'react-router-dom';

const CDetailBis= (props) => {
    const { name, species, gender, status, image , origin, id} = props.personajes;

    <li key = {id} > </li>
return(
<div className= 'cardPerson-container'>
<article>
<Link to= "/" className= 'linkclassReturn'>
     Volver
</Link>
<h2> Detalle del personaje </h2>
<h4> {name} </h4>
      <img className="img"
       src={image} 
       alt={`foto de ${image}`}
        />
      <p> {species}</p>
      <p> {gender}</p>
      <p>{origin}</p>

</article>
</div>

)

}


export default CDetailBis;