import React, { useEffect, useState } from 'react';
import './FeedbackDashboard.css';

const FeedbackDashboard = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [filterCategory, setFilterCategory] = useState('');
  const [sortOrder, setSortOrder] = useState('newest');

  useEffect(() => {
    fetchFeedbacks();
  }, [filterCategory, sortOrder]);

  const getRandomLightColor = () => {
    
    const r = Math.floor(Math.random() * 56) + 200; 
    const g = Math.floor(Math.random() * 56) + 200; 
    const b = Math.floor(Math.random() * 56) + 200; 
    
    return `rgb(${r}, ${g}, ${b})`;
  };
  

  const fetchFeedbacks = async () => {
    let url = 'http://localhost:5000/api/getall';
    const params = [];
  
    if (filterCategory) {
      params.push(`category=${filterCategory}`);
    }
  
   
    if (sortOrder) {
      params.push(`sort=${sortOrder}`);
    }
  
    
    if (params.length > 0) {
      url += `?${params.join('&')}`;
    }
  
    const response = await fetch(url);
    const data = await response.json();
    setFeedbacks(data);
  };

  return (
    <div className="feedback-dashboard">
      <h2>Feedback Dashboard</h2>
      <div className="controls">
        <select onChange={(e) => setFilterCategory(e.target.value)}>
          <option value="">All Categories</option>
          <option value="Suggestion">Suggestion</option>
          <option value="Bug Report">Bug Report</option>
          <option value="Feature Request">Feature Request</option>
        </select>
        <select onChange={(e) => setSortOrder(e.target.value)}>
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>
      </div>
      <div className="feedback-list">
        {feedbacks.map(fb => (
          <div
            key={fb._id}
            className="feedback-card"
            style={{ backgroundColor: getRandomLightColor() }} 
          >
            <h3>{fb.name}</h3>
            <p>{fb.text}</p>
            <small>{fb.category} | {new Date(fb.createdAt).toLocaleString()}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackDashboard;
