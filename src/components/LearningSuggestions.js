import React, { useState } from 'react';

const resourceMap = {
  JavaScript: ['FreeCodeCamp', 'JavaScript.info', 'Udemy JS Bootcamp'],
  Python: ['Python.org', 'CS50 Python', 'Automate the Boring Stuff'],
  React: ['React Docs', 'Scrimba React Course', 'Udemy React Developer'],
};

function LearningSuggestions() {
  const [skill, setSkill] = useState('');
  const [resources, setResources] = useState([]);

  const handleSuggest = () => {
    const recs = resourceMap[skill.trim()] || ['No suggestions available'];
    setResources(recs);
  };

  return (
    <div className="card">
      <h2>Learning Suggestions</h2>
      <input
        type="text"
        placeholder="Enter a skill (e.g. JavaScript)"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
      />
      <button onClick={handleSuggest}>Get Suggestions</button>
      <ul>
        {resources.map((r, idx) => (
          <li key={idx}>{r}</li>
        ))}
      </ul>
    </div>
  );
}

export default LearningSuggestions;