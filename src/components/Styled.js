// import React from 'react';
import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.div`
  display: flex;
  height: 300px;
  margin: 0 auto;
  margin-top: 100px;
  width: 70%;
  justify-content: center;
`;

// Left of header
export const ProfileImg = styled.img`
  width: 250px;
  height: 250px;
  border: 1px solid #f7f7f7;
  border-radius: 50%;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;
`;

export const UserName = styled.h1`
  font-size: 2.5rem;
  line-height: 15px;
`;

export const About = styled.p`
  padding-left: 3px;
`;

// Right of header
export const HeaderRight = styled.div`
  width: 50%;
  text-align: right;
  padding-top: 100px;
`;

export const FollowButton = styled.button`
  padding-left: 30px;
  padding-right: 30px;
  font-size: 1.2rem;
  border-radius: 20px;
  outline: 0;
  border: 0;
  height: 40px;
  background: #9acd32;
  color: white;
  font-weight: 700;

  &:hover {
    pointer: cursor;
  }
`;

// Cards
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: space-between;
  width: 500px;
  height: 280px;
  border-radius: 20px;
  background: #f7f7f7;
  margin: 20px;
  transition: all 0.5s ease;
  box-shadow: 0px 9px 15px -4px #ccc;
  color: white;
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.5);

  &:hover {
    transform: scale(1.04);
  }
`;

export const CardTopLeft = styled.p`
  padding: 20px;
  font-size: 2rem;
  font-weight: 600;
`;

export const CardTopRight = styled.p`
  padding-right: 20px;
  padding-top: 30px;
  text-transform: uppercase;
  font-size: 1.1rem;
`;

export const CardBottomRight = styled.p`
  padding: 20px;

  img {
    width: 35px;
  }
`;
export const CardBottomLeft = styled.p`
  padding-left: 20px;
  position: relative;
  top: 20px;
  font-size: 1.5rem;
`;

export const TopOfCard = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BottomOfCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FlexFlex = styled.div`
  display: flex;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 300px;
`;

export const UserBar = styled.div`
  width: 70%;
  margin: 0 auto;

  p {
    display: inline;
    font-weight: 400;
    color: #ccc;
    padding: 0 10px;
  }

  a {
    color: #5f9ead;

    &:hover {
      color: #008b8b;
    }
  }
`;
