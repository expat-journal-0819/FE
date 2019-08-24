// Landing Page.js 
import React from 'react';
import React, {useState,useEffect} from "react";
import './App.css';
import axios from "axios";
import LandingPageCard from '../components/LandingPageCard'; 
import Header from './components/Header';


const App = () => {

 
  const [data, setData]= useState([]);
  useEffect( () => {   

    axios.get('http:localhost:3001/landing-articles/')
    .then( response => {
      
      setData(response.data.results); 
     
      console.log(response.data.results)

    })  
    .catch(error => console.log('You got an error.', error))
  }, []);

 
  return ( 

    
    <div className="App">

    <div className="cards">            
    
        {data.map( key=> (<Card key={key.name} props={key}/>))}
                   
    </div>  

    </div>

    
  );
}

export default App;
