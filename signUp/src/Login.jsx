import React, { useState } from 'react';
import './style.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  function handleUsername(e) {
    setUsername(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    const data = JSON.parse(localStorage.getItem('user'));

    if (
      data &&
      username === data.name &&
      password === data.password
    ) {
      alert("You've registered")
    } else {
      alert('Invalid username or password');
    }
    setUsername('');
    setPassword('');
  }

  return (
    <div className='container'>
      <div className='form-container'>
        <h2>Login Page</h2>
        <form onSubmit={handleSubmit} className='form'>
          <input
            type="text"
            value={username}
            placeholder='Username'
            onChange={handleUsername}
          />
          <input
            type="password"
            value={password}
            placeholder='Password'
            onChange={handlePassword}
          />
          <button type="submit">Login</button>
          <p>
            Not a user?
            <a href='/signup'> Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
