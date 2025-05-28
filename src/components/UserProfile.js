import React, { useState } from 'react';

function UserProfile() {
  const [bio, setBio] = useState('');
  const [skills, setSkills] = useState('');
  const [resume, setResume] = useState(null);

  return (
    <div className="card">
      <h2>User Profile</h2>
      <textarea placeholder="Bio" value={bio} onChange={e => setBio(e.target.value)} />
      <input type="text" placeholder="Skills (comma-separated)" value={skills} onChange={e => setSkills(e.target.value)} />
      <input type="file" onChange={e => setResume(e.target.files[0])} />
      <p><strong>Bio:</strong> {bio}</p>
      <p><strong>Skills:</strong> {skills}</p>
      {resume && <p><strong>Resume:</strong> {resume.name}</p>}
    </div>
  );
}

export default UserProfile;