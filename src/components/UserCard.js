import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Entries from './Entries';

import { CardContainer } from './Styled';

const UserCard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/articles')
      .then(info => {
        setData(info.data);
        console.log(info.data);
      })
      .catch(err => {
        console.log('Error: ', err);
      });
  }, []);

  return (
    <CardContainer>
      {Array.from(data).map(post => (
        <Entries
          title={post.title}
          date={post.date}
          location={post.location}
          image={post.image}
        />
      ))}
    </CardContainer>
  );
};

export default UserCard;
