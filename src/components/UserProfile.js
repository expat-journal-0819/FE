import React, { useState } from 'react'
import UserCard from './UserCard'
import UserBar from './UserBar'
import Nav from './Nav'

import {
  Container,
  Header,
  UserInfo,
  About,
  HeaderRight,
  ProfileImg,
  UserName,
  FollowButton,
  MessageButton
} from './Styled'

function UserProfile() {
  const [following, setFollowing] = useState('Follow')
  return (
    <div>
      <Container>
      <Nav />
      <Header>
        <ProfileImg src={require('../img/CL.png')} />
        <UserInfo>
          <UserName>Connie Lane</UserName>
          <About>
            <span>@C_Lane</span>
            <p>San Francisco, CA</p>
          </About>
        </UserInfo>
        <HeaderRight>
          <MessageButton>Message</MessageButton>
          <FollowButton onClick={() => setFollowing('Following')}>
            {following}
          </FollowButton>
        </HeaderRight>
      </Header>
      <UserBar />
      </Container>
    </div>
  )
}

export default UserProfile
