import React from 'react';
import CardPerson from './CardPerson';

const List = (props) => {

  const pj = props.personajes.map (personajes => {
   return (
      
      <CardPerson personajes= {personajes} />  
   );
  });

   return (
<section className=''>
  <ul className='listPersons' > {pj}</ul>
</section>

   );

  };
  
export default List;
