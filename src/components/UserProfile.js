import React, { useState } from 'react';
import UserCard from './UserCard';
import { Divider } from 'semantic-ui-react';

import {
  Container,
  Header,
  UserInfo,
  About,
  HeaderRight,
  ProfileImg,
  UserName,
  FollowButton,
  UserBar
} from './Styled';

function UserProfile() {
  const [following, setFollowing] = useState('Follow');
  return (
    <Container>
      <Header>
        <ProfileImg src={require('../img/CL.png')} />
        <UserInfo>
          <UserName>Connie Lane</UserName>
          <About>San Francisco, CA</About>
        </UserInfo>
        <HeaderRight>
          <FollowButton onClick={() => setFollowing('Following')}>
            {following}
          </FollowButton>
        </HeaderRight>
      </Header>
      <UserBar>
        <Divider horizontal>
          <a href='http://www.google.com'>Entries</a>
          <p>&mdash;</p>
          <a href='http://www.google.com'>20 Followers</a>
          <p>&mdash;</p>
          <a href='http://www.google.com'>16 Following</a>
        </Divider>
      </UserBar>
      <UserCard />
    </Container>
  );
}

export default UserProfile;
