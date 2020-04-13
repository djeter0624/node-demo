// used to create a properly working api
const http = require("http");

// creates a server
http.createServer((req, res)=>{
    // res.write("")
    // response to port 8080
    res.end("hello world!!!");
}).listen(8080);







