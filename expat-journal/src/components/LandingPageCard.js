// Landing Page Card .js
import React from "react";
import styled from 'styled-components'; 

const WrapperDiv = styled.div`
   
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 10px 10px 10px 10px;
    width: 800px;
    height: 300px;
    margin: 0 auto;      
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px; 
    border: 2px black solid;
    

`;


const StyledHeading = styled.h1`

    font-size: .4rem;
    color: black;
    
`;

const StyledHeading2 = styled.h2`

    font-size: 1.5rem;
    color: black;
    
`;

const StyledParagraph = styled.p`

    font-size .4rem;
    align: justify;
`;

function Card ({props}) {
    
    return (        
        
            
            <WrapperDiv>             
            
                <div>     
                
                <StyledHeading>{props.date}</StyledHeading>

                <StyledHeading2>{props.title}</StyledHeading2>
                
                <StyledHeading>Posted by: {props.authorName}</StyledHeading>                
                                
                <StyledParagraph>{props.text}</StyledParagraph>

                <a href="./ArticlePage">Read The Post</a>
               
                </div> 
                <div><StyledHeading><img src={props.url} height="250" width="350" alt="#"></img></StyledHeading></div>       
            </WrapperDiv>
    
      
        );    
    
    };    

    export default Card;