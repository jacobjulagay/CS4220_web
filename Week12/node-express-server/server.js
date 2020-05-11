const express = require('express')
const bodyParser = require('body-parser')

// Calls the express function
const app = express();
const port = 8080;

//Applying middelware on application - Don't forget
// Have to tell express is application/json
app.use(bodyParser.json({type: 'application/json'})) // Make sure theres no space in the quotes 'application/json '

// No need to specify the content-type
app.get('/', (req, res) =>{
    res.send('Hello World!')
})

app.get('/json', (req, res)=>{
    res.json({hello:'word' })
})

// 1. Two different end points 'json', it's okay because we're using two different methods which are '.get' & '.post'
// 2. You can use cli-app to test the post and get, just download it
app.post('/json', (res,req) =>{
    const body = req.body;
    console.log('receieved')
    console.log(body)
    res.json({received: body});
});

app.listen(port, () =>{
    console.log(`Server is listening on port ${port}`)
})