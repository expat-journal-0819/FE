import React, { useState } from 'react';
import UserCard from './UserCard';
import UserBar from './UserBar';

import {
  Header,
  UserInfo,
  About,
  HeaderRight,
  ProfileImg,
  UserName,
  FollowButton
} from './Styled';

function UserProfile() {
  const [following, setFollowing] = useState('Follow');
  return (
    <>
      <Header>
        <ProfileImg src={require('../img/CL.png')} />
        <UserInfo>
          <UserName>Connie Lane</UserName>
          <About>
            <span>@C_Lane</span>
            <p>Photographer | San Francisco, CA</p>
          </About>
        </UserInfo>
        <HeaderRight>
          <FollowButton onClick={() => setFollowing('Following')}>
            {following}
          </FollowButton>
        </HeaderRight>
      </Header>
      <UserBar />
      <UserCard />
    </>
  );
}

export default UserProfile;
