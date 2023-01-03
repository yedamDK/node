const http = require("http");

http
  //(req,res)는 콜백함수
  .createServer((req, res) => {
    //쿠키저장않고 읽기만 할 때
    console.log(req.headers.cookie);

    res.writeHead(200, {
      "Set-Cookie": ["yummy_cookie=choco", "username=hong"],
    }); //200이면 ok , 뒤에는 옵션 ["쿠키이름=쿠키값"] f12 network에서 headers에서 response headers와 request headers에 set cookie가 보임 newwork옆에 application 추가해서 누르면 cookies에 보임

    res.end("hello");
  })
  .listen(3000, () => {
    //server.listen(300);해도 됨 메서지 체인
    console.log("server running http://localhost:3000");
  });
