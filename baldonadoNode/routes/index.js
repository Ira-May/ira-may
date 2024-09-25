const express = require('express');
const router = express.Router();

// Home route (GET)
router.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

// About route (GET)
router.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

// POST route example
router.post('/submit', (req, res) => {
    // Logic for form submission would go here
    res.send('Form Submitted');
});

module.exports = router;
