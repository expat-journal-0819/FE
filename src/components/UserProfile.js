import React from 'react';
import {
  Header,
  HeaderRight,
  ProfileImg,
  UserName,
  FollowButton
} from './Styled';

import UserCard from './UserCard';

function UserProfile() {
  return (
    <div>
      <Header>
        <ProfileImg src={require('../img/CL.png')} />
        <section className='user-info'>
          <UserName>Connie Lane</UserName>
          <p>San Francisco, CA</p>
        </section>
        <HeaderRight>
          <FollowButton>+ Follow</FollowButton>
        </HeaderRight>
      </Header>
      <UserCard />
    </div>
  );
}

export default UserProfile;
