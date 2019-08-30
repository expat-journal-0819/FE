// Landing Page Card .js
import React from "react";
import styled from 'styled-components'; 
import { Link } from 'react-router-dom';
import CommentBox from './ArticleCommentBox';
const WrapperDiv = styled.div`
   
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 10px 10px 10px 10px;
    width: 800px;
    min-height: 500px;
    margin: 0 auto;      
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 7px; 
    border: 1px darkgrey solid;
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
const StyledParagraph = styled.p`

    font-size .75rem;
    align: justify;
`;



function ArticleCard ({props}) {
       
    let url = "/UserProfile"
    return (        
        
            
            
            <WrapperDiv>             
            
            <div className="oneCard">     
            <div>
                
                <StyledHeading><img src={props.url} height="225" width="325" alt="#"></img></StyledHeading> </div> 
                
                <StyledHeading>{props.date}</StyledHeading>

                <StyledHeading2>{props.title}</StyledHeading2>
                
                <StyledHeading>Posted by: {props.authorName}</StyledHeading>                
                                
                <StyledParagraph>{props.text}</StyledParagraph>
                
                <img src="https://icon-library.net/images/person-icon-black/person-icon-black-21.jpg" height="20" width="auto" alt="#"></img>
                
                <Link to={url}>View This Profile</Link>
                
             </div> 
                    
                <div><CommentBox /></div>
                 
            </WrapperDiv>
            
      
        );    
    
    };    

    export default ArticleCard;