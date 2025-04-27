const Feedback = require('../models/Feedback');

const submitFeedback = async (req, res) => {
    try {
      const { name, email, text, category } = req.body;
      console.log('Received Feedback:', { name, email, text, category });
  
      const feedback = new Feedback({ name, email, text, category });
      const savedFeedback = await feedback.save();
  
      console.log('Saved Feedback:', savedFeedback);
  
      res.status(201).json({ message: 'Feedback submitted successfully!' });
    } catch (error) {
      console.error('Error submitting feedback:', error.message);
      res.status(500).json({ error: error.message });
    }
  };
  


const getAllFeedback = async (req, res) => {
  try {
    const { category, sort } = req.query;
    let filter = {};
    if (category) filter.category = category;

    let sortOption = { createdAt: -1 };
    if (sort === 'oldest') sortOption = { createdAt: 1 };

    const feedbacks = await Feedback.find(filter).sort(sortOption);
    res.json(feedbacks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch feedback' });
  }
};




const filterFeedback = async (req, res) => {
    try {
      const { category } = req.query;
  
      
      if (!category) {
        return res.status(400).json({ error: 'Category is required for filtering' });
      }
  
      const feedbacks = await Feedback.find({ category });
      res.json(feedbacks);
    } catch (error) {
      res.status(500).json({ error: 'Failed to filter feedback' });
    }
  };
  

  const sortFeedback = async (req, res) => {
    try {
      const { order } = req.query;
      let sortOption = { createdAt: -1 };
  
      if (order === 'oldest') {
        sortOption = { createdAt: 1 };
      } else if (order !== 'newest') {
        return res.status(400).json({ error: 'Invalid sort order. Use "newest" or "oldest".' });
      }
  
      const feedbacks = await Feedback.find().sort(sortOption);
      res.json(feedbacks);
    } catch (error) {
      res.status(500).json({ error: 'Failed to sort feedback' });
    }
  };



module.exports = { submitFeedback, getAllFeedback ,filterFeedback,sortFeedback};
