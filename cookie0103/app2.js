const http = require("http");
const cookie = require("cookie");

http
  //(req,res)는 콜백함수
  .createServer((req, res) => {
    //쿠키문자열을 파싱해서 배열로 바꾸기 터미널 창에서 npm install cookie 후 위에 cookie require 만들기
    const cookies = cookie.parse(req.headers.cookie);
    console.log(cookies.username);
    console.log(cookies);

    res.end("hello");
  })
  .listen(3000, () => {
    //server.listen(300);해도 됨 메서지 체인
    console.log("server running http://localhost:3000");
  });
