var http = require("http");
var mongodb = require("./mongodb");

var server = http.createServer(function (req, res) {

    console.log("Request received");

    console.log(JSON.stringify(mongodb));

    mongodb.readRecords();

    if (req.url == "employees") {

    } else {

        res.writeHead(200, { "Content-Type": "text/html" });

        res.write("hello");
        res.end();
    }
});

server.listen(90, '127.0.0.1');
console.log("Server started");