import React from 'react';

function TechFeed() {
  const posts = [
    {
      title: "🚀 OpenAI Launches GPT-5!",
      content: "OpenAI has announced the release of GPT-5 with improved performance and reasoning...",
      link: "#"
    },
    {
      title: "🏁 Hackathon: Build With AI (June 15–17)",
      content: "Join developers across the world in this 48-hour hackathon. Prizes worth $10,000!",
      link: "#"
    },
    {
      title: "📰 JavaScript 2025: What’s New?",
      content: "A new proposal brings exciting syntax improvements. Here’s what you need to know.",
      link: "#"
    }
  ];

  return (
    <div className="feed">
      <h2>Tech News & Hackathons</h2>
      {posts.map((post, index) => (
        <div key={index} className="feed-post">
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <a href={post.link}>Read more</a>
        </div>
      ))}
    </div>
  );
}

export default TechFeed;
