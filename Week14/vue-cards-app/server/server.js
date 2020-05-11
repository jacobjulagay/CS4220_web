const bodyParer = require('body-parser')
const cors = require('cors')
const express = require('express')
const path = require('path')

const app = express() // Insantiate app w/ Express()
const port = 8888; // Chooses a port to use

app.use(bodyParer.json());// middleware - parse json body
app.use(cors());
app.use(express.static(path.join(__dirname, '..','/client')))// this will get the absolute path vs relative path



const apiRoutes = require('./api/routes.js');
app.use('/api', apiRoutes) // use apiRoutes, and apply './api' to the beginning of it. Reduces having to keep typing './api' in routes

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`)
})