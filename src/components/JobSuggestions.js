import React from 'react';

const jobs = [
  { title: 'Frontend Intern', company: 'TechSpark', link: '#' },
  { title: 'Python Developer', company: 'CodeWave', link: '#' },
  { title: 'React JS Developer', company: 'StartupHub', link: '#' },
];

function JobSuggestions() {
  return (
    <div className="card">
      <h2>Job/Internship Suggestions</h2>
      <ul>
        {jobs.map((job, idx) => (
          <li key={idx}>
            <a href={job.link} target="_blank" rel="noreferrer">
              <strong>{job.title}</strong> - {job.company}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobSuggestions;