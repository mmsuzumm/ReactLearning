import { useEffect, useState } from 'react';
import Post from './Post';

export default function Posts() {
  const API_URL = 'https://jsonplaceholder.typicode.com/posts'; // return array of object
  const [posts, setPosts] = useState([]);
  const [error, setEroor] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // just trying async-await
  useEffect(() => {
    (async function () {
      try {
        const res = await fetch(API_URL);
        const posts = await res.json();
        setPosts(posts);
      } catch (error) {
        setEroor(error.message);
      }
      setIsLoading(false);
    })();
  }, []);

  //   useEffect(() => {
  //     fetch(API_URL)
  //       .then((response) => response.json())
  //       .then((json) => setUserList(json))
  //       .catch((error) => setEroor(error.message))
  //       .finally(() => setIsLoading(false));
  //   }, []);

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
        posts.map((user) => {
          return <Post key={user.id} {...user}></Post>;
        })
      )}
    </>
  );
}
