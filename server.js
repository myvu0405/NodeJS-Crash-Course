const http=require('http');
const fs=require('fs');
const _ = require('lodash');

const server= http.createServer((req,res)=>{
    // console.log('request made');
    //console.log(req.url,req.method);

    //lodash test
    const num=_.random(0,20);
    console.log(num);
    const greet = _.once(()=> {
        console.log('this runs only ONCE!');
    })
    greet();
    //set header content type
    res.setHeader('Content-type','text/html');
    /*
    res.write('<h1>Hello here comes the res</h1>');
    res.end();
    */

    //send html file 
    let path='./views/';
    switch(req.url){
        case '/':
            path+='index.html';
            res.statusCode=200;
            break;
        case '/about':
            path+='about.html';
            res.statusCode=200;
            break;
        case '/about-me'://redirection
            
            res.statusCode=301;
            res.setHeader('Location','/about');
            res.end();
            break;
        default:
            path+='404page.html';
            res.statusCode=404;
            break;
    }
    fs.readFile(path,(err,data) =>{
        if(err){
            console.log(err);
            res.end();
        }
        else {
            /*
            res.write(data);
            res.end();
            */
           //similar above
           res.end(data);
        }
    });
});

server.listen(3000,'localhost',()=>{
    console.log('listening to request on port 3000');
});
