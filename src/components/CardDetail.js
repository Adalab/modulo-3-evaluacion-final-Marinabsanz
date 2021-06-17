import React from 'react';
import { Link } from 'react-router-dom';

const CardDetail= (props) => {
    const { name, species, gender, status, image , origin, episode} = props.personaje;

    
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

<Link to= "/" className= 'classBtn'>
     Volver
</Link>
</> 

)
}

export default CardDetail;