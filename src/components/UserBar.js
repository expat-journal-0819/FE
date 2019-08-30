import React from 'react'
import Followers from './Followers'
import Following from './Following'
import { Divider } from 'semantic-ui-react'
import { Bar, Sort, refs, BarMargin } from './Styled'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import UserCard from './UserCard'

function Posts() {
  return (
    <Sort>
      Sort By: &nbsp;
      <select name='Sortation'>
        <option value='most recent'>Most Recent</option>
        <option value='most liked'>Most Liked</option>
      </select>
    </Sort>
  )
}

function UserBar() {
  return (
    <Router>
      <Bar style={BarMargin}>
        <Divider horizontal>
          <Link to='/user' style={refs} className='refz'>
            8 Posts
          </Link>
          <span>&mdash;</span>
          <Link to='/followers/' style={refs} className='refz'>
            10 Followers
          </Link>
          <span>&mdash;</span>
          <Link to='/following/' style={refs} className='refz'>
            10 Following
          </Link>
        </Divider>

        <Route path='/user/' exact component={UserCard} />
        <Route path='/followers/' component={Followers} />
        <Route path='/following/' component={Following} />
      </Bar>
    </Router>
  )
}

export default UserBar
