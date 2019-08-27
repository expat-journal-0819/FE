import React from "react";
import styled from 'styled-components'; 

const HeaderDiv = styled.div`     
    
    width: 700px;
    height: 50px;
    margin: 0 auto;
    
`;

function Header () {     
    
    return (
            
        <HeaderDiv className="Header"><h1>EXPAT JOURNAL</h1></HeaderDiv>    
       
        );    
    };
    
    export default Header;