// Server side code
require('dotenv').config();

// Express to run server and routes
const express = require('express');

// Start up an instance of app
const bodyParser = require('body-parser');

// Cors for cross origin allowance
const cors = require('cors');

// Initialize the main project folder
const path = require('path');

const app = express();

// Here we are configuring express to use body-parser as middle-ware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/api-key', (req, res) => {
    res.json({ apiKey: process.env.API_KEY });
});

app.use(express.static(path.join(__dirname, '..', '..')));

let projectData = {};

const port = 3000;
const server = app.listen(port, listening);

/**
 * Listening function
 * @description Function to log the port where the server is running
 */
function listening() {
    console.log(`Server running on port: ${port}`);
}

// GET route returns projectData
app.get('/all', (req, res) => {
    res.send(projectData);
});

// POST route adds data to projectData
app.post('/add', (req, res) => {
    projectData = {
        temperature: req.body.temperature,
        date: req.body.date,
        userResponse: req.body.userResponse
    };
    res.send(projectData);
});

