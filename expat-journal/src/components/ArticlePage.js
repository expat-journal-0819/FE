// Article Page .js
import React, {useState,useEffect } from "react";
import axios from "axios";
import ArticleCard from './ArticleComment';
import CommentBox from './ArticleCommentBox';


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

const authID = getUrlParameter('authorId'); 
const theurl = 'http://localhost:4000/articles?id=' + authID;

console.log(theurl);

function ArticlePage () {
   
  const [data, setData]= useState([]);
  useEffect( () => {   

   axios.get(theurl)
    .then( response => {
     
      setData(response.data); 
             
    })  
    .catch(error => console.log('You got an error.', error))
  },[]);

  


  return (     
    
    
    <div className="Card">          
      
     
      {data.map( key=> (<ArticleCard key={key.id} props={key}/>)) }

      
      <CommentBox />

    </div>     
   
   
    

    
  );
}

export default ArticlePage;