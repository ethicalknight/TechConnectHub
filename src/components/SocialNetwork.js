import React from 'react';

const users = [
  { name: 'Aisha', role: 'Frontend Dev' },
  { name: 'Ravi', role: 'Backend Dev' },
  { name: 'Lina', role: 'ML Enthusiast' },
];

function SocialNetwork() {
  return (
    <div className="card">
      <h2>Social Network</h2>
      <ul>
        {users.map((u, idx) => (
          <li key={idx}>
            <strong>{u.name}</strong> - {u.role}
            <button>Connect</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialNetwork;