import React, { useState } from 'react'
import {
  Card,
  CardTopRight,
  CardTopLeft,
  CardBottomLeft,
  CardBottomRight,
  TopOfCard,
  BottomOfCard
} from './Styled'

const hearts = {
  empty: 'https://i.ibb.co/QJSc4PN/icons8-heart-100.png',
  filled: 'https://i.ibb.co/rsGNTJQ/heart-Filled.png'
}

export default function Entries(props) {
  const [like, setLike] = useState(`${hearts.empty}`)

  const BgImg = {
    backgroundImage: `url(${props.image})`,
    backgroundSize: 'cover'
  }

  return (
    <Card style={BgImg}>
      <TopOfCard>
        <CardTopLeft>{props.location}</CardTopLeft>
        <CardTopRight>{props.date}</CardTopRight>
      </TopOfCard>
      <BottomOfCard>
        <CardBottomLeft>{props.title}</CardBottomLeft>
        <CardBottomRight>
          <img
            src={like}
            onClick={() => setLike(`${hearts.filled}`)}
            alt='like button'
          />
        </CardBottomRight>
      </BottomOfCard>
    </Card>
  )
}
