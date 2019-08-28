import React, { useState, useEffect } from 'react';
import { Card, Icon } from 'semantic-ui-react';
import { FollowersContainer, FollowersCards, CardMargin } from './Styled';
import axios from 'axios';

function Followers() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/friends')
      .then(info => {
        setFriends(info.data);
        console.log(info.data);
      })
      .catch(err => {
        console.log('Error: ', err);
      });
  }, []);

  const extra = (
    <a>
      <Icon name='user' />
      View Profile
    </a>
  );
  return (
    <FollowersContainer>
      <FollowersCards>
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
      </FollowersCards>
    </FollowersContainer>
  );
}

export default Followers;
