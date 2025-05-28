import React from 'react';

const data = {
  toLearn: ['React Basics', 'Git & GitHub'],
  inProgress: ['JavaScript'],
  completed: ['HTML/CSS'],
};

function ProgressTracker() {
  return (
    <div className="card">
      <h2>Learning Progress Tracker</h2>
      <div className="kanban">
        <div>
          <h4>To Learn</h4>
          <ul>{data.toLearn.map((t, i) => <li key={i}>{t}</li>)}</ul>
        </div>
        <div>
          <h4>In Progress</h4>
          <ul>{data.inProgress.map((t, i) => <li key={i}>{t}</li>)}</ul>
        </div>
        <div>
          <h4>Completed</h4>
          <ul>{data.completed.map((t, i) => <li key={i}>{t}</li>)}</ul>
        </div>
      </div>
    </div>
  );
}

export default ProgressTracker;