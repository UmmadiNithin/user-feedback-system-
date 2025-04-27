const express = require('express');
const { submitFeedback, getAllFeedback,filterFeedback, sortFeedback } = require('../controllers/feedbackController');

const router = express.Router();

router.post('/submit', submitFeedback);
router.get('/getall', getAllFeedback);


router.get('/filter', filterFeedback);
router.get('/sort', sortFeedback);

module.exports = router;
