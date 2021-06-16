import React from 'react';
import CardPerson from './CardPerson';

const List = (props) => {

  const pjElements = props.personajes.map (personajes => {
   return (
      
      <CardPerson personajes= {personajes} />  
   );
  });

   return (
<section className=''>
  <ul className='listPersons' > {pjElements}</ul>
</section>

   );

  };
  
export default List;
