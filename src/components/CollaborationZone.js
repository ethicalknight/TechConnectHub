import React from 'react';

const projects = [
  { name: 'Hackathon AI App', members: 2 },
  { name: 'Portfolio Website', members: 3 },
  { name: 'Data Science Team', members: 1 },
];

function CollaborationZone() {
  return (
    <div className="card">
      <h2>Collaboration Zone</h2>
      <ul>
        {projects.map((p, idx) => (
          <li key={idx}>
            <strong>{p.name}</strong> - {p.members} members
            <button>Join</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CollaborationZone;