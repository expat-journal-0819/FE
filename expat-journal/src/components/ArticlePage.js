// Article Page .js
//import React, {useState,useEffect, Component, queryString} from "react";
import React from "react";
//import axios from "axios";
//import ArticleComment from './ArticleComment'; 

function getQueryVariable(variable){
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
          var pair = vars[i].split("=");
          if(pair[0] == variable){return pair[1];}
  }
  return(false);
}
  

export default class ArticlePage extends React.Component {
 render () {
  let url = window.location.href;  
  
  console.log(getQueryVariable(url));  
    
    
    console.log(url);
   
  
   
  

    return (

      <div></div>
    );

   }
   
}


