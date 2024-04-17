import React, { useState } from 'react';
import './LoginPage.css';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    if (username && password) {
      setLoggedIn(true);
      alert('Logged in successfully!');
    } else {
      setErrorMessage('Please fill in both username and password.');
    }
  };

  return (
    <div className="login-form">
      {loggedIn ? (
        <h1>Welcome, {username}!</h1>
      ) : (
        <div>
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
          <br />
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button onClick={handleLogin} className="login-button">Login</button>
        </div>
      )}
    </div>
  );
}

export default LoginPage;
