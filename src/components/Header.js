import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div>
        <img src="/logo.png" alt="TechConnectHub Logo" className="logo" />
        <h1>TechConnectHub</h1>
      </div>
      <p>Built by Zero-Day-Hunters for Hackathon 🚀</p>
    </header>
  );
};

export default Header;
