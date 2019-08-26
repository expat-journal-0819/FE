import React from 'react';
import {
  Card,
  CardTopRight,
  CardTopLeft,
  CardBottomLeft,
  CardBottomRight,
  TopOfCard,
  BottomOfCard
} from './Styled';

export default function Entries(props) {
  return (
    <Card>
      <TopOfCard>
        <CardTopLeft>{props.location}</CardTopLeft>
        <CardTopRight>{props.date}</CardTopRight>
      </TopOfCard>
      <BottomOfCard>
        <CardBottomLeft>{props.title}</CardBottomLeft>
        <CardBottomRight>&#10084;</CardBottomRight>
      </BottomOfCard>
    </Card>
  );
}
