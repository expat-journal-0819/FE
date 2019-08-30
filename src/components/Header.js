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
                    <li><a href="https://expat-journal-0819.herokuapp.com/api/auth/login">Login</a></li>
                    <li><a href="https://expat-journal-0819.herokuapp.com/api/auth/register">Register</a></li>
                    <li><a href="#about">About</a></li>
                    </ul>
                    </div>
                     
        </HeaderDiv>    
       
        );    
    };
    
    export default Header;