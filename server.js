var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(req, res){

    var q = url.parse(req.url,true);
    var filename = "./view"+q.pathname;

    if(q.pathname=='/')
    {
        fs.readFile('./view/index.html',function(err, data){
            res.writeHead(200,{
                'Content-Type':'text/html',
            });
            res.write(data);
            res.end('Hiehehe boy');
        });
    }
    else
    {
        fs.readFile(filename, function (err, data) {
            if (err){
                res.writeHead(404,{
                    'Content-Type':'text/html'
                });
                res.end('<h1>Hey Not Found ^_^</h1>');
            }
            else
            {
                res.writeHead(200,{
                    'Content-Type':'text/html',
                });
                res.write(data);
                res.end('Hiehehe boy');
    
            }
            
    
            
          });
    }
    
console.log(q);
    
}).listen(8000);


