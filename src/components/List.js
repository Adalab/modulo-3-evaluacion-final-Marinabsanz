import React from 'react';
import CardPerson from './CardPerson';
import ErrorMsg from './ErrorMsg';

const List = (props)=> {

  const pj = props.personajes.map (personajes => {


    //dar error si no buscas nada
    if (props.personajes.prim === '')
    {
      <ErrorMsg> </ErrorMsg>
    } //otro error 
    else if (props.personajes.length=== 0){ 
      <ErrorMsg> </ErrorMsg>
    }
    else {
      return (
        <li key= {personajes.id} className=''> 
       <CardPerson personajes= {personajes} />  
       </li>
    );
    }

  });

   return (
<section className=''>
  <ul className='listPersons' > {pj}</ul>
</section>

   );

  };
  
export default List;
