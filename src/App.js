import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import LearningSuggestions from './components/LearningSuggestions';
import SocialNetwork from './components/SocialNetwork';
import CollaborationZone from './components/CollaborationZone';
import ProgressTracker from './components/ProgressTracker';
import JobSuggestions from './components/JobSuggestions';
import TechFeed from './components/TechFeed';
import Login from './Login';

function App() {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('profile');

  useEffect(() => {
    const stored = localStorage.getItem('techConnectUser');
    if (stored) setUser(JSON.parse(stored));
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return <UserProfile />;
      case 'learning':
        return <LearningSuggestions />;
      case 'network':
        return <SocialNetwork />;
      case 'collab':
        return <CollaborationZone />;
      case 'progress':
        return <ProgressTracker />;
      case 'jobs':
        return <JobSuggestions />;
      case 'feed':
        return <TechFeed />;
      default:
        return <UserProfile />;
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="tab-bar">
        <button onClick={() => setActiveTab('profile')}>Profile</button>
        <button onClick={() => setActiveTab('learning')}>Learning</button>
        <button onClick={() => setActiveTab('network')}>Network</button>
        <button onClick={() => setActiveTab('collab')}>Collaboration</button>
        <button onClick={() => setActiveTab('progress')}>Progress</button>
        <button onClick={() => setActiveTab('jobs')}>Jobs</button>
        <button onClick={() => setActiveTab('feed')}>Feed</button>
      </div>
      <main className="App-main">{renderTabContent()}</main>
      <Footer />
    </div>
  );
}

export default App;
