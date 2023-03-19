import { useEffect, useState } from 'react';
import Post from './Post';

export default function Posts() {
  const [userList, setUserList] = useState([]);
  const [error, setEroor] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setUserList(json))
      .catch((error) => setEroor(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <>
      <h1>POSTS</h1>
      <hr />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        userList.map((user) => {
          return <Post key={user.id} {...user}></Post>;
        })
      )}
    </>
  );
}
