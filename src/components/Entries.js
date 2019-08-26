import React from 'react';
import {
  CardColumn,
  Card,
  CardContainer,
  CardTopRight,
  CardTopLeft,
  CardBottomLeft,
  CardBottomRight,
  TopOfCard,
  BottomOfCard
} from './Styled';

export default function Entries(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <h2>{props.date}</h2>
      <h2>{props.country}</h2>
    </div>
  );
}
