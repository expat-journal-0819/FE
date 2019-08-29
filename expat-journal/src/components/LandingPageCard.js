// Landing Page Card .js
import React from "react";
import styled from 'styled-components'; 
import { Link } from 'react-router-dom';
const WrapperDiv = styled.div`
   
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 10px 10px 10px 10px;
    width: 800px;
    height: 300px;
    margin: 0 auto;      
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 7px; 
    border: 2px black solid;
    &:hover {

        box-shadow: 2px 2px 2px 2px  rgb(240, 126, 126);
                
    }
    
    opacity: .95;
    margin-bottom: 5px; 
`;


const StyledHeading = styled.h1`

    font-size: .75rem;
    color: white;
    
`;

const StyledHeading2 = styled.h2`

    font-size: 1.5rem;
    color: white;
    
`;





function Card ({props}) {
    
    
    let url = "/ArticlePage/?authorId=" + props.authorId;
   

    return (        
        
            
            
            <WrapperDiv>             
            
                <div className="oneCard">     
                <br></br> 
                <StyledHeading>{props.date}</StyledHeading>

                <StyledHeading2>{props.title}</StyledHeading2>
                
                <StyledHeading>Posted by: {props.authorName}</StyledHeading> <br></br>  <br></br>           
                                
                

                <Link to={url}>Read The Post</Link>
               
                </div> 
                <div><StyledHeading><img src={props.url} height="225" width="325" alt="#"></img></StyledHeading></div>       
            </WrapperDiv>
    
      
        );    
    
    };    

    export default Card;