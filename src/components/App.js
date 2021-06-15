import React, { useState, useEffect } from 'react';
import CompB  from './CompB';
import CompC from './CompC';
import '../styles/App.scss';
import { Route, Switch } from 'react-router-dom';
import getDataFromApi from '../services/getDataFromApi';



function App() {

const [personajes, setPersonajes] = useState ();

useEffect (() =>  {  
 getDataFromApi().then ((personajesData) => {
setPersonajes(personajesData);

console.table (personajesData)
 });
 } , []);

 ///localStorage  

  return (
    <>

    <form>   
    <h1>Hola</h1>
    </form>
</>
  );

  }

export default App;
