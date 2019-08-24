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
               color: red;
        }
    }
    

`;


const StyledHeading = styled.h1`

    font-size: .6rem;
    color: white;
    
`;

function Card ({props}) {
    
    return (
        
        
        <div className="cards">
            
            <WrapperDiv>             
            
                           
                <StyledHeading>Birth Year:   {props.birth_year}</StyledHeading>
                <StyledHeading>Gender:   {props.gender}</StyledHeading>
                <StyledHeading>Hair Color:   {props.hair_color}</StyledHeading>
                <StyledHeading>Skin Color:   {props.skin_color}</StyledHeading>
                <StyledHeading>Mass:   {props.mass}</StyledHeading>  
            
            </WrapperDiv>
    
        </div>
        );    
    
    };    