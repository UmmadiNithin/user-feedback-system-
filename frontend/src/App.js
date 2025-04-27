import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FeedbackForm from './components/FeedbackForm';
import FeedbackDashboard from './components/FeedbackDashboard';



function App() {
  return (
    <Router>
      <div className="container">
       
        <Routes>
          <Route path="/" element={<FeedbackForm />} />
          <Route path="/dashboard" element={<FeedbackDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
