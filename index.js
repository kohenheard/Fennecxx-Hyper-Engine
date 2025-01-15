const express = require('express');
const path = require('path');

const app = express();

const port = 3000;

// Serve static files from public directory
app.use(express.static('public'));

// Main route
app.get('/', (req, res) => {

    res.sendFile(path.join(__dirname, 'public', 'index.html'));

});

// Routes for other pages
app.get('/games', (req, res) => {

    res.sendFile(path.join(__dirname, 'public', 'games.html'));

});

app.get('/apps', (req, res) => {

    res.sendFile(path.join(__dirname, 'public', 'apps.html'));

});

app.get('/settings', (req, res) => {

    res.sendFile(path.join(__dirname, 'public', 'settings.html'));

});

app.listen(port, () => {

    console.log(`Server running at http://localhost:${port}`);
    
});