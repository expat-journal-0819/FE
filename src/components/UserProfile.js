import React from 'react';
import {
  Header,
  HeaderRight,
  ProfileImg,
  UserName,
  FollowButton
} from './Styled';

import Entries from './Entries';

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
      <Entries />
    </div>
  );
}

export default UserProfile;
