const http = require("http");

const server = http.createServer();

server.on("request",(req,res)=>{
    res.end("welcome");
})

server.listen(5000)

// const eventEmitter = require("events");

// const customEmitter = new eventEmitter();

// customEmitter.on("response",(name,id)=>{
//     console.log(`this code is written by ${name} having id ${id}` );
// })

// customEmitter.emit("response","bukhari",321);