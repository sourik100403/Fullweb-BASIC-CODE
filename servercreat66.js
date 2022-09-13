// const http=require('http');
// const fs=require('fs');
// const filecontent=fs.readFileSync('project54.html');

// const server=http.createServer((req,res)=>{
//     res.writeHead(200,{'content-type':'text/html'});
//     res.end(filecontent);
// });

// server.listen(8002,'127.0.0.1',()=>{
//     console.log("listen on port 8002");
// });

const http=require('http');
const fs=require('fs');

const hostname='127.0.0.1';
const port=3000;

const home=fs.readFileSync('home.html');
const about=fs.readFileSync('./about.html');
const contact=fs.readFileSync('./contact.html');
const service=fs.readFileSync('./service.html');

const server=http.createServer((req,res)=>{
    console.log("req.url");
    url=req.url;
    res.statusCode=200;
    res.setHeader('content-type','text/html');

    if(url=='/'){
        res.end(home);
    }
    else if(url=='/about'){
        res.end(about);
    }
    else if(url=='/contact'){
        res.end(contact);
    }  
    else if(url=='/service'){
        res.end(service);
    }
    else{
        res.statusCode=404;
        res.end("<h1>404 not found</h1>")
    }
});

server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);

});