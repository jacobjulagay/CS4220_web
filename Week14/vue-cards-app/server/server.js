const bodyParer = require('body-parser')
const cors = require('cors')
const express = require('express')
const path = require('path')

// Recap of project begins at 1:51 - 1:54 on week 14

const app = express() // Insantiate app w/ Express()
const port = 8888; // Chooses a port to use


// Place at the top bc will be called in order
app.use(bodyParer.json());// middleware - parse json body
app.use(cors()); // I don't get this
app.use(express.static(path.join(__dirname, '..','/client')))// this will get the absolute path vs relative path



// Grabbing all routes ffrom routes api folder
const people_Routes = require('./api/routes.js');
// Prefix all routes in routes.js file w/ '/api'. This Helps reduce redundancy
app.use('/api', people_Routes) 

// Starts
app.listen(port, () =>{
    console.log(`Server is running on port ${port}`)
})