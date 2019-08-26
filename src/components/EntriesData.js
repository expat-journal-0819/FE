import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EntriesData() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/articles').then(res => {
      setPost(res.data);
      console.log(res.data);
    });
  }, []);

  return <div>{post.data}</div>;
}

export default EntriesData;
