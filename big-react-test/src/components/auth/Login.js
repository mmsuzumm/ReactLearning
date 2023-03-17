import { useState } from 'react';

export default function Login() {
  const [data, setData] = useState({ username: '', password: '' });

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(data);
    alert(JSON.stringify(data));
  }
  return (
    <>
      <h1>Login form</h1>
      <form onSubmit={handleFormSubmit}>
        <label>Username: </label>
        <input
          type="text"
          value={data.username}
          onChange={(event) =>
            setData({ ...data, username: event.target.value })
          }
        />
        <label>Password: </label>
        <input
          type="password"
          value={data.password}
          onChange={(event) =>
            setData({ ...data, password: event.target.value })
          }
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
}
