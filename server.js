const http = require('http'); // module for network 
const fs = require('fs') // grab files
const url = require('url'); // to make request from clients
const figlet = require('figlet'); // turn strings to beautiful 404


// Looks at what it is being asked and gives a response back
const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/api') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        let flipCoin = Math.ceil(Math.random() * 3) === 1 ? 'death' : 'cake'
        const objToJson = {
          flip: flipCoin,
        }
        res.end(JSON.stringify(objToJson));
  }
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);
