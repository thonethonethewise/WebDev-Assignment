var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {

    fs.readFile('./index.html', function(error, data){
        if(error){
            res.writeHead(404, {'Content-Type' : 'text/html'})
            return res.end('404 not found');
        } 
        res.writeHead(202, {'Content-Type' : 'text/html'})
        res.write(data)
        return res.end()
    })

}).listen(3000);
