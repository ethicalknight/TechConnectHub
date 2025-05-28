import React, { useState } from 'react';

function Login({ onLogin }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { name, email };
    localStorage.setItem('techConnectUser', JSON.stringify(user));
    onLogin(user);
  };

  return (
    <div className="card">
      <h2>Welcome to TechConnectHub</h2>
      <p>Please log in to continue</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
// This component handles user login, storing user data in localStorage
// and calling the onLogin callback to update the app state.