import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './FeedbackForm.css';


const FeedbackForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', text: '', category: 'Suggestion' });
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:5000/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    alert('Feedback Submitted!');
    setFormData({ name: '', email: '', text: '', category: 'Suggestion' });
  };

  const goToDashboard = () => {
    navigate('/dashboard'); 
  };

  return (
    
    
<form className="feedback-form" onSubmit={handleSubmit}>
  <h2>User Feedback Form</h2>

  {/* Name Input */}
  <label htmlFor="name">Enter Your Name</label>
  <input 
    type="text" 
    id="name" 
    name="name" 
    placeholder="Your Name" 
    value={formData.name} 
    onChange={handleChange} 
    required 
  />

  {/* Email Input */}
  <label htmlFor="email">Enter Your Email</label>
  <input 
    type="email" 
    id="email" 
    name="email" 
    placeholder="Your Email" 
    value={formData.email} 
    onChange={handleChange} 
    required 
  />

  {/* Feedback Textarea */}
  <label htmlFor="text">Enter Your Feedback</label>
  <textarea 
    id="text" 
    name="text" 
    placeholder="Your Feedback" 
    value={formData.text} 
    onChange={handleChange} 
    required 
  />

  {/* Category Select */}
  <label htmlFor="category">Seelect Category</label>
  <select 
    id="category" 
    name="category" 
    value={formData.category} 
    onChange={handleChange}
  >
    <option value="Suggestion">Suggestion</option>
    <option value="Bug Report">Bug Report</option>
    <option value="Feature Request">Feature Request</option>
  </select>

  {/* Submit Button */}
  <button type="submit">Submit Feedback</button>

  {/* Go to Dashboard Button */}
  <button type="button" onClick={goToDashboard}>
    Go to Dashboard
  </button>
</form>

  
  );
};

export default FeedbackForm;
