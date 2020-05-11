const http = require('http');
const port = 8000;


//This is built in methods from Node.js. NOT UING EXPRESS.JS
const app = http.createServer((request,response) =>{

    // Handling end points - IF request matches, then do some logic.
    if(request.url === '/'){
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end('Hello Word!'); // responding at th end
    }else if(request.url === '/json'){
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.end(JSON.stringify({hello:'world'}));
    }

})

//turn server on
//Listen to local computer, and listening to this port on the computer
app.listen(port,'localhost')