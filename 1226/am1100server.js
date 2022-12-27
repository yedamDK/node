const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("main");
  } else if (req.url == "/info") {
    let html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>info1100.html</title>
</head>
<body>
  <h3>my info</h3>
  <div>이름: 김유미</div>
  <div>취미: 게임</div>
</body>
</html>`;
    res.write(html);
    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(3000, () => {
  console.log("server is running http://127.0.0.1:3000");
});
