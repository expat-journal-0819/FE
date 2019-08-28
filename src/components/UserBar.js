import React from 'react';
import Followers from './Followers';
import Following from './Following';
import { Divider } from 'semantic-ui-react';
import { Bar, Sort, refs, BarMargin } from './Styled';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Posts() {
  return (
    <Sort>
      Sort By: &nbsp;
      <select name='Sortation'>
        <option value='most recent'>Most Recent</option>
        <option value='most liked'>Most Liked</option>
      </select>
    </Sort>
  );
}

function UserBar() {
  return (
    <Router>
      <Bar style={BarMargin}>
        <Divider horizontal>
          <Link to='/' style={refs}>
            8 Posts
          </Link>
          <span>&mdash;</span>
          <Link to='/followers/' style={refs}>
            10 Followers
          </Link>
          <span>&mdash;</span>
          <Link to='/following/' style={refs}>
            20 Following
          </Link>
        </Divider>

        <Route path='/' exact component={Posts} />
        <Route path='/followers/' component={Followers} />
        <Route path='/following/' component={Following} />
      </Bar>
    </Router>
  );
}

export default UserBar;
