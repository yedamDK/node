const http = require("http");
const server = http.createServer((req, res) => {
  const myurl = new URL("http://127.0.0.1:3000" + req.url);
  console.log(myurl.pathname);
  console.log(myurl.searchParams);
  if (myurl.pathname == "/") {
    res.end("main");
  } else if (myurl.pathname == "/info") {
    //res.setHeader("content-type", "text/html");
    let userid = myurl.searchParams.get("userid");
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
  <div>id: ${userid}</div>
  <div>이름: 김유미</div>
  <div>취미: 게임</div>
</body>
</html>`;
    res.write(html);
    res.end();
  } else if (myurl.pathname == "/boardReg1116") {
    res.setHeader("content-type", "text/html");
    let html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h3>게시글 작성</h3>
    <div><input type="text" /></div>
    <div><textarea name="" id="" cols="30" rows="10"></textarea></div>
    <div><button>등록</button></div>
    <form></form>
  </body>
</html>
`;
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
