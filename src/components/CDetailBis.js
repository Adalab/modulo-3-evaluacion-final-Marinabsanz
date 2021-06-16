import React from 'react';
import { Link } from 'react-router-dom';

const CDetailBis= (props) => {
    const { name, species, gender, status, image , origin, episode} = props.personajes;

    <li key = {props.personajes.id} > </li>
return(
<>
     <div className= 'cardPerson-container2'>
     <article>
     <h2> {name} </h2>
      <img className="img"
       src={image} 
       alt={`foto de ${image}`}
        />
      <p> {species}</p>
      <p> {gender}</p>
      <p>{origin}</p>
      <p>{status}</p>
      <p>{episode}</p>

</article>
</div>

<Link to= "/" className= 'linkclassReturn'>
     Volver
</Link>
</> 

)
}

export default CDetailBis;