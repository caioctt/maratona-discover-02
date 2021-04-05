const express = require("express");
const server = express();
const routes = require("./routes")

//usando template engine
server.set('view engine', 'ejs')

server.use(express.static("public"));

//routes
server.use(routes)

//request, response
server.get('/', (request, response) =>{
    return response.sendFile(__dirname +"/views/index.html");
})

server.listen(3000, ()=> console.log("server on"))