import { useState } from 'react';

export default function Login() {
  const [data, setData] = useState({ username: '', password: '' });

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(data);
    alert(JSON.stringify(data));
  }

  function handleInputChange(event, name) {
    setData({ ...data, [name]: event.target.value });
  }
  return (
    <>
      <h1>Login form</h1>
      <form onSubmit={handleFormSubmit}>
        <label>Username: </label>
        <input
          type="text"
          value={data.username}
          onChange={(event) => handleInputChange(event, 'username')}
        />
        <label>Password: </label>
        <input
          type="password"
          value={data.password}
          onChange={(event) => handleInputChange(event, 'username')}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
}
