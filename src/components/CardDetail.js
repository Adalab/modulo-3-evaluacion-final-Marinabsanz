import React from 'react';
import { Link } from 'react-router-dom';

const CardDetail= (props) => {
    const { name, species, gender, status, image , origin, episode} = props.personaje;

    
return(
<>
<Link to= "/" className= 'classBtn'>
     Volver
</Link>
     <div className= 'cardPerson-container2'>
     <article>
     <h2> {name} </h2>
      <img className="img"
       src={image} 
       alt={`foto de ${image}`}
        />
      <p> Especie: {species}</p>
      <p> Género:{gender}</p>
      <p>Planeta:{origin}</p>
      <p>Estado :{status}</p>
      <p>Episodio: {episode}</p>

</article>
</div>


</> 

)
}

export default CardDetail;