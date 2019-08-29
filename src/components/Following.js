import React, { useState, useEffect } from 'react'
import { Card, Icon } from 'semantic-ui-react'
import { FollowersContainer, FollowingCards, CardMargin } from './Styled'
import axios from 'axios'

function Following() {
  const [friends, setFriends] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:5000/friends')
      .then(info => {
        setFriends(info.data)
        console.log(info.data)
      })
      .catch(err => {
        console.log('Error: ', err)
      })
  }, [])

  const extra = (
    <a>
      <Icon name='user' />
      View Profile
    </a>
  )
  return (
    <FollowersContainer>
      <FollowingCards>
        {Array.from(friends).map(friend => (
          <Card
            style={CardMargin}
            image={friend.image}
            header={friend.name}
            meta={friend.handle}
            description={friend.friends}
            extra={extra}
          />
        ))}
      </FollowingCards>
    </FollowersContainer>
  )
}

export default Following
