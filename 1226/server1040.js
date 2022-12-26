const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("main");
  } else if (req.url == "/info") {
    res.write("kim");
    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(3000, () => {
  console.log("server is running http://127.0.0.1:3000");
});
