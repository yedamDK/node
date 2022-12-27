const http = require("http");
const server = http.createServer((req, res) => {
  console.log("res");
  res.write("hello");
  res.end();
});
server.listen(3000, () => {
  console.log("server is running http://127.0.0.1:3000");
});
