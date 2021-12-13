const http = require("http");

// this is blocking state in which we havefor loop nested in "/about" page. 
// blocking is that other 
// pages dont run until the loop does its work this is cause crashing app

const server = http.createServer((req,res)=>{

    if(req.url==="/"){
        res.write("home page");
        res.end();
    };
    if(req.url==="/about"){
            //BLOCKING CODE
        for (let i = 0; i < 10000; i++) {
            for (let j = 0; j < 10000; j++) {
                console.log(`${i} ${j}`);;
            }
        }
        res.write("about page");
        res.end();
    }else{
        res.write("error page");
    res.end();}
})
server.listen(3002,
    ()=>{console.log("Server is running on port 3002");
});