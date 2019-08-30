// Article Page .js
import React, {useState,useEffect } from "react";
import axios from "axios";
import ArticleCard from './ArticleCard';
import '../AltApp.css';

const ArticlePage = (props) => {

  var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;
    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
  };

  const authid = getUrlParameter('id');

  const [data, setData]= useState([]);
  useEffect( () => {   

    axios.get('http://localhost:4000/articles?id=' + authid)
    .then( response => {
      
      setData(response.data); 
    
    })  
    .catch(error => console.log('You got an error.', error))
  }, []);

 
  return (     
    

    <div className="Card">          
    
    
    {data.map( key=> (<ArticleCard key={key.id} props={key}/>))}
                   
    </div>     

    
  );
}

export default ArticlePage;
