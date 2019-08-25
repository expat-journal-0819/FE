// Landing Page.js 
import React, {useState,useEffect} from "react";
import axios from "axios";
import Card from '../components/LandingPageCard'; 



const LandingPage = () => {

 
  const [data, setData]= useState([]);
  useEffect( () => {   

    axios.get('http://localhost:3001/articles')
    .then( response => {
      
      setData(response.data); 

     // let i = 0;

      //for(i in response.data) {
      //console.log(response.data[i]["comments"])
    //}
    })  
    .catch(error => console.log('You got an error.', error))
  }, []);

 
  return (     
    

    <div className="Card">          
    
    
    {data.map( key=> (<Card key={key.id} props={key}/>))}
                   
    </div>     

    
  );
}

export default LandingPage;
