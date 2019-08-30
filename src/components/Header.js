import React from "react";
import styled from 'styled-components'; 

const HeaderDiv = styled.div`     
    
    width: 700px;
    height: auto;
    margin: 0 auto;
    
`;

function Header () {     
    
    return (
            

        <HeaderDiv className="Header"><div><h1>EXPAT JOURNAL</h1></div>
                    
                    <div>
                    <ul>
                    <li><a href="http://localhost:3000">Home</a></li>
                    <li><a href="http://localhost:3000/UserProfile">My Profile</a></li>
                    <li><a href="http://localhost:3000">Login</a></li>
                    <li><a href="http://localhost:3000">Register</a></li>
                    <li><a href="http://127.0.0.1:5500/src/about.html">About</a></li>
                    </ul>
                    </div>
                     
        </HeaderDiv>    
       
        );    
    };
    
    export default Header;