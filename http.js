var http = require("http");

var server = http.createServer(function (req, res) {

    console.log("Request received");

    res.writeHead(200, { "Content-Type": "text/html" });

    res.write("hello");
    res.end();
});

server.listen(90, '127.0.0.1');
console.log("Server started");