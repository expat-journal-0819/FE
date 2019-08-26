// import React from 'react';
import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  height: 300px;
  margin: 0 auto;
  margin-top: 100px;
  width: 70%;
`;

// Left of header
export const ProfileImg = styled.img`
  width: 300px;
  border: 1px solid #f7f7f7;
  border-radius: 50%;
`;

export const UserName = styled.h1`
  font-size: 2.5rem;
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
  font-size: 1rem;
  border-radius: 20px;
  outline: 0;
  height: 40px;
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
  background-image: url({props.image});

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
  padding: 20px;
`;

export const CardBottomRight = styled.p`
  padding: 20px;
`;
export const CardBottomLeft = styled.p`
  padding: 20px;
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
