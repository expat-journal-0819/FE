import React from "react";
import styled from 'styled-components'; 

const HeaderDiv = styled.div`     
    
    width: 700px;
    height: 50px;
    margin: 0 auto;
    
`;

function Header () {     
    
    return (
            

        <HeaderDiv className="Header"><h1>EXPAT JOURNAL</h1>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.34/browser.min.js"></script>
         <script src="https://cdnjs.cloudflare.com/ajax/libs/marked/0.3.6/marked.min.js"></script>
        </HeaderDiv>    
       
        );    
    };
    
    export default Header;