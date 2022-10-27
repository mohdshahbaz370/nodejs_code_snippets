const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 8080;

server = http.createServer(function (req, res) {
    res.setHeader('Content-Type', 'text/html');
    if (req.url == '/') {
        res.statusCode = 200;
        const data = fs.readFileSync('index.html');
        res.end(data);
    } else if (req.url == "/about") {
        res.statusCode = 200;
        res.end("<h3> Hello my name is Shahbaz and i am a computer science engineer and web developer</h3>");
    } else if (req.url == "/degree") {
        res.statusCode = 200;
        res.end("<p>Bachelor's in computer science engineering</p>");
    } else {
        res.statusCode = 404;
        res.end("<h1>Not Found</h1> <p> Sorry this page was not found on this server</p>");
    }
})

server.listen(port, function () {
    console.log(`Server is listening on port ${port}`)
})