// Landing Page Card .js
import React from "react";
import styled from 'styled-components'; 

const WrapperDiv = styled.div`
    
    padding: 10px 10px 10px 10px;
    width: 300px;
    height: 150px;
    margin: 0 auto;
    background-color: blue;    
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px;
    align="left";

    box-shadow: 2px 2px 2px 2px #ffff66;

    &:hover {

        box-shadow: 2px 2px 2px 2px red;
        
        h1 {
               color: white;
        }
    }
    

`;


const StyledHeading = styled.h1`

    font-size: .6rem;
    color: white;
    
`;

function Card ({props}) {
    
    return (
        
        
        
            
            <WrapperDiv>             
            
                           
                <StyledHeading>{props.id}</StyledHeading>
                <StyledHeading>{props.title}</StyledHeading>
                <StyledHeading>{props.authorId}</StyledHeading>
                <StyledHeading>{props.authorName}</StyledHeading>
                <StyledHeading>{props.url}</StyledHeading>
                <StyledHeading>{props.date}</StyledHeading>
                <StyledHeading>{props.text}</StyledHeading>
               
                
            
            </WrapperDiv>
    
      
        );    
    
    };    

    export default Card;