const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('root path response');
    } else if (req.url === '/about') {
        res.write('this is about page');
    } else {
        res.write('not found');
    }
    res.end();
});

server.listen(3000);

console.log('listening on port 3000');
