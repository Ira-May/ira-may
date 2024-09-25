const express = require('express');
const app = express();
const port = 3000;
const indexRoutes = require('./routes/index');

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files (e.g., CSS, images)
app.use(express.static('public'));

// Use routes defined in routes/index.js
app.use('/', indexRoutes);

// Start the server
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
