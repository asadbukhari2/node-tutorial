const http = require("http");

// req and res are big objects

const server = http.createServer((req,res)=>{
if(req.url === "/"){
    res.end("Welcome to home page");
}
if(req.url === "/about"){
    res.end("Welcome to about page");
}
res.end(`
<h1>Error!</h1>
<p>page not found</p>
<a href="/">goto home </a>
`)
})


server.listen(3002);