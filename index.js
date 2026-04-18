// Export the pigpio variable, express variable, define the app and port number
//const pigpio = require('pigpio-client').pigpio({host: ''});

// Export the express variable, define the app, and port number
const express = require('express')
const app = express()
const port = 3001
const host = '0.0.0.0'
const path = require('path');


// Connect to the Pi
//const ready = new Promise((resolve, reject) => {
//  pigpio.once('connected', resolve);
//  pigpio.once('error', reject);
//});



// create the main home route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/index.html'));
})


// Add the static directory
app.use(express.static(__dirname +"/static"));


// Define our directions for the robot
app.get('/forward', (req, res) => {
 res.sendFile(path.join(__dirname+'/index.html'));
})
app.get('/backward', (req, res) => {
 res.sendFile(path.join(__dirname+'/index.html'));
})
app.get('/left', (req, res) => {
 res.sendFile(path.join(__dirname+'/index.html'));
})
app.get('/right', (req, res) => {
 res.sendFile(path.join(__dirname+'/index.html'));
})
app.get('/stop', (req, res) => {
 res.sendFile(path.join(__dirname+'/index.html'));
})

// Routes for our speed control
app.get('/half', (req, res) => {
 res.sendFile(path.join(__dirname+'/index.html'));
})
app.get('/full', (req, res) => {
 res.sendFile(path.join(__dirname+'/index.html'));
});




// create the main home route
app.get('/', (req, res) => {
 res.sendFile(path.join(__dirname+'/index.html'))
})


// Create a custom error page
app.use(function(req, res, next) {
 res.status(404).send("Sorry, we can't find that!");
});

// Have the app listen to the port defined
app.listen(port, () => {
console.log('Example app listening on port ${port} and host ${host}')
})