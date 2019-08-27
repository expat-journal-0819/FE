// Article Page .js
//import React, {useState,useEffect, Component, queryString} from "react";
import React from "react";
//import axios from "axios";
//import ArticleComment from './ArticleComment'; 

 

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

let authid = getUrlParameter('authorId'); 

export default class ArticlePage extends React.Component {

  render () {

  
    
    
    console.log(authid);
   
  
   
  

    return (

      <div></div>
    );

   }
   
}


